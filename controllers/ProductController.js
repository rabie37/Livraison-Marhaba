
const { Product } = require("../models/index");
const fs = require('fs');
const { log } = require("console");

exports.getProduct = async (req, res) => {
    const product = await Product.findAll()
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.json({ status: 400, message: err });
        });
};

exports.createProduct = async (req, res) => {
    let image = './upload/' + Math.floor(Math.random() * 1000000000000000) + '.png';
    await fs.promises.writeFile(image, req.files.image[0].buffer)
    let data = req.body;

    const name = data.name
    const decsription = data.decsription
    const price = data.price
    const imageProduct = image
    const category = data.categoryId

    Product.create({
        name: name, decsription: decsription, price: price, image: imageProduct, categoryId: category
    })
        .then((product) => {

            res.json(product)
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};

// Update Products
exports.updateProduct = async (req, res) => {
    let data = req.body;
    const productUpdate = await Product.update(
        {
            name: data.name,
            decsription: data.decsription,
            price: data.price,
            imageProduct: data.image

        }, {
        where: { id: req.params.id }
    })
        .then((productUpdate) => {
            res.json({ status: 200, productUpdate });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });
};
exports.deleteProduct = async (req, res) => {
    const products = await Product.destroy({ where: { id: req.params.id } })
        .then((products) => {
            res.json({ products });
        })
        .catch((err) => {
            res.send({ status: 400, message: err });
        });

};