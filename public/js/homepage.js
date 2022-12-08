// Variable Declaration

let musicAPI = "http://localhost:3030";

function runMusicAPI() {
  fetch(musicAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
