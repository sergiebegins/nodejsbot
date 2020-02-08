let formidable = require('formidable');
let cryptObj = require('../cryptMissha');
let favorite = require('../modules/favorite.js');
module.exports.favinsert = async function favinsert(req) {

    let form = new formidable.IncomingForm();

    let promise = new Promise(function (resolve, reject) {
        form.parse(req, function (err, fields, files) {
            (async () => {
                try {
                    let cryptObject = new cryptObj();
                    let userID = await cryptObject.decrypt(fields.key);


                    if(userID>0){

                        const res = await favorite.find({f_uye:userID,f_urun:fields.pid});
                        if(res.length<1){
                            let fvt1 = new favorite({ f_uye: userID, f_urun: fields.pid });
                            fvt1.save(function (err, fvt) {
                                if (err) resolve(0);
                                resolve(1);
                            });

                        }else{
                            resolve(0);
                        }
                    }


                }catch (err) {
                    console.log(err);
                    resolve(0);
                }
            })();


        });
    });

    return promise;

}


