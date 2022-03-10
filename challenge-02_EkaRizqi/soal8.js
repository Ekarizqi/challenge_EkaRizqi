const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        nameProduct: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17
    },
    {
        idProduct: 'BOOK002351',
        nameProduct: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20
    },
    {
        idProduct: 'BOOK002941',
        nameProduct: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5
    },
    {
        idProduct: 'BOOK002941',
        nameProduct: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56
    },
];


function getInfoPenjualan(dataPenjualan){
    let penjualan = {
        totalKeuntungan:"", 
        totalModal:"",
        produkBukuTerlaris:"",
        persentaseKeuntungan:"",
        penulisTerlaris:""
    }

   
    return penjualan;
}

console.log(getInfoPenjualan(dataPenjualanNovel))