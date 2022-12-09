const { Song } = require("../models");

const songsData = [
  {
    id: "01",
    user_id: " ",
    artist: "OneRepublic",
    album: "Top Gun: Maverick",
    song_source: "https://www.youtube.com/watch?v=fMrk3qBI80k",
  },
  {
    id: "02",
    song_name: "I Like You (A Happier Song)",
    artist: "Post Malone",
    album: "Twelve Carat Toothache",
    song_source: "https://www.youtube.com/watch?v=9cgBSVv7J0c",
  },
  
];

const seedSongs = () => Song.bulkCreate(songsData);

module.exports = seedSongs;
