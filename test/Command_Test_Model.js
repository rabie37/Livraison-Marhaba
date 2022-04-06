const { expect } = require('chai')


const {
    sequelize,
    dataTypes,
    checkModelName,
    checkPropertyExists
} = require('sequelize-test-helpers')
const CommandModel = require('../models/Command')

describe('models/Command', () => {
    const Command = CommandModel(sequelize, dataTypes)
    const command = new Command()

    checkModelName(Command)('commands')

    context('properties', () => {
        ;['id', 'address', 'status', 'total'].forEach(checkPropertyExists(command))
    })
    context('associations', () => {
        const User = 'some dummy user'
        const Product = 'some product here'
    
        after(() => {
          Command.associate({ User })
          Command.associate({ Product })
        })
    
        it('defined a belongsTo association with User', () => {
          expect(Command.belongsTo).to.have.been.calledWith(User)
        })
      })
      it("defined a belongsToMany association with Command through CommandProduct as 'Products'", () => {
        expect(Command.belongsToMany).to.have.been.calledWith(Product, {
          through: CommandProduct,
          as: 'products'
        })
      })
})





























