#!/bin/bash
app="frontend"
docker build -t "frontend" .
docker run -d --name "Frontend" -p 8080:80 "frontend"