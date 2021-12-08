/*const photo1 = require('./img/680395566_w640_h640_kruzhka-s-prikolom.jpg');
const photo3 = require('./img/6-1000x1000.jpg');
const photo2 = require('./img/6064641689.jpg');
const photo4 = require('./img/kruzhka_sgushchenka_img.webp');
const photo5 = require('./img/people_2_mug_chameleon_front_whitered_500.jpg');
const photo7 = require('./img/pic1white.jpg');
const photo6 = require('./img/product_57508_0_0_0.jpg');*/

const express = require('express');

const cors = require("cors")

const app = express();
app.use(cors({"origin": "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + './img/680395566_w640_h640_kruzhka-s-prikolom.jpg'));

const photo3 = '<img src="./img/680395566_w640_h640_kruzhka-s-prikolom.jpg"/>';
const arrData = [
    {
        name: 'mug1',
        photo: photo3,
        id: 1,
        price: 50,
        toPurchase: 1,
        inStock: 10
    },
    /*    {name: 'mug3', photo: photo3, id: 3, price: 90, toPurchase: 1, inStock: 10},
        {name: 'mug2', photo: photo2, id: 2, price: 70, toPurchase: 1, inStock: 10},
        {name: 'mug4', photo: photo4, id: 4, price: 100, toPurchase: 1, inStock: 10},
        {name: 'mug5', photo: photo5, id: 5, price: 110, toPurchase: 1, inStock: 10},
        {name: 'mug6', photo: photo6, id: 6, price: 120, toPurchase: 1, inStock: 10},
        {name: 'mug7', photo: photo7, id: 7, price: 130, toPurchase: 1, inStock: 10},*/
];
const purchasesData = [];

app.get('/test--shop-with-goods', function (req, res) {
    res.send(arrData);
})
app.post('/cart', async function (req, res) {
    purchasesData.push(req.body)
    res.send('true')
    console.log(purchasesData)
})

let port = process.env.PORT || 3010
app.listen(port, function () {
    console.log("Example")
})

/*
const express = require('express');
const nodemailer = require("nodemailer");
const cors = require("cors")

const app = express();
app.use(cors({"origin": "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let smtp_login = process.env.SMTP_LOGIN
let smtp_password = process.env.SMTP_PASSWORD

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true, // true for 465, false for other ports
    port: 465,
    tls: {
        rejectUnauthorized: true
    },
    auth: {
        user: smtp_login, // generated ethereal user
        pass: smtp_password, // generated ethereal password

    },
});

app.get('/', function (req, res) {
    res.send("HELLO");
})

app.post('/sendMessage', async function (req, res) {
    let {name, email, message} = req.body
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "My profile page", // sender address
        to: "sanechek_1987@mail.ru", // list of receivers
        subject: "message portfolio", // Subject line
        html: `<b>сообщение с моего portfolio</b>
<div>
<div>
name: ${name}
</div>
<div>
email: ${email}
</div>
<div>
message: ${message}
</div>
</div>`,
    });
    res.send("HELLO");
});

let port = process.env.PORT || 3010
app.listen(port, function () {
    console.log("Example")
})*/
