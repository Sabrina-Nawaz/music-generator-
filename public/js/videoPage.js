

 function getSong() {
  const url = document.location.href;
  const id = url.split("http://localhost:3001/videoPage/")[1];

  fetch(`http://localhost:3001/api/songs/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const songName = $('#song');
      const videoContainer=$('.videoContainer');
      console.log(data);
      songName.text(data.song_name);
      videoContainer.append(data.song_source);
    });
}

getSong();
