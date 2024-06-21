#!/bin/sh

while ! getent hosts host.docker.internal; do
    echo "Waiting for DNS resolution for host.docker.internal..."
    sleep 1
done

mkdir -p /etc/ssl
if ! openssl req -x509 -nodes -newkey rsa:2048 -sha256 -days 3650 \
    -keyout /etc/ssl/nginx.key -out /etc/ssl/nginx.crt \
    -subj "/CN=localhost"; then
    echo "Failed to generate SSL certificate, exiting..."
    exit 1
fi

# mkdir -p /var/www/html/.well-known/acme-challenge
# if ! certbot certonly --webroot -w /var/www/html --agree-tos \
#     --non-interactive --preferred-challenges http -d freecattle.com \
#     --register-unsafely-without-email; then
#     echo "Certbot failed, exiting..."
#     exit 1
# fi
# echo "0 0 * * * certbot renew --quiet --post-hook 'nginx -s reload'" | crontab -

exec nginx -g 'daemon off;'
