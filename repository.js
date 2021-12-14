let mongoose = require("mongoose");
const readJsonFromFile = require("./fsUtils");

let userDataSchema = new mongoose.Schema({
    userName: String,
    cartNumber: String,
    validity: String,
    password: String
});
let goodsSchema = new mongoose.Schema({
    name: String,
    photo: String,
    id: String,
    price: String,
    toPurchase: String,
    inStock: String
});

let shopGoods = mongoose.model('shopGoods', goodsSchema);
let UserData = mongoose.model('userData', userDataSchema);


const filePath = 'purchaseData.json';

const allGoods = async () => {
   return  readJsonFromFile(filePath);
}
const addUserData = async (reqData) => {
    await allGoods()
    let userData = new UserData({reqData});
    return userData.save();
};

exports.addUserData = addUserData;
exports.allGoods = allGoods;