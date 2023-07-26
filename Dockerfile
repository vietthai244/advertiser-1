FROM node:16.17-alpine3.15

RUN apk update && \
    apk add --no-cache libc6-compat && \
    apk add git

WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 3000
RUN yarn build
CMD ["yarn", "start"]
