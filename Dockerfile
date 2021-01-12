FROM node:12-alpine as builder

COPY . /app

RUN cd /app \
 && yarn install \
 && NODE_ENV=production yarn run build

FROM nginx:1.19-alpine

COPY --from=builder /app/out/ /usr/share/nginx/html/
