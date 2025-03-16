FROM node:latest

WORKDIR /backend

COPY . .

RUN npm install -g nodemon
RUN npm install

EXPOSE 3003

CMD [ "npm", "run", "dev" ]