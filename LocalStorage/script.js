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
    console.log(nama);
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
    data.push({nama_pengunjung: nama, perlu: keperluan});
    // Masukkan value input nama ke dalam array data   
    
    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); 
    // Simpan value ke local storage dengan key nama
}

function tampil(){
    // ini merupakan pengganti/alternatif if else
    localStorage.getItem('ls_bukutamu') == null 
    ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    // cek apakah local storage kosong

    data.forEach((item) => {
        daftar_tamu.innerHTML += <li>${item.nama_pengunjung} - ${item.perlu}</li>;
    })
}