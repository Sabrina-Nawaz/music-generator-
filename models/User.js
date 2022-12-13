// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
const { beforeCreate } = require('../config/connection');
// import our database connection from config.js
const sequelize = require("../config/connection");
const bcrypt = require('bcrypt');
// Initialize Product model (table) by extending off Sequelize's Model class


class User extends Model {
  checkPassword(loginPw) {
    return  bcrypt.compareSync(loginPw, this.password);
  }
}  

// set up fields and rules for Product model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      // prevents null values
      allowNull: false,
      // will only allow alphanumeric characters
      validate: {
        isAlphanumeric: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull:true,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // must be longer than 8 characters
      validate: {
        len: [8],
      },
    },


  },

    // user_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // user_password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  
  {
    hooks: {
    beforeCreate: async (newUserData) => {
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
    beforeUpdate: async (updatedUserData) => {
      if (updatedUserData.password) {
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      }
      return updatedUserData;
    },
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;


