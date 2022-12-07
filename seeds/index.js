const seedSongs = require("./songs-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedSongs();
  console.log("\n----- SONGS SEEDED -----\n");

  process.exit(0);
};

seedAll();
