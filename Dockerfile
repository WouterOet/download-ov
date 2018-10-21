FROM ubuntu:16.04
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list &&
    apt-get update &&
    apt-get install wget npm -y &&
    wget https://dl.google.com/linux/linux_signing_key.pub &&
    apt update &&
    apt install google-chrome-stable -y

ENTRYPOINT /tmp/ov
CMD npm run download