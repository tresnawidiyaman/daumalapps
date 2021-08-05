# Setup Server & Backend

## Installasi Server
### Installasi Webserver dan Database Server
Untuk kebutuhan webserver kita butuh untuk menginstall apache2 dan untuk databse kita butuh menginstall mysql-server. Untuk melakukan installasi kita dapat menggunakan perintah berikut.
` sudo apt-get install apache2 mysql-server `

### Installasi Nodejs dan NPM Packager
Dikarenakan backend yang kita gunakan untuk API berbasis Express.js maka kita harus melakukan installasi nodejs dan npm packager sehingga nanti aplikasi dapat dijalanakan.
` sudo apt-get install nodejs npm `

### Installasi Nodemon 
Nodemon merupakan salah satu paket pendukung dari nodejs yang berfungsi menjalankan kembali aplikasi apabila terjadi perubahan pada data, ini berfungsi untuk melakukan restart juga apabila ada input yang tidak sesuai dengan parameter data yang sudah ditentukan.
` sudo npm install nodemon -g `

## Konfigurasi Server
### Mengakses mysql
Untuk melakukan akses pada aplikasi database mysql kita dapat menggunakan perintah berikut
` sudo mysql -u root -p ` <br>
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
Hal pertama yang perlu kita lakukan adalah melakukan clone aplikasi API yang sebelumnya sudah dibuat dari alamat github yang sudah disesuaikan, sebelum itu pastikan dulu kita berada pada directory home user yang kita miliki dengan perinath ` pwq ` <br>
````
warriornux@WarriornuxDevelopment:~$ pwd
/home/warriornux
```
