const db = require("../modules/database");
const crypto = require('crypto');

const Story = db.sequelize.define("Story", {
    id: {
        type: db.Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },

    title: {
        type: db.Sequelize.STRING,
        allowNull: false,
    },

    content: {
        type: db.Sequelize.TEXT,
        allowNull: true
    },

    date_published: {
        type: db.Sequelize.DATE,
        allowNull: false,
    }
});




const User = db.sequelize.define("User", {
    id: {
        type: db.Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    first_name: {
        type: db.Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }, 
    last_name: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    email: {
        type: db.Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        },
    },
    password: {
        type: db.Sequelize.STRING,
        get() {
            return () => this.getDataValue('password')
        },
        validate: {
            len: [6,20],
            notEmpty: true,
        }
    },
    salt: {
        type: db.Sequelize.STRING,
        get() {
            return() => this.getDataValue('salt')
        }
    },
}, {
    getterMethods: {
        fullName() {
            return this.first_name+' '+this.last_name;
        }
    }
});

User.generateSalt = function() {
    return crypto.randomBytes(16).toString('base64')
};

User.encryptPassword = function(plainText, salt) {
    return crypto
        .createHash('RSA-SHA256')
        .update(plainText)
        .update(salt)
        .digest('hex')
};

const setSaltAndPassword = user => {
    if (user.changed('password')) {
        user.salt = User.generateSalt()
        user.password = User.encryptPassword(user.password(), user.salt())
    }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

User.prototype.correctPassword = function(enteredPassword) {
    return User.encryptPassword(enteredPassword, this.salt()) === this.password()
};

const StoryView = db.sequelize.define("StoryViews", {
    id: {
        type: db.Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    }
});


User.belongsToMany(Story, {through: StoryView});
Story.belongsToMany(User, {through: StoryView});


module.exports = {Story, User, StoryView};