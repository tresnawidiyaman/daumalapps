//Mendifinisikan app sebagai routing dengan express
const app = require('express').Router();
//Mengarahkan file query controller menjadi variabel siswa
const pegawai = require('../controllers/config-pegawai');
const activity = require('../controllers/config-activity');

//Menampilkan semua data
app.get('/api/v1/pegawai', pegawai.getdata);

//Menampilkan data berdasarkan id
app.get('/api/v1/pegawai/:id', pegawai.getdataid);

//Menampilkan data berdasarkan nip
app.get('/api/v1/pegawai/nip/:nip', pegawai.getdatanip);

//Menambahkan data baru
app.post('/api/v1/pegawai/add', pegawai.adddata);

//Mengubah data yang sudah ada
app.put('/api/v1/pegawai/:id', pegawai.editdata);

//Mengapus data
app.delete('/api/v1/pegawai/:id', pegawai.deletedata);


//Menampilkan semua data
app.get('/api/v1/activity', activity.getdata);

//Menampilkan data berdasarkan id
app.get('/api/v1/activity/:id', activity.getdataid);

//Menambahkan data baru
app.post('/api/v1/activity/add', activity.adddata);

//Mengubah data yang sudah ada
app.put('/api/v1/activity/:id', activity.editdata);

//Mengapus data
app.delete('/api/v1/activity/:id', activity.deletedata);

//Melakukan Export module dari routing
module.exports = app;