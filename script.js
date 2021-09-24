var angka, box_ajaib, jumlah_klik, ketemu
async function mulai() {
    // generate angka acak 1-4
    this.angka = Math.floor((Math.random() * 4) + 1);
    // tambah awalan agar sesuai dengan id box, misal: box-3
    this.box_ajaib = "box-" + angka;
    // siapkan variabel counter
    this.jumlah_klik = 0;
    this.ketemu = "belum";
    document.getElementById('game').innerHTML = await (await fetch('game.php')).text()
}

async function pilih(pilihan) {
    // hitung jumlah klik    
    jumlah_klik++;
    document.getElementById('hitung').innerHTML = "Jumlah Klik = " + jumlah_klik

    // ubah warna background box
    if (pilihan == this.angka) {
        document.getElementById(`box-${this.angka}`).className = `col-5 btn btn-success w-50 border-white`
        ketemu = "sudah";
    }
    else {
        document.getElementById(`box-${pilihan}`).className = `col-5 btn btn-danger w-50 border-white`
    }
    // cek hasil game
    if ((ketemu == "sudah") && (jumlah_klik <= 2)) {
        document.getElementById('hasil').innerHTML = 'Menang'
        document.getElementById('box-1').setAttribute('disabled', true)
        document.getElementById('box-2').setAttribute('disabled', true)
        document.getElementById('box-3').setAttribute('disabled', true)
        document.getElementById('box-4').setAttribute('disabled', true)
        await fetch('kirimStatus.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'status=Menang'
        })

    }
    if ((ketemu == "belum") && (jumlah_klik >= 2)) {
        document.getElementById('hasil').innerHTML = 'Kalah'
        document.getElementById('box-1').setAttribute('disabled', true)
        document.getElementById('box-2').setAttribute('disabled', true)
        document.getElementById('box-3').setAttribute('disabled', true)
        document.getElementById('box-4').setAttribute('disabled', true)
        await fetch('kirimStatus.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'status=kalah'
        })

    }

}
