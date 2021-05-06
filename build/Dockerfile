FROM node:latest

RUN npm install -g @vue/cli

WORKDIR /auction-dapp-client

COPY ./ /auction-dapp-client
RUN npm install

EXPOSE 8080

CMD npm run serve