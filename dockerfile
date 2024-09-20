FROM debian:latest

LABEL app="umi-ocr-handleServer"
LABEL maintainer="renanfreire"
LABEL version="1.0"

run apt-get update && \
    apt-get install -yq --no-install-recommends \
    curl \ 
    wget \
    gnupg \
    ca-certificates

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x -o nodesource_setup.sh && \
    bash nodesource_setup.sh && \
    apt-get install -y nodejs \
    build-essential && \
    node --version && \ 
    npm --version

RUN curl -L https://fly.io/install.sh | sh

ADD . /app/
WORKDIR /app

RUN npm i && npm run build

ENV FLYCTL_PATH=/root/.fly/bin/flyctl

ENV PATH="$PATH:/root/.fly/bin"

RUN chmod +x /root/.fly/bin/flyctl

RUN echo 'alias fly=/root/.fly/bin/flyctl' >> ~/.bashrc

CMD [ "node", "dist/server.js"]