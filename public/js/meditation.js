// Variable Declaration
let row = $("#data");

function runSong() {
  let musicAPI = "/api/songs";
  fetch(musicAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (let i = 0; i < 4; i++) {
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
            <i class="fa-solid fa-circle-plus icon add"></i>
          </div>
          </div>
        </td>
     
      </tr>`);
      }
    });
}

//the buttons are going to be href that will send a home route request /videopage/1
//home request is going to serve the videoPage.html

runSong();
