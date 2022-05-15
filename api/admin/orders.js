const subroute = require('express').Router();
const db = require('../../config/database');

const { purchaseModel } = db;

module.exports = (route) => {
    route.use('/order', subroute)

    subroute.post('/', (req, res) => {
        var inputData = req.body;
        console.log(req);
        purchaseModel.create(inputData, (data) => {
            res.json(data);
            console.log(" record was created");
        })
    });

    subroute.get('/', (_, res) => {
        purchaseModel.find({}, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    });

    subroute.put('/', )

    subroute.delete('/', (req, res) => {
        purchaseModel.findOneAndDelete({'_id':req.body.id}, (err, data) => {
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