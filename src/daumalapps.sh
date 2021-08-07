#!/bin/sh

sudo /opt/lampp/bin/mysql.server start
sudo /home/$USER/daumalapps/nodemon -x 'node app.js || touch app.js'