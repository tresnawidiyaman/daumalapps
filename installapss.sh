#!/bin/sh

sudo mv src/daumalapps.sh /usr/local/bin/
sudo mv src/daumalapps.service /etc/systemd/system/
sudo chmod 744 /usr/local/bin/daumalapps.sh
sudo chmod 664 /etc/systemd/system/daumalapps.service
sudo systemctl daemon-reload
sudo systemctl enable daumalapps.service
echo "Installation Succesfull"