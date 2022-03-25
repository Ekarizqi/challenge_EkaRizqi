// load the things we need
var express = require("express");
/* const path = require("path");*/
var app = express();

// set the view engine to ejs
app.use(express.static("public"));
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function(req, res) {
    var order =[
        {no: 1, userEmail: "user email", car:"car", startRent:"start rent", finishRent:"finish rent", price:"price", status:"status"},
        {no: 2, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 3, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 4, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 5, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 6, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 7, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 8, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 9, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
        {no: 10, userEmail: "Qyuwin30@gmail.com", car:"car", startRent:"1 maret", finishRent:"2 maret", price:"500.000", status:"kembali"},
    ];
    // var tagLine ="List Order";

    var car=[
        {no: 1, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 2, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 3, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 4, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 5, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 6, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 7, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 8, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 9, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"},
        {no: 10, nama: "Xenia", category:"car", price:"500.000", startRent:"1-3-22", finishRent:"2-3-22",  createdAt:"1-3-22", updatedAt:"2-3-22"}
    ];

    res.render("pages/index", {
        // tagLine,
        order,car
    });
});

// about page
app.get("/about", function(req, res) {
    res.render("pages/about");
});

//car page
app.get("/car",function(req,res){
    var mobil =[
        {img:"img/image 1.png", nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"},
        {img:"img/image 1.png",nama: "Xenia", tipe:"mobil", price:"Rp. 430.000/hari", startRent:"1-2-22", finishRent:"2-2-22", updatedAt:"Updated at 3 Maret 2022, 12.00"}
    ];
    res.render("pages/car",{
        mobil
    });
});

app.listen(8080);
console.log("8080 is the magic port");