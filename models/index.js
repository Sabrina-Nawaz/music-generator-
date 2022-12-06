// Import Models
const User = require("./User");
const Playlist = require("./Playlist");
const Song = require("./Song");

// Song belongsTo Playlist
Song.belongsTo(Playlist, {
  foreignKey: "playlist_id",
});
// Users has one Playlist
Playlist.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = {
  Song,
  Playlist,
  User,
};
