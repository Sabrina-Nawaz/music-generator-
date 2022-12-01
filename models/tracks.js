// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Tracks extends Model {}

// set up fields and rules for Product model
Tracks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    track_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genres: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tracks",
  }
);

module.exports = Tracks;
