var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', { 
    "başlık" : "Anasayfa",
    "sayfaBaşlık":{
        "siteAd" : "MekanBul",
        "slogan" : "Civardaki Mekanları Keşfet!"
    },
    "mekanlar":[
        {
            "ad": "Starbucks",
            "adres":"Centrum Garden",
            "puan": "3",
            "imkanlar":["Dünya Kahveleri","Yiyecek","Hızlı Wifi Bağlantısı"],
            "mesafe" : "10 km"
        },
        {
            "ad": "Barida Kafe",
            "adres":"SDÜ Batı Kampüsü",
            "puan": "4",
            "imkanlar":["Kahve","Çay","Tost"],
            "mesafe" : "1 km"
        }
    ]
    }
 );
}
const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', 
    { 
    "baslık": "Mekan Bilgisi",
    "mekanBaslik":"Starbucks",
    "mekanDetay":{
        "ad":"Starbucks",
        "puan":"3",
        "adres":"Centrum Garden",
        "saatler":[
            {  
                "gunler":"Pazartesi-Cuma",
                "acilis":"09.00",
                "kapanis":"22.00",
                "kapalı": false
            },
            {  
                "gunler":"Cumartesi-Pazar",
                "acilis":"10.00",
                "kapanis":"23.00",
                "kapalı": false
            }
           
        ],
        "imkanlar":["Kahve","Çay","Tost"],
        "kordinatlar":{
            "enlem":"37.82988",
            "boylam":"30.52347"
        },
        "yorumlar":[
            {
                "yorumYapan":"Esra Aydoğan",
                "yorumMetni":"HARİKA",
                "tarih":"20 Ekim 2022",
                "puan":"5"
            },
            {
                "yorumYapan":"Esma Aydoğan",
                "yorumMetni":"BERBAT",
                "tarih":"20 Ekim 2022",
                "puan":"2"
            }

        ]

    }


 });
};
const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
};
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
}
