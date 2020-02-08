let mongoose = require('mongoose');

let favoriteSchema = mongoose.Schema({
    f_uye:{
        type:String,
        required: true
    },
    f_urun:{
        type:String,
        required: true
    },
    f_tarih:{
        type: String,
        default: Date.now
    },
    f_aktif:{
        type: String,
        default: "1"
    }

});


let favorite = mongoose.model('Favoriler', favoriteSchema,"Favoriler");

module.exports = favorite;