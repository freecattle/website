FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY conf.d/ /etc/nginx/conf.d/
COPY entrypoint.sh /entrypoint.sh

RUN apk add --no-cache openssl && \
    mkdir -p /var/www/html && \
    chown -R nginx:nginx /var/www/html && \
    chmod +x /entrypoint.sh

# RUN apk add --no-cache certbot

# EXPOSE 80
EXPOSE 443

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
