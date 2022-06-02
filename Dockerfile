RUN npm config set registry https://registry.npm.taobao.org
RUN npm config set sass_binary_site=https://npm.taobao.org/mirrors/node-sass
RUN npm install

RUN npm run build

FROM nginx
MAINTAINER Ranger wilton.icp@gmail.com

COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/  /usr/share/nginx/html/
