FROM node:16.13.0-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=prod
COPY . .

CMD ["npm", "start"]