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
    return (req, res, next) => {
        if (!role.includes(req.user.role)) {
            res.status(401).json({ message: 'you dont have access to this route!' })
        }
        next();    
    }
}