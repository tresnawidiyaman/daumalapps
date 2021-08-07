#!/bin/sh
echo "Start Installation Autostar DaumalApps"
echo "Please Wait"
echo ". . . . . ."
sudo mv src/daumalapps.sh /usr/local/bin/
sudo mv src/daumalapps.service /etc/systemd/system/
sudo chmod 755 /usr/local/bin/daumalapps.sh
sudo chmod 755 /etc/systemd/system/daumalapps.service
sudo systemctl daemon-reload
sudo systemctl enable daumalapps.service
echo "Installation Succesfull, please reboot your system !"