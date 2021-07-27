//Memasukan modul path
const path = require('path');
//Memasukan modul express js
const express = require('express');
//Memasukan modul bodyparser
const bodyParser = require('body-parser');
//Memasukan modul mysql database
const mysql = require('mysql');
//Menyatakan app sebagai fungsi express
const app = express();

//Membuat encoder json dari bodyparser
//Ini digunakan untuk mambaca data yang kita post melalui api
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Mendefinisikan file dari routing yang kita buat
const appRoute = require('./src/routes/routing-api');
app.use('/', appRoute);

//Server Listener
//nanti server ini akan dijalankan pada port tersebut
app.listen(8000,() =>{
    console.log('Server dijalankan pada port 8000');
});