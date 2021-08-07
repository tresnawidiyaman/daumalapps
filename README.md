# Documentasi Setup Server & Backend
## Daftar isi
1. [Installasi Server](https://github.com/tresnawidiyaman/daumalapps/blob/master/README.md#installasi-server)
2. [Konfigurasi Server](https://github.com/tresnawidiyaman/daumalapps/blob/master/README.md#konfigurasi-server)
3. [Setup Aplikasi Backend](https://github.com/tresnawidiyaman/daumalapps/blob/master/README.md#serup-aplikasi-backend)
4. [Dokumentasi API](https://github.com/tresnawidiyaman/daumalapps/blob/master/README.md#dokumentasi-api)

## Installasi Server
### 1. Download Xampp for Linux
Untuk kebutuhan server kita membutuhkan layanan mysql, disini untuk memastikan layanan tersebut stabil kita akan gunakan xampp. Maka dari itu kita download terlebih dahulu dengan menggunakan perintah berikut. <br>
` wget https://www.apachefriends.org/xampp-files/7.4.22/xampp-linux-x64-7.4.22-0-installer.run `<br>

Setelah berhasil di download, kita berikan hak akses pada file tersebut agar bisa di eksekusi dan di install. <br>
` chmod +x xampp-linux-x64-7.4.22-0-installer.run `

### 2. Installasi Webserver dan Database Server
Selanjutnya kita lakukan installasi. Untuk melakukan installasi kita dapat menggunakan perintah berikut.<br>
` ./xampp-linux-x64-7.4.22-0-installer.run `<br>

Kamu akan menemukan pertanyaan seperti saat proses installasi, ketik yes terus untuk melanjutkan hingga proses installasi selesai.


### 3. Installasi Nodejs dan NPM Packager
Dikarenakan backend yang kita gunakan untuk API berbasis Express.js maka kita harus melakukan installasi nodejs dan npm packager sehingga nanti aplikasi dapat dijalanakan.<br>
` sudo apt-get install nodejs npm `

### 4. Installasi Nodemon 
Nodemon merupakan salah satu paket pendukung dari nodejs yang berfungsi menjalankan kembali aplikasi apabila terjadi perubahan pada data, ini berfungsi untuk melakukan restart juga apabila ada input yang tidak sesuai dengan parameter data yang sudah ditentukan.<br>
` sudo npm install nodemon -g `

## Konfigurasi Server
### 1. Menjalankan server
Karena kita membutuhkan layanan mysql saja, maka kita akan jalankan layanan tersebut saja dengan menggunakan perintah.<br>
` sudo /opt/lampp/bin/mysql.server start ` <br>
(optional) Jika kamu ingin menjalankan semua layanan (mysql, apache, ftp) maka bisa menggunakan perintah berikut<br>
` sudo /opt/lampp/lampp start `

### 2. Mengakses mysql
Untuk melakukan akses pada aplikasi database mysql kita dapat menggunakan perintah berikut
` sudo /opt/lampp/bin/mysql -u root -p ` <br>
kamu akan diminta password mysql, tapi pada installasi awal biasanya mysql tidak diberikan password jadi cukup klik enter saja. Maka hasilnya akan seperti berikut.<br>
```
warrior@warriorVM:~$ sudo /opt/lampp/bin/mysql -u root -p
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 9
Server version: 10.4.20-MariaDB Source distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MariaDB [(none)]>
```

### 3. Melihat isi database
Untuk melihat list dari database yang ada pada mysql, kita dapat menggunakan perintah berikut setelah login pada mysql<br>
` show databases; `

### 4. Membuat database baru
Untuk membuat database baru, kamu dapat menggunakan perintah berikut ini.<br>
` create database namadatabase;`

### 5. Masuk kedalam database
Untuk masuk kedalam database kita bisa menggunakan perintah berikut<br>
` use namadatabase; `

### 6. Melihat isi table database
Untuk melihat table apa saja dalam database, kita bisa menggunakan perintah berikut<br>
` show tables; `

### 7. Melihat coloum dari table database
Didalam sebuah table biasanya kita membuat beberapa coloum, untuk melihat coloum tersebut kita bisa menggunakan perintah berikut<br>
` DESCRIBE namatable; `

### 8. Mengubah type data dari coloum
Pada beberapa kasus kita salah membuat type data untuk coloum yang sudah kita buat dalam table database, untuk mengubahnya kita bisa mengunakan perintah berikut<br>
` ALTER TABLE namatable MODIFY namacoloum INTEGER; ` <br>
Pastikan kita sudah masuk terlebih dahulu pada database yang akan di modifikasi coloumnya.

### 9. Keluar dari mysql console
Untuk keluar dari database console kita dapat menggunakan perintah berikut<br>
` quit; `

## Setup Aplikasi Backend
### 1. Clone aplikasi ke server
Hal pertama yang perlu kita lakukan adalah melakukan clone aplikasi API yang sebelumnya sudah dibuat dari alamat github yang sudah disesuaikan, sebelum itu pastikan dulu kita berada pada directory home dengan menggunakan perintah berikut.<br>
` cd /home/`<br>

Setelah itu lakukan clone menggunakan perintah berikut <br>
` sudo git clone https://github.com/tresnawidiyaman/daumalapps.git ` <br>

Selanjutnya ketika clone berhasil, masuk ke directory clone tersebut ` cd daumalapps `

### 2. Import sql database
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

### 3. Mengubah konfigurasi database aplikasi (Optional)
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

### 4. Menjalankan aplikasi
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
### 1. Installasi file
Untuk menjalankan aplikasi backend ini secara otomatis ketika server di restart, maka kamu hanya perlu melakuakn beberapa perintah berikut. Pertama beri akses kepada file <br>
` chmod +x installapps.sh `<br>

Setelah itu lakukan installasi<br>
` sudo ./installapps.sh `<br>

Setelah installasi selesai dilakukan, restart server.<br>
` sudo reboot `

### 2. Memastikan Aplikasi sudah berjalan
Setelah server hidup kembali, kita coba untuk memastiakan apakah aplikasi yang sudah kita install tadi berjalan dengan baik. Caranya dengan menggunakan perintah berikut <br>
` systemctl status daumalapps.service `<br>
Jika muncul seperti dibawah ini, maka aplikasi backend sudah berjalan dengan baik dan kita hanya perlu mengoperasikannya baik itu dari apps fronend yang kita buat maupun dengan [postman](https://chrome.google.com/webstore/detail/tabbed-postman-rest-clien/coohjcphdfgbiolnekdpbcijmhambjff?hl=en) <br>
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

## Dokumentasi API
Aplikasi backend ini menggunakan nodejs dan Expressjs dengan port 8000 sebagai default jalur komunikasinya. Untuk mengakses API tersebut kamu dapat menggunakan struktur alamat seperti contoh berikut. <br>
` alamatserver:8000/api/v1/pegawai`

### API Method
Dalam konsep API ada beberapa method yang biasanya kita gunakan diantaranya adalah GET, POST, DEL, dan PUT dan biasanya konsep ini dinamakan CRUD.<br>

**Penjelasan**<br>
1. **GET**, berfungsi untuk mengambil data dari server dan biasanya digunakan untuk melihat data
2. **POST**, berfungsi untuk mengirim data dari client ke server
3. **DEL**, berfungsi untuk menghapus data dari server
4. **PUT**, berfungsi untuk mengedit data dengan parameter tertentu

### API Address GET
1. */api/v1/pegawai*, Menampilkan data pegawai
2. */api/v1/pegawai/:id*, Menampilkan data pegawai berdasarkan id
3. */api/v1/pegawai/nip/:nip*, Menampilkan data pegawai berdasarkan nip
4. */api/v1/activity*, Menampilkan data activity
5. */api/v1/activity/:id*, Menampilkan data activity berdasarkan id

### API Address POST
1. */api/v1/pegawai/add*, Menambahkan data pegawai baru<br>
Parameter ` name,nip,pass,jabatan,grade,site,ttl,alamat,ttd,image `<br>
2. */api/v1/activity/add*, Menambahkan data activity baru<br>
Parameter ` name,site,no,unit,code,cn,hm,wo,component,job,date,start,finish,adj,active `<br>

### API Address DEL
1. */api/v1/pegawai/:id*, Menghapus data pegawai berdasarkan id
2. */api/v1/activity/:id*, Menghapus data activity berdasarkan id

### API Address PUT
1. */api/v1/pegawai/add*, Menambahkan data pegawai baru<br>
Parameter ` name,nip,pass,jabatan,grade,site,ttl,alamat,ttd,image `<br>
2. */api/v1/activity/add*, Menambahkan data activity baru<br>
Parameter ` name,site,no,unit,code,cn,hm,wo,component,job,date,start,finish,adj,active `<br>
