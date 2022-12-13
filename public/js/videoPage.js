async function getSong() {
  const url = document.location.href;
  const id = url.split("https://bc-music-generator.herokuapp.com/")[1];

  fetch(`https://bc-music-generator.herokuapp.com/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      //use the data to put it in the html to show the individual song information
      console.log(data);
      songName.text(data.song_name);
      videoContainer.append(data.song_source);
    });
}

getSong();
