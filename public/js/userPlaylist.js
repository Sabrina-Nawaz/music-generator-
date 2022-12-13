const row = $("#data");
const deleteBtn =$('#delete')

function runSong() {
    let playlistAPI = "api/playlist/3";
    fetch(playlistAPI)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        data.forEach(element => {
            for(let i=0 ; i < element.playlists.length; i++){            

                row.append(`
                <tr class="d-flex col-12">      
                <td class="col-8 d-flex align-items-center">
                  <div>
                    <p class="song">${element.playlists[i].song.song_name}</p>
                  </div>
                </td>
             
                <td class="col-4 d-flex justify-content-center">
                  <div class="musicBtn">
                  <a href="/videoPage/${element.playlists[i].song.id}"> <i class="fa-solid fa-play icon play"></i></a>
                    <i class="fa-solid fa-circle-minus icon" id='delete'></i>
                  </div>
                  </div>
                </td>
             
              </tr>`);

              deleteBtn.on('click', function () {
                fetch(`/api/playlist/ ${element.playlists[i].id}`, {
                  method: 'DELETE',
                }).then(response => {console.log(response.status); })
              });

            }

        });

      });
  }


  
runSong();


