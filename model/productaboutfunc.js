let cryptObj = require('../cryptMissha');
let formidable = require('formidable');
module.exports.paboutinsert = async function paboutinsert(req) {
    let form = new formidable.IncomingForm();
    let promise = new Promise(function (resolve, reject) {
        form.parse(req, function (err, fields, files) {
        (async ()=>{
            try {
                let cryptObject = new cryptObj();
                let userID = await cryptObject.decrypt(fields.key);
                if(userID>0){
                    let productInfo = require('../modules/productInfo.js');
                    let pinfo = new productInfo(
                        {
                            pi_uye: userID,
                            pi_isim: fields.isim,
                            pi_telefon:fields.telefon,
                            pi_randevu:fields.tarih,
                            pi_urun:fields.pid
                        });
                    pinfo.save(function (err, pinfo) {
                        if (err) {resolve(0);}
                        else{resolve(1);}
                    });
                }
            }catch (e) {
                resolve(0);
            }
        })();

        });
    });
        return promise;
}

