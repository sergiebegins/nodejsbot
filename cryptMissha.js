const helper = require('./helper.js');
let bcrypt = require('bcryptjs');
module.exports = class cryptObj {

    async decrypt(data){
        try {
            let keyr = helper.reverseString(data);
            let sonuc =  Buffer.from(keyr, 'base64').toString('ascii');
            let key = helper.reverseString(sonuc);
            let req = key.split("missha");
            if(bcrypt.compareSync("w5vt2bjz.f8ryp63t/",req[0])){
                return req[1];
            }else{
                return -1;
            }
        }catch (e) {
            return -1;
        }
    }

}