const { User } = require("../models");

const usersData = [
  {
    username: "LHBO19",
    password: "$2b$10$BKJHGj/Di85NcCqENvNlnuvGkweBio2o95blKK9NGbrpuRbjtrisS", // password
  },
  {
    username: "Sabrina",
    password: "$2b$10$BKJHGj/Di85NcCqENvNlnuvGkweBio2o95blKK9NGbrpuRbjtrisS", // password
  },
];

const userSeeds = () => User.bulkCreate(usersData);

module.exports = userSeeds;
