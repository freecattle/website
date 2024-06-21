import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const response = await fetch('http://cdn.freecattle.com/terms/terms.html');

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const contentType = response.headers.get('content-type');
		if (!contentType || !contentType.includes('text/html')) {
			throw new Error('Fetched content is not HTML.');
		}

		const htmlContent = await response.text();
		const { window } = new JSDOM('<!DOCTYPE html>');
		const DOMPurify = createDOMPurify(window);
		const safeHtmlContent = DOMPurify.sanitize(htmlContent, { USE_PROFILES: { html: true } });

		return { props: { safeHtmlContent } };
	} catch (error) {
		throw error;
	}
};
