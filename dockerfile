FROM node:12.18.3

LABEL version="1.0"

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install --production
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]

FROM nginx
EXPOSE 80
COPY ../nginx/nginx.conf /etc/nginx/conf.d/nginx.conf