const subroute = require('express').Router();
const db = require('../../config/database');

const { productModel } = db;

module.exports = (route) => {
    route.use('/product', subroute)

    subroute.post('/', (req, res) => {
        var inputData = req.body;
        console.log(req);
        productModel.create(inputData, (data) => {
            res.json(data);
            console.log(" record was created");
        })
    });

    subroute.get('/', (_, res) => {
        productModel.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    subroute.put('/', )

    subroute.delete('/', (req, res) => {
        productModel.findOneAndDelete({'_id':req.body.id}, (err, data) => {
            if(err){
                console.log(err);
                return res.status(500).send();
            }
            else{
                console.log('record deleted')
                return res.json({data});
                
            }
        })
    })
    
    return route
}