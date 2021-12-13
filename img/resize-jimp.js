const fs = require('fs')
const sharp = require('sharp');

// const {createReadStream} = require("fs");

function resize(path, format, width, height) {
    const rs = fs.createReadStream(path)
    let transform = sharp()
    try {
        if (format) {
            transform = transform.toFormat(format);
        }
        if (width || height) {
            transform = transform.resize(width, height)
        }
    } catch (err) {
        console.log('error resize')
        // return fs.createReadStream('./image')
    }
    return rs.pipe(transform)
}

module.exports = resize
/*
jimp.read('./img/6-1000x1000.jpg')
    .then(img => {
        return img.write('mag1.jpg')
    })
    .catch(err => {
        console.log('err');
    })*/
