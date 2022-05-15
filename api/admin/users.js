const subroute = require('express').Router();
const db = require('../../config/database');

const { userModel } = db;

module.exports = (route) => {
    route.use('/user', subroute)

    subroute.post('/', (req, res) => {
        var inputData = req.body;
        console.log(req);
        userModel.create(inputData, (data) => {
            res.json(data);
            console.log(" record was created");
        })
    });

    subroute.post('/login', (req, res) => {
        var inputData = req.body;
        userModel.find({email : inputData.email}, (err, result) => {
            if (err) {
                res.status(400).send(err);
            } else {
                if (result.length > 0 && result[0].password === inputData.password) {
                    res.send(true);
                } else {
                    res.status(400).send('wrong password')
                }
            }
        })
    });

    subroute.put('/', )

    subroute.delete('/', (req, res) => {
        userModel.findOneAndDelete({'_id':req.body.id}, (err, data) => {
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