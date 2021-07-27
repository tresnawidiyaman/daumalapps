//Memasukan modul mysql database
const mysql = require('mysql');
//Mengarahkan file koneksi database menjadi variabel config
const config = require('../configs/database');
//Membuat konfigurasi database
const conn = mysql.createConnection(config);

//Membuat koneksi ke database
conn.connect((err) =>{
    if (err) throw err;
    console.log('Data Activity connected, yeah !');
});

module.exports = {
  //Menampilkan semua data
  getdata(req, res){
    let sql = "SELECT * FROM tbl_activity";
    let query = conn.query(sql, (err, result) => {
        if (err) throw err;
        res.send({
            "status":200,
            "error":null,
            "message":'Berhasil menampilkan data',
            "response":result
        });
    });
  },
  //Menampilkan data berdasarkan id
  getdataid(req, res){
    let sql = "SELECT * FROM tbl_activity WHERE ac_id="+req.params.id;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send({
          "status":200,
          "error":null,
          "message":'Berhasil menampilkan data',
          "response":result
      });
    });
  },
  //Menambahkan data baru
  adddata(req, res){
  //Parameter data yang akan ditambahkan
    let data = {
      ac_name : req.body.ac_name,
      ac_site : req.body.ac_site,
      ac_no : req.body.ac_no,
      ac_unit : req.body.ac_unit,
      ac_code : req.body.ac_code,
      ac_cn : req.body.ac_cn,
      ac_hm : req.body.ac_hm,
      ac_wo : req.body.ac_wo,
      ac_component : req.body.ac_component,
      ac_job : req.body.ac_job,
      ac_date : req.body.ac_date,
      ac_start : req.body.ac_start,
      ac_finish : req.body.ac_finish,
      ac_adj : req.body.ac_adj,
      ac_active : req.body.ac_active
      
    };
    let sql = "INSERT INTO tbl_activity SET ?";
    let query = conn.query(sql, data, (err, result) => {
      if (err) throw err;
      res.send({
          "status":200,
          "error":null,
          "message":'Data berhasil ditambahkan',
      });
    });
  },
  //Mengubah data yang sudah ada
  editdata(req, res){
  //Parameter data yang akan diubah
    let data = {
      ac_name : req.body.ac_name,
      ac_site : req.body.ac_site,
      ac_no : req.body.ac_no,
      ac_unit : req.body.ac_unit,
      ac_code : req.body.ac_code,
      ac_cn : req.body.ac_cn,
      ac_hm : req.body.ac_hm,
      ac_wo : req.body.ac_wo,
      ac_component : req.body.ac_component,
      ac_job : req.body.ac_job,
      ac_date : req.body.ac_date,
      ac_start : req.body.ac_start,
      ac_finish : req.body.ac_finish,
      ac_adj : req.body.ac_adj,
      ac_active : req.body.ac_active
    };
    let sql = "UPDATE tbl_activity SET ? WHERE ac_id="+req.params.id;
    let query = conn.query(sql, data, (err, result) => {
      if (err) throw err;
      res.send({
          "status":200,
          "error":null,
          "message":'Data berhasil diubah',
      });
    });
  },
  //Mengapus data
  deletedata(req, res){
    let sql = "DELETE FROM tbl_activity WHERE ac_id="+req.params.id;
    let query = conn.query(sql, (err, result) => {
      if (err) throw err;
      res.send({
          "status":200,
          "error":null,
          "message":'Data berhasil dihapus',
      });
    });
  }  
}