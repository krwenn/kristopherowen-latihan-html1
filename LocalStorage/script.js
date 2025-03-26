let data;

function Simpan(){
    let  nama = document.getElementById ('nama').value;
    // ambil value dari input
    console.log(nama);
    //ambil data dari local storage

    if (localStorage.getItem ('nama') === null) {
        data = []; //buat array kosong
    }
    else {
        data = JSON.parse(localStorage.getItem ('nama'));
    } //ambil data dari local storage

    data.push(nama); // masukkan value input nama ke dalam array
    
    localStorage.setItem ('nama', JSON.stringify(data));
    // simpan ke local storage
}