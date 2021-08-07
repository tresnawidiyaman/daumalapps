#!/bin/sh

sudo /opt/lampp/bin/mysql.server start
sudo nodemon -x 'node /home/daumalapps/app.js || touch /home/daumalapps/app.js'