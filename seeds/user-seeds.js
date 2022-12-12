const { User } = require("../models");

const usersData = [
  {
    username: "LHBO19",
    password: "password",
  },
  {
    username: "Sabrina",
    password: "password",
  },
];

const userSeeds = () => User.bulkCreate(usersData);

module.exports = userSeeds;
