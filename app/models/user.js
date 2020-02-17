//Modelo da tabela criada !importante: Ao utilizar, vc não vai chamar User e sim SMC_USERS
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('SMC_USERS', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return User;
}