FROM node

WORKDIR /frontend

COPY src ./src
COPY public ./public
COPY package-lock.json .
COPY package.json .

RUN npm install

CMD npm start