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

    let sumModal = 0;
    modal.forEach((value) => {
        sumModal += value;
    });
    
    let totalPenjualan = 0;
    terjual.forEach((value) => {
        totalPenjualan += value;
    });
    let keuntungan = totalPenjualan - sumModal; 

    let terjualList = []; 
    dataPenjualan.map((value) =>{ 
        terjualList.push(value.totalTerjual)
    });
    
    let terjualMax = Math.max.apply(null, terjualList);

    let bukuTerlaris = "";
    dataPenjualan.map((value,key) => {  
        if (terjualMax == value.totalTerjual){
            value.totalTerjual = key.nameProduct;
            bukuTerlaris = value.nameProduct;
        }else{
            return false;
        }
        
    })


    let listPenulis =[];
    for (let a=0; a<dataPenjualan.length; a++){
        if (!listPenulis.includes(dataPenjualan[a].penulis)){
        listPenulis.push(dataPenjualan[a].penulis);
        }
    }
    
    let penulis = [];
    for(let i=0; i<listPenulis.length; i++){
        let data = {};
        data["nama"] = listPenulis[i];
        let banyakTerjual = 0;
        for (let j=0; j<dataPenjualan.length; j++){
            if (listPenulis[i] === dataPenjualan[j].penulis){
                banyakTerjual = banyakTerjual + dataPenjualan[j].totalTerjual; 
            }
        }
        data["total"] = banyakTerjual;
        penulis.push(data);
    }

    let banyakTerjual = 0;
    for (let k=0; k<listPenulis.length; k++){
        if (penulis[k].total > banyakTerjual ){
            banyakTerjual = penulis[k].total;
            penjualan.penulisTerlaris = penulis[k].nama;
        }
    }


    // let sortTerjual = [];
    // for (let terjual in listPenulis){
    //     sortTerjual.push([terjual], listPenulis[terjual]);
    // }

    // sortTerjual.sort(function(a,b){
    //     return a[1]-b[1];
    // });
    
    // console.log(sortTerjual);
    // console.log(penulisLaris);
    // dataPenjualan.map((value,key) => {
    //     if(penulis == key.penulis){
    //         key.penulis = value.totalTerjual;
    //         banyakTerjual = value.totalTerjual;
    //     }
    //     else{
    //         return false;
    //     }
    // });

    // console.log(banyakTerjual);
    
    // dataPenjualan.map((value) => {
    //     banyakTerjual += value.totalTerjual;
    // });
    // // console.log(banyakTerjual)
    
    // let listPenulis = [];
    
    // let penulis = [];
    // dataPenjualan.map((value, key) => { 
    //     listPenulis.push(value.penulis);
    // });

    // penulis = [...new Set(listPenulis)];

    // let banyakTerjual = 0;
    // // console.log(penulis);
    // for(let i=0; i<dataPenjualan.length; i++){
    //         if(penulis[i] = dataPenjualan[i]["penulis"] ) {
    //             banyakTerjual = dataPenjualan[i].totalTerjual + dataPenjualan[i].totalTerjual;
    //             return banyakTerjual;
    //         }
    //     };
    // console.log(penulis);
    // console.log(banyakTerjual);
    

    penjualan.totalKeuntungan = formatRupiah(keuntungan);
    penjualan.totalModal = formatRupiah(sumModal);
    penjualan.persentaseKeuntungan = String(Math.round((keuntungan/sumModal)*100)+"%");
    penjualan.produkBukuTerlaris = bukuTerlaris;


    return penjualan;
}

console.log(getInfoPenjualan(dataPenjualanNovel))