const mongoose = require('mongoose');

let express = require('express');
let socket = require( 'socket.io' );
let app = express();
let server = require('http').createServer(app);
let io = socket.listen( server );
let port = process.env.PORT || 9990;


server.listen(port, function () {

});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

mongoose.connect('mongodb://127.0.0.1:27017/Missha', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then((test) => console.log())
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`);
    });

io.on('connection', function (socket) {
    console.info(`Client connected [id=${socket.id}]`);
    let id = socket.id;

});

app.post('/searchReq',function (req,res) {
    (async ()=>{
        let searchModel = require('./model/searchfunc.js');
        res.send({status:await searchModel.searchfind(req)})
    })();
})

app.post('/favoriteReq',function (req,res) {
    (async () => {
        let favModel = require('./model/favoritefunc.js');
        res.send({status:await favModel.favinsert(req)});
    })();
});

app.post('/reservedReq',function (req,res) {
    (async () => {
        let paModel = require('./model/productaboutfunc.js');
        res.send({status:await paModel.paboutinsert(req)});
    })();
});
app.post('/commentReq',function (req,res) {
    (async () => {
        let comModel = require('./model/commentfunc.js');
        res.send({status:await comModel.cominsert(req)});
    })();
});


//let comment = mongoose.model('Yorumlar', {yorum_urun: String});
//let Cat = mongoose.model('Cat', {name: String});
//const kitty = new Cat({ name: 'Zildjian' });
//kitty.save().then(() => console.log('meow'));

// Cat.findOne({name:"Zildjian"}).exec(function(err, animals) {
//     app.get('/', function (req, res) {
//         res.send(animals.name)
//     });
//
// });

// socket.on('commentCount',function (products) {
// let product = JSON.parse(products);
// for(let key in product){
//     let v = product[key];
//     (async () => {
//         try {
//             const res = await cmt.countDocuments({yorum_urun:v});
//             let data={};
//             data.id = v;
//             data.adet = res;
//             socket.emit('commentCountRes',data);
//         }catch (err) {
//             console.log(err);
//         }
//     })();
// }
// });

