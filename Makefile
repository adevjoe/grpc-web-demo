proto:
	@protoc -I=./api/protobuf-spec --go_out=plugins=grpc:./lib ./api/protobuf-spec/user.proto

server:
	@go run cmd/user-server/main.go