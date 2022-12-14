let row = $("#data");

function getSongList() {
  let musicAPI = "/api/songs";
  fetch(musicAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 4; i < data.length; i++) {
        row.append(`
        <tr class="d-flex col-12">      
        <td class="col-8 d-flex align-items-center">
          <div>
            <p class="song">${data[i].song_name}</p>
          </div>
        </td>
     
        <td class="col-4 d-flex justify-content-center">
          <div class="musicBtn">
          <a href="/videoPage/${data[i].id}"> <i class="fa-solid fa-play icon play"></i></a>
            <i class="fa-solid fa-circle-plus icon add${i}"></i>
          </div>
        </td>
     
      </tr>`);

      function addSong(){
        const userData = JSON.parse(localStorage.getItem('USER_DATA') || '{}')
        const user_id = userData.user.id;
        const song_id = data[i].id;
        const postData = {user_id, song_id};
        fetch("/api/playlist/",{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(postData)
        })
        .then((response) => console.log(response))
      
        alert('The Song has been added to your playlist!')
      }

      const addBtn=$(`.add${i}`);
      addBtn.on('click',addSong)

      }

    });
}

//the buttons are going to be href that will send a home route request /videoPage/1
//home request is going to serve the videoPage.html

//Invoke Functions
getSongList();
