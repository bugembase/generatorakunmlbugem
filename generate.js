let tombol = document.getElementById("button1");
let data = document.getElementById("data");
let listdata = [
    "areebsajjad113@gmail.com:Mafiajoker123",
    "Maehg248@gmail.com:Bunly093397244",
    "jayryanevillocino@gmail.com:ANGKYUTKOsobra12345",
    "tananon9@kanu.ac.th:Tananon2128",
    "pro411292@gmail.com:Zimmy1567",
    "jaydengavindiego08@gmail.com:Killingmachine1",
    "werushx@gmail.com:m1cch13c4nt1k99999",
    "fatimageven21@gmail.com:patribg21.",
    "azanamarygold126@gmail.com:Denden123",
    "krislegawanapanggabean@gmail.com:00211",
    "harfiqi123@gmail.com:Bodong123",
    "rommelpialago414:Ginggong.1980",
    "mhayarenio98@gmail.com:May161996",
    "kemalnashry@gmail.com:Ml113811",
    "tehnisin:Banihasan123",
    "mertgacar07@gmail.com:Littleking011",
    "sinisirmodoinding06@gmail.com:Minahasa",
    "jayrcastillo11@gmail.com:Mangjose0511",
    "hilalakar15@gmail.com:Akar8118",
    "daffafakhrian2:DaffaNgab123",
    "abelong5804@gmail.com:PUTRAaniq",
    "carpioandrei18@gmail.com:Miguel222",
    "tulreh3@gmail.com:jogs777",
    "ghianborillo2009@gmail.com:Ghianpogi123",
    "jushtinltipo.pwusantacruz@gmail.com:c1aQSr_NRL52Yen",
    "killerbee98925@gmail.com:23102021Js",
    "jperrynicolas@gmail.com:MapPsp33d",
    "mdecelano@gmail.com:ZLBandit",
    "gansmpii31@gmail.com:Ling123",
    "akebonoakira25@gmail.com:Akiraakebono25",
    "kyletalha894@gmail.com:Siyasikyle123",
    "ajumm146@gmail.com:Ajum1234"
];

function generateData() {
    if (listdata.length === 0) {
        data.innerHTML = "Stok Akun Habis wak";
        return;
    }

    // Tentukan jumlah akun yang ingin ditampilkan
    const jumlahAkun = Math.min(10, listdata.length); // Maksimal 10, atau sisa data

    // Ambil akun acak sebanyak jumlahAkun
    let hasil = [];

    for (let i = 0; i < jumlahAkun; i++) {
        const randomIndex = Math.floor(Math.random() * listdata.length);
        const selected = listdata[randomIndex];
        hasil.push(selected);
        listdata.splice(randomIndex, 1); // Hapus dari list agar tidak muncul lagi
    }

    // Tampilkan hasil sebagai daftar
    data.innerHTML = hasil.map(item => `<li>${item}</li>`).join('');

    // Countdown disable tombol
    tombol.disabled = true;
    let countdown = 60;
    tombol.innerText = `Tunggu ${countdown}s`;

    let interval = setInterval(() => {
        countdown--;
        tombol.innerText = `Tunggu ${countdown}s`;

        if (countdown === 0) {
            clearInterval(interval);
            tombol.disabled = false;
            tombol.innerText = "Generate Akun";
        }
    }, 1000);
}
