FROM node

WORKDIR /backend

COPY . .

RUN npm init -y && npm install express \
bcrypt bcryptjs colors cors dotenv \
express express-async-handler mongoose jsonwebtoken

CMD ["npm", "start"]