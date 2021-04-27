# challenges-docker

## Running golang 2mb challenge
### dockerhub image
https://hub.docker.com/repository/docker/dnogueira92/codeeducation

- clone the repository
- go in the directory /golang-2mb
- run docker build -t --name <image_name> .
- run docker run <image_name>

OR

- docker pull dnogueira92/codeeducation
- docker run dnogueira92/codeeducation


## Running nodejs + nginx challenge

- clone the repository
- go in the directory /nodejs-nginx
- run docker-compose up -d --build
- after all the containers are up, wait a few more seconds to make sure everything is initialliazed
- go to http://localhost:8080

## Running ps challenge

- clone the repository
- go in the directory /pfa-1
- run the following commands
```
docker network create node-network
docker run --network=node-network --name dbcontainer -e MYSQL_DATABASE=nodedb -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:5.7
docker build -t dnogueira92/nodejsapi ./node
docker build -t dnogueira92/nginxnodejsapi ./nginx
docker run --network=node-network --name nodejs -p 3000:3000 -d dnogueira92/nodejsapi
docker run --network=node-network --name nginx -p 8080:80 -d dnogueira92/nginxnodejsapi
```
- go to http://localhost:8080