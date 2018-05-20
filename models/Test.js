module.exports = function(sequelize, DataTypes) {
    var Test = sequelize.define("Test", {
        //?
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        accepted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        rejected: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        flagged: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });

    Test.associate = function (models) {
        // as author??
        Test.belongsTo(models.User);
        // Test.hasMany(models.Comment);
    }

    return Test;
}