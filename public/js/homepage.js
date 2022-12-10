// Variable Declaration
let songTitle = document.querySelector(".title");
let category = document.querySelector(".singer");
let videoContainer = document.querySelector(".videoContainer");

let musicAPI = "/api/song/3";

function runSong() {
  fetch(musicAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      songTitle.textContent = data.song_name;
      category.textContent = data.category;
      let videoIFrame = document.createElement("iframe");
      videoIFrame.setAttribute("class", "responsive-iframe");
      videoIFrame.textContent = data.song_source;
      videoContainer.append(videoIFrame);
    });
}
// function runMusicAPI() {
//   fetch(musicAPI)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data.song_source);
//       let video = document.createElement("video");
//       video.setAttribute("src", "");
//       let container = document.getElementById("container_1");
//       container.append(video);
//     });
// }

//event.button > invoke runMusicAPI
