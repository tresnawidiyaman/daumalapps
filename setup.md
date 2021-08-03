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
