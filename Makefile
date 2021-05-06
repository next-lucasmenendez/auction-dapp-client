PWD := $(CURDIR)
FOLDER_NAME = $(notdir $(PWD))
PROJECT_NAME = $(shell echo $(FOLDER_NAME) | tr A-Z a-z)

DOCKERFILE := build/Dockerfile
DOCKER_IMAGE := $(PROJECT_NAME)_image
DOCKER_CONTAINER := $(PROJECT_NAME)_container

export PWD
export DOCKERFILE
export DOCKER_IMAGE
export DOCKER_CONTAINER

all:
	-docker rm -f $(DOCKER_CONTAINER)
	-docker rmi -f $(DOCKER_IMAGE)
	
	docker build -t $(DOCKER_IMAGE) -f $(DOCKERFILE) $(PWD)
	docker run -p 8080:8080 -v $(PWD)/:/auction-dapp-client -d --name=$(DOCKER_CONTAINER) $(DOCKER_IMAGE)

install: 
	docker build -t $(DOCKER_IMAGE) -f $(DOCKERFILE) .

run:
	docker run -p 8080:8080 -v $(PWD)/:/auction-dapp-client -d --name=$(DOCKER_CONTAINER) $(DOCKER_IMAGE)

enter:
	-docker exec -it $(DOCKER_CONTAINER) bash

stop:
	-docker stop $(DOCKER_CONTAINER)
	-docker rm -f $(DOCKER_CONTAINER)

clean:
	-docker stop $(DOCKER_CONTAINER)
	-docker rm -f $(DOCKER_CONTAINER)
	-docker rmi -f $(DOCKER_IMAGE)

logs: 
	docker logs $(DOCKER_CONTAINER)