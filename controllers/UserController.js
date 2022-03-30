
const { User } = require("../models/index");

exports.getUser = async (req, res) => {
    const user = await User.findAll()
        .then((user) => {
            res.json(user);
        })
        .catch((err) => {
            res.json({ status: 400, message: err });
        });
};

exports.createUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    const status = req.body.status

    await User.create({
        email: email, password: password, role: role, status: status
    })
        .then((user) => {

            return res.json(user)
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};

// Update Users
exports.updateUser = async (req, res) => {
    let data = req.body;
    const userUpdate = await User.update(
        {
            name: data.name,
            email: data.email,
            password: data.password,
            role: data.role,
            status: data.status,

        },{
            where: { id: req.params.id }
        })
        .then((userUpdate) => {
            res.json({status: 200, userUpdate });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};
exports.deleteUser = async (req, res) => {
    const users = await User.destroy({ where: { id: req.params.id } })
        .then((users) => {
            res.json({ users });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });

};