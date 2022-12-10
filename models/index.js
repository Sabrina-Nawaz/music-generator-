// Import Models
const User = require("./User");
const Playlist = require("./Playlist");
const Song = require("./Song");

User.hasMany(Playlist, {
  foreignKey: "user_id",
});

Playlist.hasOne(Song, {
  sourceKey: "song_id",
  foreignKey: "id",
  constraints: false,
});

module.exports = {
  Song,
  Playlist,
  User,
};

// // Song belongsTo Playlist
// Song.belongsToMany(User,{
//   through:Playlist,
//   onDelete:'CASCADE',
//   foreignKey:"song_id"
// })
// // Users has one Playlist
// User.belongsToMany(Song, {
//   through:Playlist,
//   onDelete:'CASCADE',
//   foreignKey: "user_id",
// });

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
