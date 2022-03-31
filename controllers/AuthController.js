const { User } = require('../models');
const jwt = require('jsonwebtoken')

require('dotenv').config()
const SCRT_TOKEN = process.env.SCRT_TOKEN || '61e54edd1875b1301e7f8455'

exports.login = async (req, res) => {
    let data = req.body;

    User.findOne({where : { email: data.email }}).then(user => {

        if (user && user.password == req.body.password) { // Login true
            let token = jwt.sign(
                {
                    _id: user._id,
                    email: user.email,
                    role: user.role
                },
                SCRT_TOKEN,
                {
                    expiresIn: "100d"
                }
            )

            res.json(({
                token: token,
                user: user
            }));
        } else {
            res.status(400).json((data, 'Info in correct'));
        }
    });
};

exports.register = async (req, res) => {
    let data = req.body;
    // return res.json(data);

    try {
        const user = await User.create({
            'name': data.name,
            'email': data.email,
            'password': data.password,
            'role': data.role == 2 ? 2 : 3,
            'status': 1
        })

        res.json(user);
    } catch (error) {
        res.status(500).json(error, 'error');
    }
}