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