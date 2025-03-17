document.getElementsByTagName('body')[0].style.backgroundColor = 'Yellow';

// Variabel
let nama = "Jovan Tek";
let Umur  = 20;
let statusMahasiswa = true;

document.getElementById('nama').innerHTML = "Nama saya : " + nama;
document.getElementById('Umur').innerHTML = `Umur : ${Umur}`;

//array
let mahasiswa = ["Ahmad", "Budi", "Caca", "Jovan"
];
mahasiswa.forEach( (mhs) => {
    document.getElementById(`mahasiswa`).innerHTML += `<li>${mhs} </li>`;
});

let nilai = [
    {nama: "Ahmad", nilai: 80},
    {nama: "Budi", nilai: 90},
    {nama: "Caca", nilai: 75},
    {nama: "Jovan", nilai: 20}
];

nilai.forEach((data) => {
document.getElementById('nilai').innerHTML += `<tr>
    <td>${data.nama}    </td>
    <td>${data.nilai}</td>
    </tr>`;
});