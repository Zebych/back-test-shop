const express = require('express');
const {addUserData, allGoods, addMessage} = require("./repository");
const cors = require("cors");
const bodyParser = require("body-parser")

// MongoDB
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/test-shop', {
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

app.get('/test--shop-with-goods', async (req, res) => {
    const goods = await allGoods()
    res.send(goods);
});
app.post('/cart', async (req, res) => {
    const reqBody = req.body;
    await addUserData(reqBody);
    res.send({result: 'true'});
});
app.post('/addMessage', async (req, res) => {
    const message = req.body.event;
    await addMessage(message);
    res.send({result: 'true'});
});
app.use((req, res) => {
    res.send(404)
})

const port = process.env.PORT || 3010
app.listen(port, function () {
    console.log("Example");
});
