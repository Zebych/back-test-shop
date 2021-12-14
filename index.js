const express = require('express');

//Для вывода в консоль ошибок promise
process.on('unhandledRejection',(reason,p)=>{
    console.log(reason,p);
});

const cors = require("cors");

const mongoose = require("mongoose");
const {addUserData, allGoods} = require("./repository");

mongoose.connect('mongodb://localhost/test-shop', {useMewUrlParser: true});
// mongoose.connect(`mongodb:${process.env.PORT}`, {useMewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    //we're connected!
});


const app = express();
app.use(cors({"origin": "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const arrData = [
    {
        name: 'mug1',
        photo: '',
        id: 1,
        price: 50,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug3',
        photo: '',
        id: 3,
        price: 90,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug2',
        photo: '',
        id: 2,
        price: 70,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug4',
        photo: '',
        id: 4,
        price: 100,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug5',
        photo: '',
        id: 5,
        price: 110,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug6',
        photo: '',
        id: 6,
        price: 120,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug7',
        photo: '',
        id: 7,
        price: 130,
        toPurchase: 1,
        inStock: 10
    },
];
const purchasesData = [];

app.get('/test--shop-with-goods', async (req, res) => {
    await allGoods()
    res.send(arrData);
});
app.post('/cart', async (req, res) => {
    /*    let userData = req.body.values;
        let purchases = req.body.data.addedCart;*/
    let reqData = req.body;
    await addUserData(reqData);
    res.send({result: 'true'});
    console.log(purchasesData);
});
app.use((req, res) => {
    res.send(404)
})

let port = process.env.PORT || 3010
app.listen(port, function () {
    console.log("Example");
});
