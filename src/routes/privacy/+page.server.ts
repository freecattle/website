import createDOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const response = await fetch('https://freecattle.s3.amazonaws.com/privacy.html');

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}

	const htmlContent = await response.text();

	const { window } = new JSDOM('<!DOCTYPE html>');
	const DOMPurify = createDOMPurify(window);
	const safeHtmlContent = DOMPurify.sanitize(htmlContent);

	return {
		props: {
			safeHtmlContent
		}
	};
};
