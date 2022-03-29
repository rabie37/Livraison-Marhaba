/* -------------------------------------------------------------------------- */
/*                                   User                                     */
/* -------------------------------------------------------------------------- */

module.exports = (db, type) => {
    return db.define("products", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: type.STRING,
            allowNull: false,
        },
        decsription: {
            type: type.STRING,
            allowNull: false,
        },
        price: {
            type: type.STRING,
            allowNull: false,
        },
        image: {
            type: type.STRING,
            allowNull: false,
        }
    });
};