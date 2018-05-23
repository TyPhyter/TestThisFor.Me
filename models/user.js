module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        passwordHash: DataTypes.STRING,
        displayName: DataTypes.STRING,
        githubID: DataTypes.STRING,
        githubName: DataTypes.STRING,
        githubAlias: DataTypes.STRING,
        avatarUrl: DataTypes.STRING,
        //
        //GAMIFICATION PROPS
        points: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        badges: {
            type: DataTypes.TEXT,
            // allowNull: false,
            get() {
                return this.getDataValue('badges').split(';')
            },
            set(val) {
               this.setDataValue('badges',val.join(';'));
            },
            defaultValue: ""
        },
        // projects: {
        //     type: DataTypes.TEXT,
        //     // allowNull: false,
        //     get() {
        //         return this.getDataValue('projects').split(';')
        //     },
        //     set(val) {
        //        this.setDataValue('projects',val.join(';'));
        //     },
        //     defaultValue: ""
        // },
        // tests: {
        //     type: DataTypes.TEXT,
        //     // allowNull: false,
        //     get() {
        //         return this.getDataValue('tests').split(';')
        //     },
        //     set(val) {
        //        this.setDataValue('tests',val.join(';'));
        //     },
        //     defaultValue: ""
        // },
        //the logins "array"
        logins: {
            type: DataTypes.TEXT,
            // allowNull: false,
            get() {
                return this.getDataValue('logins').split(';')
            },
            set(val) {
               this.setDataValue('logins',val.join(';'));
            },
            defaultValue: ""
        },


    });

    User.associate = function (models) {
        User.hasMany(models.Project);
        User.hasMany(models.Test);
        //?
        // User.hasMany(models.Comment);
    }

    return User;
}