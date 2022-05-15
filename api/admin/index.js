const route = require('express').Router();

module.exports = (app) => {
    app.use('/admin', route)

    route.use('/product', require('./products')(route))
    route.use('/order', require('./orders')(route))
    route.use('/user', require('./users')(route))

    return app
}