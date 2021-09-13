FROM nginx:latest

RUN apt-get update && apt-get upgrade

COPY config/nginx/nginx.conf /etc/nginx/conf.d/default.conf