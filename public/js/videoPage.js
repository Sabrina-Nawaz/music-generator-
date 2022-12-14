function getSong() {
  const url = document.location.href;
  const id = url.split("/videoPage/")[1];
  const addBtn = $('#add');

  fetch(`/api/songs/${id}`)
    .then(function (response) {
      return response.json();
    })
    .then((data) => {
      const songName = $("#song");
      const videoContainer = $(".videoContainer");
      console.log(data);
      songName.text(data.song_name);
      videoContainer.append(data.song_source);


      addBtn.on('click',function(){

        const userData = JSON.parse(localStorage.getItem('USER_DATA') || '{}')
        const user_id = userData.user.id;
        const song_id = data.id;
        const postData = {user_id, song_id};
        fetch("/api/playlist/",{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(postData)
        })
        .then((response) => console.log(response))

        alert('The Song has been added to your playlist!')

      })
    });
}

getSong();


