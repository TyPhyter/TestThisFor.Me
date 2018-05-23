module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        repoUrl: DataTypes.STRING,
        hostedUrl: DataTypes.STRING,
        views: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        closed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        flagged: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        authorAvatarUrl: DataTypes.STRING
    });

    Project.associate = function (models) {
        //as author??
        Project.belongsTo(models.User);
        Project.hasMany(models.Test);
        // Project.hasMany(models.Comment);
    }

    return Project;
}