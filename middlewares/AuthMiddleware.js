const jwt = require('jsonwebtoken')
require('dotenv').config()
const SCRT_TOKEN = process.env.SCRT_TOKEN ?? '61e54edd1875b1301e7f8455'

exports.isLogin = (req, res, next) => { // check if token valid
    var token = req.header('Authorization')

    try {
        req.user = jwt.verify(token, SCRT_TOKEN)
        next()
    } catch (error) {
        res.status('401').json({ message: 'You are not Authorized' })
    }
}

exports.hasRole = function (roles) {
    return async (req, res, next) => {

        let state = false;

        roles.forEach(function (role) {
            let BaseRole = ['admin', 'delivery', 'client'];
            let checkRole = (BaseRole.indexOf(role) + 1);
            console.log('checkRole == req.user.role : ' , checkRole == req.user.role);
            if (checkRole == req.user.role) {
                state = true;
            }
        })

        if (state) {
            return next();
        }
        
        res.status('401').json({ message: 'Role incorrect '})
    }
}
