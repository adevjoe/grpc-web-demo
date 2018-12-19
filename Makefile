proto:
	@protoc -I=./api/protobuf-spec --go_out=plugins=grpc:./lib \
	  ./api/protobuf-spec/user.proto
	@protoc -I=./api/protobuf-spec \
      --js_out=import_style=commonjs:./web/lib ./api/protobuf-spec/user.proto
	@protoc -I=./api/protobuf-spec \
           --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./web/lib ./api/protobuf-spec/user.proto

server:
	@go run cmd/user-server/main.go

envoy:
	@cd deployments/envoy && docker-compose up -d

client:
	@cd web && yarn serve