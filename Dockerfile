FROM node:16-alpine

WORKDIR /var/www/html

COPY . .

RUN npm install

# CMD [ "npm","start" ]


EXPOSE 5000