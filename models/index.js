// import sequelize & schemas
const Sequelize = require('sequelize')
const db = require('./../config/database')
const UserModel = require('./User')
const CategoryModel = require('../models/Category')
const ProductModel = require('../models/Product');
const CommandModel = require('../models/Command');
const CommandProductModel = require('../models/CommandPro');

// Gen Model in database
const User = UserModel(db, Sequelize)
const Category = CategoryModel(db, Sequelize)
const Product = ProductModel(db, Sequelize)
const Command = CommandModel(db, Sequelize)
const CommandProduct = CommandProductModel(db, Sequelize)

// les relaction

Category.hasMany(Product)
Product.belongsTo(Category)

User.hasMany(Command, { foreignKey: 'clientId' })
User.hasMany(Command, { foreignKey: 'deliveryId' })
Command.belongsTo(User, { as: 'client', foreignKey: 'clientId' });
Command.belongsTo(User, { as: 'delivery', foreignKey: 'deliveryId' });

Command.belongsToMany(Product, {
    through: CommandProduct,
    as: "products",
});

Product.belongsToMany(Command, {
    through: CommandProduct,
    as: "commands",
});


// Create table of model 
db.sync({ force: false }).then(
    () => {
        console.log('Table Created !')
    }
)

module.exports = {
    User,
    Category,
    Product,
    Command,
    CommandProduct,

}