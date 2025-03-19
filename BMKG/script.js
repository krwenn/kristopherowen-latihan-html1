fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    // console.log(data.Infogempa.gempa.Wilayah);
    // console.log(data.Infogempa.gempa.Magnitude);
    document.getElementById("gempabumi").innerHTML = `
    <div class="col-lg-8 mt-4">
    <h1>${data.Infogempa.gempa.Wilayah}</h1>
        <p><strong>Waktu:</strong> ${data.Infogempa.gempa.Tanggal} ${data.Infogempa.gempa.Jam}</p>
        <p><strong>Magnitude:</strong> ${data.Infogempa.gempa.Magnitude}</p>
        <p><strong>Kedalaman:</strong> ${data.Infogempa.gempa.Kedalaman}</p>
        <p><strong>Potensi:</strong> ${data.Infogempa.gempa.Potensi}</p>
    </div>
     <div class="col-lg-4 mt-4">
    <img src="https://data.bmkg.go.id/DataMKG/TEWS/${data.Infogempa.gempa.Shakemap}" class="img-fluid"/>
    </div>`;
})

fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json")
.then( res => res.json() )
.then( data => {
    console.log(data);
    data.Infogempa.gempa.forEach( (list) => {
        console.log(list);
        document.getElementById("gempabumi15").innerHTML += `
        <div class="col-lg-4 mt-3">
        <div class="card p-3">
        <p> <strong>Wilayah:</strong> ${list.Wilayah}</p>
        <p> <strong>Waktu:</strong> ${list.Tanggal} ${list.Jam}</p>
        <p> <strong>Magnitude:</strong> ${list.Magnitude}</p>
        <p> <strong>Kedalaman:</strong> ${list.Kedalaman}</p>
        <p> <strong>Potensi:</strong> ${list.Potensi}</p>
        </div></div>`
    })
})