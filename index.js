const express = require('express');
const {addPurchasesData, allGoods} = require("./repository");
const cors = require("cors");
const bodyParser = require("body-parser")

// MongoDB
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOCON, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    //we're connected!
});


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    const goods = await allGoods()
    res.send(goods);
});
app.post('/cart', async (req, res) => {
    const reqBody = req.body;
    await addPurchasesData(reqBody);
    res.send({result: 'true'});
});
app.use((req, res) => {
    res.send(404)
})

const port = process.env.PORT || 3010
app.listen(port, function () {
    console.log("Example");
});
