//Memasukan modul mysql database
const mysql = require('mysql');
//Mengarahkan file koneksi database menjadi variabel config
const config = require('../configs/database');
//Membuat konfigurasi database
const conn = mysql.createConnection(config);

//Membuat koneksi ke database
conn.connect((err) =>{
    if (err) throw err;
    console.log('Data Pegawai connected, yeah !');
});

module.exports = {
  //Menampilkan semua data
  getdata(req, res){
    let sql = "SELECT * FROM tbl_user";
    let query = conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send(
          {
            "result": result
          }
        );
    });
  },
  //Menampilkan data berdasarkan id
  getdataid(req, res){
    let sql = "SELECT * FROM tbl_user WHERE usr_id="+req.params.id;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send(
        {
          "result": result
        }
      );
    });
  },
  //Menampilkan data berdasarkan id
  getdatanip(req, res){
    let sql = "SELECT * FROM tbl_user WHERE usr_nip="+req.params.nip;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send(
        {
          "result": result
        }
      );
    });
  },
  //Menambahkan data baru
  adddata(req, res){
  //Parameter data yang akan ditambahkan
    let data = {
      usr_nama : req.body.name,
      usr_nip : req.body.nip,
      usr_pass : req.body.pass,
      usr_jabatan : req.body.jabatan,
      usr_grade : req.body.grade,
      usr_site : req.body.site,
      usr_ttl : req.body.ttl,
      usr_alamat : req.body.alamat,
      usr_ttd : req.body.ttd,
      usr_image : req.body.image
    };
    let sql = "INSERT INTO tbl_user SET ?";
    let query = conn.query(sql, data, (err, result) => {
      if (err) throw err;
      res.send({
          "message":'Data berhasil ditambahkan'
      });
    });
  },
  //Mengubah data yang sudah ada
  editdata(req, res){
  //Parameter data yang akan diubah
    let data = {
      usr_nama : req.body.name,
      usr_nip : req.body.nip,
      usr_pass : req.body.pass,
      usr_jabatan : req.body.jabatan,
      usr_grade : req.body.grade,
      usr_site : req.body.site,
      usr_ttl : req.body.ttl,
      usr_alamat : req.body.alamat,
      usr_ttd : req.body.ttd,
      usr_image : req.body.image
    };
    let sql = "UPDATE tbl_user SET ? WHERE usr_id="+req.params.id;
    let query = conn.query(sql, data, (err, result) => {
      if (err) throw err;
      res.send({
          "message":'Data berhasil diubah'
      });
    });
  },
  //Mengapus data
  deletedata(req, res){
    let sql = "DELETE FROM tbl_user WHERE usr_id="+req.params.id;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send({
          "message":'Data berhasil dihapus'
      });
    });
  },
   //Login User
   login(req, res){
    //Parameter data yang akan ditambahkan
      let data = {
        usr_nip : req.body.nip,
        usr_pass : req.body.pass
      };
      let sql = "SELECT * FROM tbl_user WHERE usr_nip="+req.body.nip+" AND usr_pass="+req.body.pass;
      let query = conn.query(sql, data, (err, result) => {
        if (err) throw err;
        if (result == 0) {
          res.send({ "result":'Login Failed'});
        }
        res.send({
          "result":result
        });
      });
    }  
}