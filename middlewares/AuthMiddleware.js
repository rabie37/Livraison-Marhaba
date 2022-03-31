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

exports.hasRole = function(role){
    let roles = ["admin", 'delivery', 'client']

    return async (req, res, next) => {
        let checkRole = (roles.indexOf(role) + 1)

        if (checkRole == req.user.role) {
            next();
        } else {
            res.status('401').json({ message: 'Role : ' + userRole })
        }
    }
}