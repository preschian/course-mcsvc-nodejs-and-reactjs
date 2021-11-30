FROM node:16-alpine

WORKDIR /app
COPY ./ .
RUN npm install --only=prod

CMD ["npm", "start"]