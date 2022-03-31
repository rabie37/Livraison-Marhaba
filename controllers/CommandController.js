
const { Command } = require("../models/index");

exports.getCommand = async (req, res) => {
    const command = await Command.findAll()
        .then((command) => {
            res.json(command);
        })
        .catch((err) => {
            res.json({ status: 400, message: err });
        });
};

exports.createCommand = async (req, res) => {
    const address = req.body.address
    const status = 0
    const total = 0

    await Command.create({
        address: address,status: status,total: total
    })
        .then((command) => {

            return res.json(command)
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};

exports.updateCommand = async (req, res) => {
    let data = req.body;
    const commandUpdate = await Command.update(
        {
            address: data.address,
            status: data.status,
            total: data.total,

        },{
            where: { id: req.params.id }
        })
        .then((commandUpdate) => {
            res.json({status: 200, commandUpdate });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};
exports.deleteCommand = async (req, res) => {
    const commands = await Command.destroy({ where: { id: req.params.id } })
        .then((commands) => {
            res.json({ commands });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });

};