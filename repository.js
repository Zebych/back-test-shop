let mongoose = require("mongoose");
const {readJsonFromFile} = require("./fsUtils");

let purchasesDataSchema = new mongoose.Schema({
/*    addedCart: [{
        name: String,
        id: Number,
        price: Number,
        toPurchase: Number,
        inStock: Number,
        photo: String
    }],*/
    firstLastName: String,
    cardNumber: String,
    expirationDate: String,
    password: String,
    rememberMe: Boolean,
    purchasesData: [{
        name: String,
        id: Number,
        price: Number,
        toPurchase: Number,
        inStock: Number,
        photo: String
    }]
});
let goodsSchema = new mongoose.Schema({
    name: String,
    id: Number,
    price: Number,
    toPurchase: Number,
    inStock: Number
});
let messageSchema = new mongoose.Schema({
    message: String,
});

let shopGoods = mongoose.model('shopGoods', goodsSchema);
let UserData = mongoose.model('purchasesData', purchasesDataSchema);
let Message = mongoose.model('message', messageSchema);


const filePath = 'goodsData.json';

const allGoods = async () => {
    return readJsonFromFile(filePath);
}
/*const addUserData = async (reqData) => {
    // await allGoods()
    let userData = new UserData({reqData});
    debugger;
    return userData.save()
        .then(function (doc) {
            console.log("Сохранен объект", doc);
            mongoose.disconnect();  // отключение от базы данных
        })
        .catch(function (err) {
            console.log(err);
            mongoose.disconnect();
        });
    ;
};*/
const addUserData = async (userName, cardNumber, expirationDate, password, rememberMe, purchasesData) => {
    // await allGoods()
    let userData = new UserData({
        userName,
        cardNumber,
        expirationDate,
        password,
        rememberMe,
        purchasesData
    });
    debugger;
    return userData.save()
        .then(function (doc) {
            console.log("Сохранен объект", doc);
            mongoose.disconnect();  // отключение от базы данных
        })
        .catch(function (err) {
            console.log(err);
            mongoose.disconnect();
        });
    ;
};
const addMessage = async (message) => {
    // await allGoods()
    let messageValue = new Message({message});
    debugger;
    return messageValue.save()
        .then(function (doc) {
            console.log("Сохранен объект", doc);
            mongoose.disconnect();  // отключение от базы данных
        })
        .catch(function (err) {
            console.log(err);
            mongoose.disconnect();
        });
    ;
};

exports.addUserData = addUserData;
exports.allGoods = allGoods;
exports.addMessage = addMessage;