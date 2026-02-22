package main

import (
	"log"
	"net/http"
	"os"

	"glyphforged-gorewrite/internal/web"
)

func main() {
	listenAddr := os.Getenv("ADDR")
	if listenAddr == "" {
		listenAddr = ":8080"
	}

	server, err := web.NewServer()
	if err != nil {
		log.Fatalf("failed to build server: %v", err)
	}

	log.Printf("glyphforged-gorewrite listening on %s", listenAddr)
	if err := http.ListenAndServe(listenAddr, server.Routes()); err != nil {
		log.Fatalf("server stopped: %v", err)
	}
}
