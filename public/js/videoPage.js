async function getSong() {
  const url = document.location.href;
  const id = url.split("http://localhost:3001/videoPage/")[1];

  fetch(`http://localhost:3001/api/songs/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      console.log(data, "song got!");
      //use the data to put it in the html to show the individual song information
    });
}

getSong();
