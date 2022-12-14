const { Song } = require("../models");

const songsData = [
  {
    song_name: "The Sound of Inner Peace",
    category: "Meditation ",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/FTqrQsSIKR0?controls=1" title="The Sound of Inner Peace 14 | 528 Hz | Relaxing Music for Meditation, Zen, Yoga & Stress Relief" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Good Morning Music",
    category: "Meditation ",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/vSyt3D1eut8?controls=1" title="GOOD MORNING MUSIC 💖 528 HZ Boost Positive Energy | Peaceful Morning Meditation Music For Waking Up" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Tranquility",
    category: "Meditation ",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/FbXCjfwNORA?controls=1" title="Tranquility • Deep Relaxing Music for Sleep and Meditation by Peder B. Helland" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Beautiful Relaxing Music for Stress Relief",
    category: "Meditation ",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/2OEL4P1Rz04?controls=1" title="Beautiful Relaxing Music for Stress Relief • Meditation Music, Sleep Music, Ambient Study Music" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Chill Lofi Vibes",
    category: "Lofi",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/L7SWwNnsSLo?controls=1" title="Chill Lofi Vibes ❄ Lofi Music | Study Music ~ beats to study / chill to" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Lofi Hip Hop",
    category: "Lofi",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/n61ULEU7CO0?controls=1" title="Best of lofi hip hop 2021 ✨ - beats to relax/study to" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Chill Drive Music",
    category: "Lofi",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/25BkVBgFD9Y?controls=1" title="Chill Drive - Lofi hip hop mix ~ Stress Relief, Relaxing Your Mind" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
  {
    song_name: "Jazzy & Hip Hop Vibes",
    category: "Lofi",
    song_source: `<iframe class="responsive-iframe" src="https://www.youtube.com/embed/iEGFFyv0MH4?controls=1" title="Nighttime Ramen 🍜  [jazzy beats / lofi hip hop mix]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
  },
];

const seedSongs = () => Song.bulkCreate(songsData);

module.exports = seedSongs;
