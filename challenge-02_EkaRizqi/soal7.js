const dataPenjualanPakAldi = [
    {
        namaProduct:'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan:760000,
        kategori:"Sepatu Sport",
        totalTerjual:90
    },
    {
        namaProduct:'Sepatu Warrior Tristan Black Brown High - Original',
        hargaSatuan:960000,
        kategori:"Sepatu Sneaker",
        totalTerjual:37
    },
    {
        namaProduct:'Sepatu Warrior Tristan Maroon High - Original',
        hargaSatuan:360000,
        kategori:"Sepatu Sneaker",
        totalTerjual:90
    },
    {
        namaProduct:'Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original',
        hargaSatuan:120000,
        kategori:"Sepatu Sneaker",
        totalTerjual:90
    }
];

function hitungTotalPenjualan(dataPenjualanPakAldi){
    let hasil = 0;
    dataPenjualanPakAldi.forEach((element) => {
        // element = property dari object
        hasil += element.totalTerjual; // sum total penjualan
    });
    return hasil;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
