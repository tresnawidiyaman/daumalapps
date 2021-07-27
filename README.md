# daumalapps

Server Port : 8000

## API Data Pegawai
### GET
Menampilkan semua data
/api/v1/pegawai

Menampilkan data berdasarkan id
/api/v1/pegawai/:id

### POST
Menambahkan data baru
/api/v1/pegawai/add
<p>Parameter
nama,nip,pass,jabatan,grade,site,ttl,alamat,ttd</p>

### PUT
Mengubah data yang sudah ada
/api/v1/pegawai/:id

### DEL
Mengapus data
/api/v1/pegawai/:id

## API Data Activity
### GET
Menampilkan semua data
/api/v1/activity

Menampilkan data berdasarkan id
/api/v1/activity/:id

### POST
Menambahkan data baru
/api/v1/activity/add
<p>Parameter
name,site,no,unit,code,cn,hm,wo,component,job,date,start,finish,adj,active</p>
      

### PUT
Mengubah data yang sudah ada
/api/v1/activity/:id

### DEL
Mengapus data
/api/v1/activity/:id
