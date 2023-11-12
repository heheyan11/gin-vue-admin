
FROM alpine:latest

LABEL MAINTAINER="270101667@qq.com"

WORKDIR /go/src/github.com/flipped-aurora/gin-vue-admin/server

COPY ./config.docker.yaml ./
COPY ./server ./


EXPOSE 8888
ENTRYPOINT ./server -c config.docker.yaml
