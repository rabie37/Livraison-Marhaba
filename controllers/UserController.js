
const { User } = require("../models/index");

exports.getUser = async (req, res) => {
    const user = await User.findAll()
        .then((user) => {
            res.json({ status: 200, user });
        })
        .catch((err) => {
            res.json({ status: 400, message: err });
        });
};

exports.createUser = async (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const role = ["1", "2", "3"].includes(data.role) == true ? data.role : "2"
    const status = 1

    await User.create({
        email: email, password: password, role: role, status: status
    })
        .then((user) => {

            return res.json({ status: 200, user })
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
            role: ["1", "2", "3"].includes(data.role) == true ? data.role : "2",
            status: 1,

        }, {
        where:
        {
            id: req.params.id
        }
    })
        .then((userUpdate) => {
            res.json({ status: 200, userUpdate });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};
exports.deleteUser = async (req, res) => {
    const users = await User.destroy(
        {
            where:
            {
                id: req.params.id
            }
        }
    )
        .then((users) => {
            res.json({ users });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });

};
exports.status_change = async (req, res) => {
    try {
        const user = await User.update(
            {
                'status': req.params.status == 1 ? 1 : 0
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )
        res.json('status change for :',user);
    } catch (error) {
        res.status(500).json(toJson(error, 'error'));
    }
}

