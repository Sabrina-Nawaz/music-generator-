// Import Models
const User = require("./User");
const Playlist = require("./Playlist");
const Song = require("./Song");

// Song belongsTo Playlist
Song.belongsToMany(User,{
  through:Playlist,
  foreignKey:"user_id"
})
// Users has one Playlist
User.belongsToMany(Song, {
  through:Playlist,
  foreignKey: "song_id",
});
//PlaylistRoute /api/playlist/:id(userID)
//Playlist.findAll({where:{user_id:userID},include:[Song]})
//Playlist table
//id:1, song_id:1,user_id:1
//id:2,song_id:2,user_id:1

// const playlist=[
//   {
//   user_id:1,
//   song_id:1
// },{
//   user_id:1,
//   song_id:2
// },{
//   user_id:2,
//   song_id:1
// }
//]

module.exports = {
  Song,
  Playlist,
  User,
};
