let formidable = require('formidable');
let redis = require("redis"),
    client = redis.createClient();

module.exports.searchfind = async function searchfind(req) {
    let form = new formidable.IncomingForm();
    let promise = new Promise(function (resolve, reject) {
        form.parse(req, function (err, fields, files) {
            (async ()=>{
                try {
                    let Fuse = require("fuse.js");
                    let searchArray = [];
                    client.hgetall("urunlerim", function (err, obj) {
                        obj = obj['urunler'];
                        obj = JSON.parse(obj);
                        for (key in  obj){
                            let k = key;
                            let v = obj[k];
                            searchArray.push(v);
                        }
                        let options = {

                            threshold: 0.3,
                            location: 0,
                            distance: 4769,
                            includeScore: true,
                            includeMatches: true,
                            maxPatternLength: 32,
                            minMatchCharLength: 3,
                            keys: [{
                                name :"urun_ad",
                                weight: 0.7},
                                {name:"urun_tr",
                                    weight: 0.3}
                            ]
                        };

                        let fuse = new Fuse(searchArray, options);
                        let result = fuse.search(fields.search);
                        if(result.length>0){
                            resolve(result.slice(0,15));
                        }else{
                            resolve(0);
                        }


                    });
                }catch (e) {
                    resolve(0);
                }

            })();
        });
    })

    return promise;
}