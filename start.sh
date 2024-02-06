#!/bin/bash
app="frontend"
docker build -t ${app} .
docker run -d --name "Frontend" -p 8080:80 ${app}