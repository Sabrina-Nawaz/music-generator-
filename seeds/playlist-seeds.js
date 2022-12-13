const { Playlist } = require("../models");

const playlistData = [
  {
    user_id: 1,
    song_id: 1,
  },
  {
    user_id: 1,
    song_id: 2,
  },
  {
    user_id: 1,
    song_id: 3,
  },
  {
    user_id: 2,
    song_id: 3,
  },
];

const plSeeds = () => Playlist.bulkCreate(playlistData);

module.exports = plSeeds;
