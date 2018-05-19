module.exports = function(sequelize, DataTypes) {
    var Test = sequelize.define("Test", {
        //?
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
    });

    Test.associate = function (models) {
        // as author??
        Test.belongsTo(models.User);
        // Test.hasMany(models.Comment);
    }

    return Test;
}