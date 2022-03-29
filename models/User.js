/* -------------------------------------------------------------------------- */
/*                                   User                                     */
/* -------------------------------------------------------------------------- */

module.exports = (db, type) => {
    return db.define("users", {
        id: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email: {
            type: type.STRING,
            allowNull: false,
        },
        password: {
            type: type.STRING,
            allowNull: false,
        },
        role: {
            type: type.INTEGER,
        },
        status: {
            type: type.INTEGER,
        },
    });
};