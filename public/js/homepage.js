// Variable Declaration

let musicAPI = "/api/song/3";

function runMusicAPI() {
  fetch(musicAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.song_source);
      let video = document.createElement("video");
      video.setAttribute("src", "");
      let container = document.getElementById("container_1");
      container.append(video);
    });
}

//event.button > invoke runMusicAPI
