//Console.log (untuk menampilkan value di browser)
console.log("Hello World");

//Alert (untuk menambahkan pesan)
alert("ini sebuah pesan");

//Penggunaan DOM HTML
document.getElementById('nama').innerHTML = "Airel";

//Penggunaan DOM CSS untuk digunakan pada HTML
document.getElementById('game').style.color = "red";
document.getElementById('game').innerHTML = "Team Fortress 2";

document.getElementById('game1').style.color = "red";
document.getElementById('game1').innerHTML = "Cuphead";

document.getElementById('game2').style.color = "red";
document.getElementById('game2').innerHTML = "Terraria";

//Function javascript
function halo(){
    alert("ini alert pada onClick")
}

//AddEventListener (untuk memberikan even pada elemenet)
//Seleksi elemen dengan id nama
let nama = document.getElementById("nama");

//Menambahkan event listener
nama.addEventListener("click", function nama(){
    alert("ini sebuah nama");
})

//Date() untuk mengambil tanggal saat ini
Date()

//Mendapatkan tanggal saat ini
let tanggal = new Date()
document.getElementById("tanggal").innerHTML = tanggal

