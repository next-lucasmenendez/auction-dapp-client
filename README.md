# auction-dapp-client

Simple webapp client to interact with [action-dapp](https://github.com/next-fernandocerezal/auction-dapp).

## Installation

1. Install Docker CE & start docker service. Check the correct installation instructions according to your OS from [here](https://docs.docker.com/get-docker/).
3. Use `make <command>` to use the container:

| Process | Command | Description |
|:---|:---|:---|
| Build the container | `make build` | Download and build the required dependencies. |
| Run the container | `make run` | Start the vue cli container service. |
| Enter into the container shell | `make enter` | Run a commandline shell into the running container. |
| Stop the container | `make stop` | Stop the vue container service. |
| Clean container dependencies | `make clean` | Remove all stuff about container. |
| Run all | `make all` | Execute `clean -> build -> run` processes. |
| Show container logs | `make logs` | Print container logs. |

## Run container

To run the container, type `make all` into the root repository folder.

## Work with Vue files

With the container running, visit [`localhost:8080`](https://localhost:8080/) to show the webapp. You can edit all project files, the service has the hot-reload feature enabled.