#!/bin/sh

sudo /opt/lampp/bin/mysql.server start
sudo nodemon -x 'node /home/$USER/daumalapps/app.js || touch /home/$USER/daumalapps/app.js'