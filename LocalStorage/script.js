// let tampung = []; // Buat variabel tampung dengan tipe data array (array kosong)
let data; //deklarasi variabel data
let daftar_tamu = document.getElementById('daftar_tamu');
// Ambil elemen dengan id daftar_tamu

//panggil fungsi tampil()
tampil();

function simpan(){
    let nama = document.getElementById('nama').value;
    let keperluan = document.getElementById('keperluan').value;
    // Ambil value dari input dengan id nama
    let jk = document.getElementById('jk').value;
    console.log(jk);
    // console.log(keperluan); ini hanya opsional, diawal saja dipakai

    // cek apakah local storage kosong
    if(localStorage.getItem('ls_bukutamu') === null){
        // ==== harus identik (case sensitive)
        // == diabaikan besar kecilnya
        // Jika kosong, maka buat array kosong
        data = [];
        // Simpan array kosong ke local storage dengan key nama
    } else {
        data = JSON.parse(localStorage.getItem('ls_bukutamu'));
        // Ambil data dari local storage dengan key nama
    }

    data.push({nama_pengunjung: nama, perlu: keperluan, jk: jk});
    // Masukkan value input nama ke dalam array data   
    
    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); 
    // Simpan value ke local storage dengan key nama

    // Kosongkan isi elemen daftar_tamu
    daftar_tamu.innerHTML = '';
    //panggil fungsi tampil
    document.getElementById('nama').value = ``;
    document.getElementById('keperluan').value = ``;
    tampil();
}

function tampil(){
    // ini merupakan pengganti/alternatif if else
    localStorage.getItem('ls_bukutamu') == null 
    ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    // cek apakah local storage kosong

    console.log(data.length); //tampilkan jumlah data di console
    document.getElementById('total_tamu').innerHTML = `Total Tamu: ${data.length}`;
    
    let total_laki=0;
    let total_perempuan=0;
    //menampung variabel laki dan perempuan

    data.forEach((item) => {
        if(item.jk == 'L'){
            total_laki++;
        } else if(item.jk == 'P') {
            total_perempuan++;
        }
        daftar_tamu.innerHTML += `<li>${item.nama_pengunjung} - ${item.perlu}</li>`
    })
    document.getElementById('tamu_laki').innerHTML = `Total Tamu Laki-laki: ${total_laki}`;
    document.getElementById('tamu_perempuan').innerHTML = `Total Tamu Perempuan: ${total_perempuan}`;
}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Resep Hari Ini</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="container my-4">

  <h1 class="text-center mb-4">Resep Hari Ini</h1>
  <div id="meal" class="card mb-4"></div>

  <h2>Testimoni Pengunjung</h2>
  <form id="testimoniForm" class="mb-4">
    <div class="mb-2">
      <label for="nama" class="form-label">Nama:</label>
      <input type="text" id="nama" class="form-control" required>
    </div>
    <div class="mb-2">
      <label for="pesan" class="form-label">Pesan:</label>
      <textarea id="pesan" class="form-control" required></textarea>
    </div>
    <div class="mb-2">
      <label for="rating" class="form-label">Rating (1-5):</label>
      <input type="number" id="rating" class="form-control" min="1" max="5" required>
    </div>
    <button type="submit" class="btn btn-primary">Kirim</button>
  </form>

  <h3>Daftar Testimoni</h3>
  <ul id="daftarTestimoni" class="list-group mb-3"></ul>

  <h4>Rata-rata Rating: <span id="rataRating">-</span></h4>

  <script src="script.js"></script>
</body>
</html>
