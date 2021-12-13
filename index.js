const express = require('express');
const resize = require('./img/resize-jimp')

const cors = require("cors")

const app = express();
app.use(cors({"origin": "*"}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const arrData = [
    {
        name: 'mug1',
        photo: src = 'img/6-1000x1000.jpg',
        id: 1,
        price: 50,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug3',
        photo: '04_assets/img/6064641689.jpg',
        id: 3,
        price: 90,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug2',
        photo: '04_assets/img/680395566_w640_h640_kruzhka-s-prikolom.jpg',
        id: 2,
        price: 70,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug4',
        photo: '04_assets/img/kruzhka_sgushchenka_img.webp',
        id: 4,
        price: 100,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug5',
        photo: '04_assets/img/people_2_mug_chameleon_front_whitered_500.jpg',
        id: 5,
        price: 110,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug6',
        photo: '04_assets/img/pic1white.jpg',
        id: 6,
        price: 120,
        toPurchase: 1,
        inStock: 10
    },
    {
        name: 'mug7',
        photo: '04_assets/img/product_57508_0_0_0.jpg',
        id: 7,
        price: 130,
        toPurchase: 1,
        inStock: 10
    },
];
const purchasesData = [];

app.get('/test--shop-with-goods', function (req, res) {
  /*  const width = parseInt(req.query.width)
    const height = parseInt(req.query.height)
    const format = req.query.format

    res.type(`img/${format || 'pgn'}`)
    resize('./img/6-1000x1000.jpg',format,width,height).pipe(res)*/
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
