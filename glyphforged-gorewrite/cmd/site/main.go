package main

import (
	"log"
	"net/http"
	"os"

	"glyphforged-gorewrite/internal/web"
)

func main() {
	addr := os.Getenv("ADDR")
	if addr == "" {
		addr = ":8080"
	}

	srv, err := web.NewServer()
	if err != nil {
		log.Fatalf("failed to build server: %v", err)
	}

	log.Printf("glyphforged-gorewrite listening on %s", addr)
	if err := http.ListenAndServe(addr, srv.Routes()); err != nil {
		log.Fatalf("server stopped: %v", err)
	}
}
