let formidable = require('formidable');
let cryptObj = require('../cryptMissha');
let comment = require('../modules/comment.js');

module.exports.cominsert = async function cominsert(req) {

    let form = new formidable.IncomingForm();

    let promise = new Promise(function (resolve, reject) {

        form.parse(req, function (err, fields, files) {
            try {
                (async () => {
                    let cryptObject = new cryptObj();
                    let userID = await cryptObject.decrypt(fields.key);
                    if(userID>0){

                        let cmt1 = new comment({ yorum_uye: userID, yorum_urun: fields.pid,yorum_text:fields.yorum,yorum_puan:fields.puan });
                        cmt1.save(function (err, cmt) {
                            if (err){
                                resolve(0);
                            } else{
                                resolve(1);
                            }

                        });

                    }else{
                        resolve(0);
                    }


                })();
            }catch (e) {
                resolve(0);
            }

        });

    });

    return promise;

}

