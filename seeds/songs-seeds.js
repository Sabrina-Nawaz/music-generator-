const { Song } = require("../models");

const songsData = [
  {
    song_name: "Cozy Coffee Shop Music",
    category: "Focus",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/MYPVQccHhAQ" title="4K Cozy Coffee Shop with Smooth Piano Jazz Music for Relaxing, Studying and Working" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Good Morning Music",
    category: "Meditation ",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/vSyt3D1eut8" title="GOOD MORNING MUSIC 💖 528 HZ Boost Positive Energy | Peaceful Morning Meditation Music For Waking Up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Background study music",
    category: "Focus",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/3158QbUCJcA" title="4 Hours of Background Music For Studying - Focus Music for Deep Concentration" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Focus and Memory music",
    category: "Focus",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/mg7netw1JuM" title="Super Intelligence: 🍎 Memory Music, Improve Memory and Concentration, Binaural Beats Focus Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Seriously Smoothed Brown Noise",
    category: "Brown Noise",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/pfbdrBFKSf0" title="Seriously Smoothed Brown Noise: (1 hour) Focus, Tinnitus Relief, Meditation, Sleep" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
];

const seedSongs = () => Song.bulkCreate(songsData);

module.exports = seedSongs;
