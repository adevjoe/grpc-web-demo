package main

import (
	"context"
	"log"
	"net"

	pb "github.com/adevjoe/grpc-web-demo/lib"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const (
	port = ":9090"
)

type UserServer struct {}

func (s *UserServer) GetUserInfo(ctx context.Context, in *pb.GetUserInfoReq) (out *pb.GetUserInfoRsp,err error) {
	out.UserID = 100
	out.Username = "adevjoe"
	out.Name = "joe"
	return
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterUserServer(s, &UserServer{})
	// Register reflection service on gRPC server.
	reflection.Register(s)
	log.Println("server started.")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}