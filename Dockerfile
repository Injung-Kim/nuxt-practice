# Source: https://nuxtjs.org/deployments/koyeb#dockerize-your-application
FROM node:16.17.0 as builder

WORKDIR /app

COPY . .

RUN yarn install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN yarn build

RUN rm -rf node_modules && \
  NODE_ENV=production yarn install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive \
  --production=true

FROM node:16.17.0

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0
ENV PORT 8080

CMD [ "yarn", "start" ]
