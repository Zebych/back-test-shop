const fs = require("fs");

//Вспомогательная функция для считывания JSON из файла
exports.readJsonFromFile = (filePath) => {
    let promise = new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, buf) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(buf.toString()))
            }
        })
    })
    return promise;
}
//Вспомогательная функция для записи данных в JSON файл
exports.writeJsonToFile = (filePath,data)=>{
    let promise = new Promise((resolve,reject)=>{
        fs.write(filePath,JSON.stringify(data),(err)=>{
            if(err)reject(err);
            resolve();
        });
    });
    return promise;
}