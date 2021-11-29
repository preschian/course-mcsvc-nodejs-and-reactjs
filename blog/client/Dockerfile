FROM node:16.13.0-alpine

ENV CI=true

WORKDIR /app
COPY ./ ./
RUN npm ci

CMD ["npm", "start"]