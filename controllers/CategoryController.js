
const { Category } = require("../models/index");

exports.getCategory = async (req, res) => {
    const category = await Category.findAll()
        .then((category) => {
            res.json(category);
        })
        .catch((err) => {
            res.json({ status: 400, message: err });
        });
};

exports.createCategory = async (req, res) => {
    const name = req.body.name
    

    await Category.create({
        name: name
    })
        .then((Category) => {

            return res.json(Category)
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};

// Update Users
exports.updateCategory = async (req, res) => {
    let data = req.body;
    const categoryUpdate = await Category.update(
        {
            name: data.name,
            

        },{
            where: { id: req.params.id }
        })
        .then((categoryUpdate) => {
            res.json({status: 200, categoryUpdate });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};
exports.deleteCategory = async (req, res) => {
    const categorys = await Category.destroy({ where: { id: req.params.id } })
        .then((categorys) => {
            res.json({ categorys });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });

};
exports.getOneCategory = async (req, res) => {
    try {
        const categorys = await Category.findOne({
            where: {
                id: req.params.id
            },
           
        })

        res.json(categorys);
    } catch (error) {
        res.status(500).json(error, 'error');
    }
}