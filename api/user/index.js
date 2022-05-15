const route = require('express').Router();

module.exports = (app) => {
    app.use('/user', route)

    route.use('/product', require('./products')(route))
    route.use('/order', require('./orders')(route))

    return app
}