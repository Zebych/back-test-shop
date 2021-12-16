const mongoose = require("mongoose");
const {readJsonFromFile, writeJsonToFile} = require("./fsUtils");

const purchasesDataSchema = new mongoose.Schema({
    firstLastName: String,
    cardNumber: String,
    expirationDate: String,
    password: String,
    rememberMe: Boolean,
    goodsData: [{
        name: String,
        id: Number,
        price: Number,
        toPurchase: Number,
        inStock: Number,
        photo: String
    }]
});
const goodsSchema = new mongoose.Schema({
    name: String,
    id: Number,
    price: Number,
    toPurchase: Number,
    inStock: Number
});

const shopGoods = mongoose.model('shopGoods', goodsSchema);
const UserData = mongoose.model('purchasesData', purchasesDataSchema);


const filePath = 'goodsData.json';
const filePathPurchases = 'purchasesData.json';

const allGoods = async () => {
    return readJsonFromFile(filePath);
}

const addPurchasesData = async (reqBody) => {
    const userData = reqBody.values;
    const purchasesArr = reqBody.addedCart;
    const userCartData = {
        userName: userData.firstLastName,
        cardNumber: userData.cardNumber,
        expirationDate: userData.expirationDate,
        password: userData.password,
        rememberMe: userData.rememberMe,
    }
    const purchasesData = {...userCartData, goodsData: purchasesArr.map(p => p)}

    const purchases = new UserData(purchasesData);
    return (
        await writeJsonToFile(filePathPurchases, purchasesData),
            purchases.save()
                .then(function (doc) {
                    console.log("Сохранен объект", doc);
                    mongoose.disconnect();
                })
                .catch(function (err) {
                    console.log(err);
                    mongoose.disconnect();
                })

    )
};

exports.addPurchasesData = addPurchasesData;
exports.allGoods = allGoods;
