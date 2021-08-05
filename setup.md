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
```
  warriornux@WarriornuxDevelopment:~$ pwd
  /home/warriornux 
```
Setelah itu lakukan clone menggunakan perintah berikut <br>
` git clone https://github.com/tresnawidiyaman/daumalapps.git ` <br>

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
<br>
Setelah kamu termukan, selanjutnya import database tersebut dengan perintah <br>
``` sudo mysql -u root -p namadatabase < smart_hillconplant.sql ```

### Mengubah konfigurasi database aplikasi
Aplikasi backend di desain untuk digunakan pada server localhost, apabila kamu menggunakan server cloud dan mysql mu diberi password maka kita harus mengubahnya.
Untuk mengubahnya kita bisa masuk kedalam file konfigurasi dengan perintah berikut <br>
` nano src/configs/database.js ` <br><br>

Maka akan muncul configurasi berikut, ubah dan sesuaikan<br>
```
module.exports = {
    host: 'alamatippublickamu',
    user: 'root',
    password: '',
    database: 'smart_hillconplant'
}
```
<br>
Setelah kamu ubah, simpan dengan menekan `ctrl+x` lalu klik y untuk mengonfirmasi.

### Menjalankan aplikasi
Untuk menjalankan aplikasi backend dari nodejs ini kamu dapat menggunakan perintah berikut<br>
`node app.js` <br>

Jika muncul tampilan tersebut, maka aplikasimu sudah berhasil dijalankan<br>
```
  warriornux@WarriornuxDevelopment:~$ pwd
  /home/warriornux 
```

asas
