/* -------------------------------------------------------------------------- */
/*                                   User                                     */
/* -------------------------------------------------------------------------- */

module.exports = (db, type) => {
    return db.define("commands", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        address: {
            type: type.STRING,
            allowNull: false,
        },
        status: {
            type: type.INTEGER,
            allowNull: false,
        },
        total: {
            type: type.INTEGER,
            allowNull: false,
        }
    });
};