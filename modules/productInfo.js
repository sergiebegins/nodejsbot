let mongoose = require('mongoose');

let productInfoSchema = mongoose.Schema({
    pi_uye:{
        type:String, required: true
    },
    pi_isim :{
        type:String, required: true
    },
    pi_telefon:{
        type:String, required: true
    },
    pi_randevu:{
        type: String, required: true
    },
    pi_urun:{
        type:String, required: true
    },
    pi_tarih:{
        type: String,
        default: Date.now
    }
});

let productInfo = mongoose.model('Urunbilgi', productInfoSchema,"Urunbilgi");

module.exports = productInfo;