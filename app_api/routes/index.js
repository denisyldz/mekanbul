var express = require("express");
var router=express.Router();
var ctrlMekanlar=require("../controllers/mekanlar");
var ctrlYorumlar=require("../controllers/yorumlar");

router  // zincirleme mekan bağlama
.route("/mekanlar/:mekanid")     //:mekanid mekanları dinamikleştirmiş olduk
.get(ctrlMekanlar.mekanGetir)
.put(ctrlMekanlar.mekanGuncelle)
.delete(ctrlMekanlar.mekanSil); 

router
.route("/mekanlar")
.get(ctrlMekanlar.mekanlariListele)
.post(ctrlMekanlar.mekanEkle);

router
.route("/mekanlar/:mekanid/yorumlar")
.post(ctrlYorumlar.yorumEkle);

router.route("/mekanlar/:mekanid/yorumlar/:yorumid")  //listele diye bir şey yazmadık gerek kalmadı zaten sıralı gelecek ama istersek yazabiliriz
.get(ctrlYorumlar.yorumGetir)
.put(ctrlYorumlar.yorumGuncelle)
.delete(ctrlYorumlar.yorumSil);

module.exports=router; // dış dünyaya açar mutlaka gerekli


