var express = require('express');
var router = express.Router();

const anaSayfa=function(req, res, next) {
    res.render('anasayfa', { title: 'Anasayfa' });
};
const mekanBilgisi=function(req, res, next) {
    res.render('mekanbilgisi', { title: 'mekan bilgisi' });
};
const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'yorum Ekle' });
};
module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle,
}
