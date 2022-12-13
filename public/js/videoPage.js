function getSong() {
  const url = document.location.href;
  const id = url.split("https://bc-music-generator.herokuapp.com/api/videoPage/")[1];

  fetch(`https://bc-music-generator.herokuapp.com/api/songs/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(url);
      console.log(id);
      const songName = $("#song");
      const videoContainer = $(".videoContainer");
      console.log(data);
      songName.text(data.song_name);
      videoContainer.append(data.song_source);
    });
}

getSong();
