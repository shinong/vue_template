#!/bin/bash
app="frontend"
docker build -t ${app} .
docker run -d --name ${app} -p 8080:80 ${app}