#/bin/bash

mongod --config /etc/mongod.conf

cd /opt/elo7

node app.js
