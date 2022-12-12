const seedSongs = require("./songs-seeds");
const userSeeds = require("./user-seeds");
const plSeeds = require("./playlist-seeds");
const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await userSeeds();
  console.log("\n----- Users SEEDED -----\n");
  await seedSongs();
  console.log("\n----- SONGS SEEDED -----\n");
  await plSeeds();
  console.log("\n----- Playlist SEEDED -----\n");
  process.exit(0);
};

seedAll();
