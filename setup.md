# Setup Server & Backend

## Installasi Server
### Download Xampp for Linux
Untuk kebutuhan server kita membutuhkan layanan mysql, disini untuk memastikan layanan tersebut stabil kita akan gunakan xampp. Maka dari itu kita download terlebih dahulu dengan menggunakan perintah berikut/ <br>
` wget https://www.apachefriends.org/xampp-files/7.4.22/xampp-linux-x64-7.4.22-0-installer.run `<br>

Setelah berhasil di download, kita berikan hak akses pada file tersebut. <br>
` chmod +x xampp-linux-x64-7.4.22-0-installer.run `

### Installasi Webserver dan Database Server
Selanjutnya kita lakukan installasi. Untuk melakukan installasi kita dapat menggunakan perintah berikut.<br>
` ./xampp-linux-x64-7.4.22-0-installer.run `<br>

Kamu akan menemukan pertanyaan seperti ini, klik yes terus untuk melanjutkan hingga proses installasi selesai<br>


### Installasi Nodejs dan NPM Packager
Dikarenakan backend yang kita gunakan untuk API berbasis Express.js maka kita harus melakukan installasi nodejs dan npm packager sehingga nanti aplikasi dapat dijalanakan.
` sudo apt-get install nodejs npm `

### Installasi Nodemon 
Nodemon merupakan salah satu paket pendukung dari nodejs yang berfungsi menjalankan kembali aplikasi apabila terjadi perubahan pada data, ini berfungsi untuk melakukan restart juga apabila ada input yang tidak sesuai dengan parameter data yang sudah ditentukan.
` sudo npm install nodemon -g `

## Konfigurasi Server
### Mengakses mysql
Untuk melakukan akses pada aplikasi database mysql kita dapat menggunakan perintah berikut
` sudo /opt/lampp/bin/mysql -u root -p ` <br>
kamu akan diminta password mysql, tapi pada installasi awal biasanya mysql tidak diberikan password jadi cukup klik enter saja.

### Melihat isi database
Untuk melihat list dari database yang ada pada mysql, kita dapat menggunakan perintah berikut setelah login pada mysql
` show databases; `

### Membuat database baru
Untuk membuat database baru, kamu dapat menggunakan perintah berikut ini.
` create database namadatabase;`

### Masuk kedalam database
Untuk masuk kedalam database kita bisa menggunakan perintah berikut
` use namadatabase; `

### Melihat isi table database
Untuk melihat table apa saja dalam database, kita bisa menggunakan perintah berikut
` show tables; `

### Melihat coloum dari table database
Didalam sebuah table biasanya kita membuat beberapa coloum, untuk melihat coloum tersebut kita bisa menggunakan perintah berikut
` DESCRIBE namatable; `

### Mengubah type data dari coloum
Pada beberapa kasus kita salah membuat type data untuk coloum yang sudah kita buat dalam table database, untuk mengubahnya kita bisa mengunakan perintah berikut<br>
` ALTER TABLE namatable MODIFY namacoloum INTEGER; ` <br>
Pastikan kita sudah masuk terlebih dahulu pada database yang akan di modifikasi coloumnya.

### Keluar dari mysql console
Untuk keluar dari database console kita dapat menggunakan perintah berikut
` quit; `

## Setup Aplikasi Backend
### Clone aplikasi ke server
Hal pertama yang perlu kita lakukan adalah melakukan clone aplikasi API yang sebelumnya sudah dibuat dari alamat github yang sudah disesuaikan, sebelum itu pastikan dulu kita berada pada directory home dengan menggunakan perintah berikut.<br>
` cd /home/`<br>

Setelah itu lakukan clone menggunakan perintah berikut <br>
` sudo git clone https://github.com/tresnawidiyaman/daumalapps.git ` <br>

Selanjutnya ketika clone berhasil, masuk ke directory clone tersebut ` cd daumalapps `

### Import sql database
Aplikasi backend yang di clone sudah disertai dengan sql database yang dapat digunakan, untuk melihat file sql tersebut kamu dapat menggunakan perintah `ls -l`<br>
```
warriornux@WarriornuxDevelopment:~/daumalapps$ ls -l
total 148
-rw-rw-r--   1 warriornux warriornux    751 Aug  5 06:16 README.md
-rwxrwxr-x   1 warriornux warriornux    782 Aug  5 06:16 app.js
drwxrwxr-x 164 warriornux warriornux   4096 Aug  5 06:16 node_modules
-rwxrwxr-x   1 warriornux warriornux 119362 Aug  5 06:16 package-lock.json
-rwxrwxr-x   1 warriornux warriornux    390 Aug  5 06:16 package.json
-rw-rw-r--   1 warriornux warriornux   2768 Aug  5 06:16 setup.md
-rw-rw-r--   1 warriornux warriornux   3583 Aug  5 06:16 smart_hillconplant.sql
drwxrwxr-x   5 warriornux warriornux   4096 Aug  5 06:16 src
```
Kamu akan melihat nama file database dengan smart_hilconplant.sql, sebelum mulai meakukan import pertama kamu harus membuat sebuah database dengan nama smart_hilconplant. Kamu bisa mengikuti instruksi sebelumnya [Membuat Database baru](###Membuat database baru)<br>

Setelah kamu membuat databse tersebut, selanjutnya import database tersebut dengan perintah <br>
` sudo /opt/lampp/bin/mysql -u root -p smart_hillconplant < smart_hillconplant.sql `

### Mengubah konfigurasi database aplikasi (Optional)
Aplikasi backend di desain untuk digunakan pada server localhost, apabila kamu menggunakan server cloud dan mysql mu diberi password maka kita harus mengubahnya.
Untuk mengubahnya kita bisa masuk kedalam file konfigurasi dengan perintah berikut <br>
` sudo nano src/configs/database.js ` <br><br>

Maka akan muncul configurasi berikut, ubah dan sesuaikan<br>
```
module.exports = {
    host: 'alamatippublickamu',
    user: 'root',
    password: '',
    database: 'smart_hillconplant'
}
```

Setelah kamu ubah, simpan dengan menekan `ctrl+x` lalu klik y untuk mengonfirmasi.

### Menjalankan aplikasi
Untuk menjalankan aplikasi backend dari nodejs ini kamu dapat menggunakan perintah berikut<br>
`sudo node app.js` <br>

Jika muncul tampilan tersebut, maka aplikasimu sudah berhasil dijalankan<br>
```
warrior@warriorVM:~/www/daumalapps$ sudo node app.js 
Server dijalankan pada port 8000
Data Pegawai connected, yeah !
Data Activity connected, yeah !
 
```

Selanjutnya kamu hanya perlu melakukan check menggunakan postman apakah aplikasi sudah berjalan atau belum.

## Jalankan Aplikasi Otomatis
### Installasi file
Untuk menjalankan aplikasi backend ini secara otomatis ketika server di restart, maka kamu hanya perlu melakuakn beberapa perintah berikut. Pertama beri akses kepada file <br>
` chmod +x installapps.sh `<br>

Setelah itu lakukan installasi
` sudo ./installapps.sh `<br>

Setelah installasi selesai dilakukan, restart server.
` sudo reboot `

### Memastikan Aplikasi sudah berjalan
Setelah server hidup kembali, kita coba untuk memastiakan apakah aplikasi yang sudah kita install tadi berjalan dengan baik. Caranya dengan menggunakan perintah berikut <br>
` systemctl status daumalapps.service `<br>
Jika muncul seperti dibawah ini, maka aplikasi backend sudah berjalan dengan baik dan kita hanya perlu mengoperasikannya baik itu dari apps fronend yang kita buat maupun dengan postman <br>
```
warrior@warriorVM:~$ sudo systemctl status daumalapps.service 
● daumalapps.service
     Loaded: loaded (/etc/systemd/system/daumalapps.service; enabled; vendor preset: enabled)
     Active: active (running) since Sat 2021-08-07 04:39:16 UTC; 1min 48s ago
   Main PID: 1230 (daumalapps.sh)
      Tasks: 58 (limit: 1136)
     Memory: 752.0M
     CGroup: /system.slice/daumalapps.service
             ├─1230 /bin/sh /usr/local/bin/daumalapps.sh
             ├─1320 /bin/sh /opt/lampp/bin/mysqld_safe --datadir=/opt/lampp/var/mysql --pid-file=/opt/lampp/var/mysql/warriorVM.pid
             ├─1471 /opt/lampp/sbin/mysqld --basedir=/opt/lampp --datadir=/opt/lampp/var/mysql --plugin-dir=/opt/lampp/lib/mysql/plug>
             ├─1506 sudo nodemon -x node /home/daumalapps/app.js || touch /home/daumalapps/app.js
             ├─1507 node /usr/local/bin/nodemon -x node /home/daumalapps/app.js || touch /home/daumalapps/app.js
             ├─1520 sh -c node /home/daumalapps/app.js || touch /home/daumalapps/app.js
             └─1521 node /home/daumalapps/app.js

Aug 07 04:39:17 warriorVM sudo[1506]:     root : TTY=unknown ; PWD=/ ; USER=root ; COMMAND=/usr/local/bin/nodemon -x node /home/dauma>
Aug 07 04:39:17 warriorVM sudo[1506]: pam_unix(sudo:session): session opened for user root by (uid=0)
Aug 07 04:39:17 warriorVM daumalapps.sh[1507]: [nodemon] 2.0.12
Aug 07 04:39:17 warriorVM daumalapps.sh[1507]: [nodemon] to restart at any time, enter `rs`
Aug 07 04:39:17 warriorVM daumalapps.sh[1507]: [nodemon] watching path(s): *.*
Aug 07 04:39:17 warriorVM daumalapps.sh[1507]: [nodemon] watching extensions: js,mjs,json
Aug 07 04:39:17 warriorVM daumalapps.sh[1507]: [nodemon] starting `node /home/daumalapps/app.js || touch /home/daumalapps/app.js`
Aug 07 04:39:19 warriorVM daumalapps.sh[1521]: Server dijalankan pada port 8000
Aug 07 04:39:20 warriorVM daumalapps.sh[1521]: Data Pegawai connected, yeah !
Aug 07 04:39:20 warriorVM daumalapps.sh[1521]: Data Activity connected, yeah !
```

