let mongoose = require('mongoose');

let commentSchema = mongoose.Schema({

    yorum_tip:{
        type: String,
        default: "uy"
    },
    yorum_uye:{
        type:String,
        required: true
    },
    yorum_urun:{
        type:String,
        required: true
    },
    yorum_aurun:{
        type: String,
        default: "0"
    },
    yorum_yref:{
        type: String,
        default: "0"
    },
    yorum_text:{
        type:String, required: true
    },
    yorum_puan:{
        type:String, required: true
    },
    yorum_tarih:{
        type: String,
        default: Date.now
    },
    yorum_aktif:{
        type: String,
        default: "1"
    },
    yorum_sec:{
        type: String,
        default: "0"
    },
    yorum_okundu:{
        type: String,
        default: "0"
    },

});


let comment = mongoose.model('Yorumlar', commentSchema,"Yorumlar");

module.exports = comment;