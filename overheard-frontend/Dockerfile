FROM node:latest

WORKDIR /frontend

COPY . .

RUN npm install -D vite
RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "dev" ]