FROM nginx
MAINTAINER Ranger wilton.icp@gmail.com

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/  /usr/share/nginx/html/
