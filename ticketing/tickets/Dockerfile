FROM node:16-alpine

WORKDIR /app
COPY ./ .
RUN npm ci --only=prod

CMD ["npm", "start"]