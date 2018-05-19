module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        githubID: DataTypes.STRING,

    });

    User.associate = function (models) {
        User.hasMany(models.Project);
        User.hasMany(models.Test);
        //?
        // User.hasMany(models.Comment);
    }

    return User;
}