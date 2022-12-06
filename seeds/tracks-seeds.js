const { Song } = require("../models");

const tracksData = [
  {
    id: "01",
    song_name: "I Ain't Worried",
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
  {
    id: "03",
    song_name: "Give Me A Kiss",
    artist: "Crash Adams ",
    album: "Give Me a Kiss - Single",
    song_source: "https://www.youtube.com/watch?v=wNBdorKBcp8",
  },
];

const seedCategories = () => Song.bulkCreate(tracksData);

module.exports = seedCategories;
