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

const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency' , currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
 }

function getInfoPenjualan(dataPenjualan){
    let penjualan = {
        totalKeuntungan:"", 
        totalModal:"",
        produkBukuTerlaris:"",
        persentaseKeuntungan:"",
        penulisTerlaris:""
    }

    let modal = [];
    let terjual = [];
    dataPenjualan.map((value, key) => {
        modal.push(value.hargaBeli*(value.totalTerjual+value.sisaStok));
        terjual.push(value.hargaJual*value.totalTerjual);
    });

    let terjualList = []; 
    dataPenjualan.map((value) =>{ terjualList.push(value.totalTerjual)
    });
    
    //  console.log(terjualList);

    let terjualMax = Math.max.apply(null, terjualList);
    console.log(terjualMax);

    let bukuTerlaris = "";
    dataPenjualan.map((value) => { 
        
    })

    let sumModal = 0;
    modal.forEach((value) => {
        sumModal += value;
    });
    
    let totalPenjualan = 0;
    terjual.forEach((value) => {
        totalPenjualan += value;
    });
    let keuntungan = totalPenjualan - sumModal; 

    

    penjualan.totalKeuntungan = formatRupiah(keuntungan);
    penjualan.totalModal = formatRupiah(sumModal);
    penjualan.persentaseKeuntungan = String(Math.round((keuntungan/sumModal)*100)+"%");
    // penjualan.produkBukuTerlaris = terjualMax;


    return penjualan;
}

console.log(getInfoPenjualan(dataPenjualanNovel))