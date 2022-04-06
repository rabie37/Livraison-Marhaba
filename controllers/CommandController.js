
const { Command, CommandProduct } = require("../models/index");

exports.getCommand = async (req, res) => {
    const command = await Command.findAll({ include: ['products', 'client', 'delivery'] })

        .then((command) => {
            res.json(command);
        })
        .catch((err) => {
            res.json({ status: 400, message: err });
        });
};

exports.createCommand = async (req, res) => {

    let data = req.body
    let total = 0

    let command = await Command.create({
        address: data.address,
        status: 1,
        total: total,
        clientId: data.clientId,
        deliveryId: null

    })

    await data.products.forEach(async (product) => {
        await CommandProduct.create({
            price: product.price,
            qty: product.qty,
            total: product.qty * product.price,
            productId: product.id,
            commandId: command.id
        })
        total += (product.qty * product.price)
        

        
        const UpCommand = await Command.update(
            {
                'total': total,
            },
            {
                where: {
                    id: command.id
                }
            }
        )
    });
    return res.json(Command);


};

exports.updateCommand = async (req, res) => {
    let data = req.body;
    const commandUpdate = await Command.update(
        {
            address: data.address,
            status: data.status,
            total: data.total,

        },
        {
            where: {
                id: req.params.id
            }
        })
        .then((commandUpdate) => {
            res.json({ status: 200, commandUpdate });
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
}
exports.getOneCommand = async (req, res) => {
    try {
        const commands = await Command.findOne({
            where: {
                id: req.params.id
            },
            include: ['products', 'client', 'delivery']
        })

        res.json(commands);
    } catch (error) {
        res.status(500).json(error, 'error');
    }
}
exports.set_delivery = async (req, res) => {
    try {
        const commands = await Command.update(
            {
                'deliveryId': req.params.userid,
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )

        res.json(commands);
    } catch (error) {
        res.status(500).json(error, 'error');
    }
}
exports.status_change_command = async (req, res) => {
    try {
        let statusCommand = ['1', '2', '3', '4','5']

        if (statusCommand.includes(req.params.status)) {
            const command = await Command.update(
                {
                    'status': req.params.status
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            )
        }else{
            throw('Error, invalid status: ' + req.params.status);
        }
        
        res.status(200).json({message: 'status change for command:'});
    } catch (error) {
        res.status(401).json({ message: error });
    }
}


