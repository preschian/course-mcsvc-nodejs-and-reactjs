FROM node:16-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=prod
COPY . .

CMD ["npm", "run", "dev"]