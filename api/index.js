const router = require('express').Router();
const user = require('./user')
const admin = require('./admin')

module.exports = () => {
    const app = router;
    admin(app);
    user(app);

    return app
}

