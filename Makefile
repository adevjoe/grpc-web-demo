proto:
	@protoc -I=./api/protobuf-spec --go_out=plugins=grpc:./lib \
	  ./api/protobuf-spec/user.proto
	@protoc -I=./api/protobuf-spec \
      --js_out=import_style=commonjs:./web/lib ./api/protobuf-spec/user.proto
	@protoc -I=./api/protobuf-spec \
           --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./web/lib ./api/protobuf-spec/user.proto

server:
	@go mod download
	@cd cmd/user-server && CGO_ENABLED=0 GOOS=linux go build
	@cd cmd/user-server && docker-compose up -d

envoy:
	@cd deployments/envoy && docker-compose up -d

client:
	@cd web && yarn && yarn serve

shutdown:
	@cd cmd/user-server && docker-compose down
	@cd deployments/envoy && docker-compose down