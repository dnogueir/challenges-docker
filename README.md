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