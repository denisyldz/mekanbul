var mongoose = require( 'mongoose' ); 
require("./mekansema");
var dbURI = "mongodb+srv://esra:esra0842@sdu.gbep3hu.mongodb.net/?retryWrites=true&w=majority" 

mongoose.connect(dbURI); 
function kapat(msg,callback){
    mongoose.connection.close(function(){
    console.log(msg);
    callback();
});
}
process.on("SIGINT",function(){
    kapat("Uygulama kapatıldı!",function(){
        process.exit(0);
    });
});

mongoose.connection.on("connected",function(){
    console.log(dbURI + "adresteki veri tabanına bağlandı!\n");
});
mongoose.connection.on("error",function(){
    console.log("Bağlantı hatası\n");
});
mongoose.connection.on("disconnected",function(){
    console.log("Bağlantı kesildi!\n");
});