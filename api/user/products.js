const subroute = require('express').Router();
const db = require('../../config/database');

const { productModel } = db;

module.exports = (route) => {
    route.use('/product', subroute)

    subroute.get('/', (_, res) => {
        productModel.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });
    
    return route
}