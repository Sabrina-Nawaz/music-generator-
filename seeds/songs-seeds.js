const { Song } = require("../models");

const tracksData = [
  {
   
    song_name: "I Ain't Worried",
    artist: "OneRepublic",
    album: "Top Gun: Maverick",
    song_source: "https://www.youtube.com/watch?v=fMrk3qBI80k",
  },
  {
   
    song_name: "I Like You (A Happier Song)",
    artist: "Post Malone",
    album: "Twelve Carat Toothache",
    song_source: "https://www.youtube.com/watch?v=9cgBSVv7J0c",
  },
  {
   
    song_name: "Give Me A Kiss",
    artist: "Crash Adams",
    album: "Give Me a Kiss - Single",
    song_source: "https://www.youtube.com/watch?v=wNBdorKBcp8",
  },
  {
   
    song_name: "Physical",
    artist: "Dua Lipa",
    album: "Physical - Single",
    song_source: "https://www.youtube.com/watch?v=9HDEHj2yzew",
  },
  {
    
    song_name: "Love Me Like You Do",
    artist: "Ellie Goulding",
    album: "Love Me Like You Do - Single",
    song_source: "https://www.youtube.com/watch?v=AJtDXIazrMo",
  },
  {
   
    song_name: "Sugar",
    artist: "Maroon 5",
    album: "Sugar - Single",
    song_source: "https://www.youtube.com/watch?v=09R8_2nJtjg",
  },
  {
  
    song_name: "Same Friends",
    artist: "Sam Fischer",
    album: "Same Friends - Single",
    song_source: "https://www.youtube.com/watch?v=Uy4_C6Ev8S8",
  },
  {
  
    song_name: "Drag Me Down",
    artist: "One Direction",
    album: "Drag Me Down - Single",
    song_source: "https://www.youtube.com/watch?v=Jwgf3wmiA04",
  },
  {
 
    song_name: "Fight Song",
    artist: "Rachel Platten",
    album: "Fight Song - Single",
    song_source: "https://www.youtube.com/watch?v=xo1VInw-SKc",
  },
  {

    song_name: "Treasure",
    artist: "Bruno Mars",
    album: "Unorthodow Jukebox",
    song_source: "https://www.youtube.com/watch?v=nPvuNsRccVw",
  },
  {
  
    song_name: "Want To Want Me",
    artist: "Jason Derulo",
    album: "Everything Is 4",
    song_source: "https://www.youtube.com/watch?v=rClUOdS5Zyw",
  },
  {
   
    song_name: "This Is How We Do",
    artist: "Katy Perry",
    album: "PRISM",
    song_source: "https://www.youtube.com/watch?v=7RMQksXpQSk",
  },
  {
 
    song_name: "Tukoh Taka",
    artist: "Nicki Minaj",
    album: "Tukoh Taka - Single",
    song_source: "https://www.youtube.com/watch?v=rb0bjyt1OD0",
  },
  {
  
    song_name: "Arhbo",
    artist: "Ozuna",
    album: "Arhbo - Single",
    song_source: "https://www.youtube.com/watch?v=e8laLiWolGg",
  },
  {
    id: "15",
    song_name: "Hayya Hayya",
    artist: "Trinidad Cardona",
    album: "Hayya Hayya - Single",
    song_source: "https://www.youtube.com/watch?v=vyDjFVZgJoo",
  },
];

const seedSongs = () => Song.bulkCreate(tracksData);

module.exports = seedSongs;
