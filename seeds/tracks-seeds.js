const { Tracks } = require("../models");

const tracksData = [
  {
    id: "01",
    track_name: "I Ain't Worried",
    artist_name: "OneRepublic",
    genre: "Pop",
    track_source: "https://www.youtube.com/watch?v=fMrk3qBI80k",
  },
  {
    id: "01",
    track_name: "I Like You (A Happier Song)",
    artist_name: "Post Malone",
    genre: "R&B",
    track_source: "https://www.youtube.com/watch?v=9cgBSVv7J0c",
  },
  {
    category_name: "Music",
  },
  {
    category_name: "Hats",
  },
  {
    category_name: "Shoes",
  },
];

const seedCategories = () => Tracks.bulkCreate(tracksData);

module.exports = seedCategories;
