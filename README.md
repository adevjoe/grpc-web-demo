# grpc-web-demo

grpc web example for go and vue

### Need Dependencies

`go >= 1.11` `docker` `docker-compose` `node-js` `yarn` `protoc` `protoc-gen-grpc-web`

### Quick Start

```shell
$ docker network create grpc-web-demo

$ make server

$ make envoy

$ make client
```

Open your browser and go to http://localhost:8080

Shutdown? `make shutdown`