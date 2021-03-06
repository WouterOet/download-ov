#!/usr/bin/env bash

set -e

apt-get update
apt-get install wget npm gnome-core -y
echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list
wget https://dl.google.com/linux/linux_signing_key.pub
apt-key add linux_signing_key.pub
apt update 
apt install google-chrome-stable -y
