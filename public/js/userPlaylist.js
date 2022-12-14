const row = $("#data");

const userData = JSON.parse(localStorage.getItem('USER_DATA') || '{}')

function runSong() {
    let playlistAPI = `api/playlist/${userData.user.id}`;
    fetch(playlistAPI)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {

        console.log(data);

            for(let i=0 ; i < data[0].playlists.length; i++){            

              row.append(`
              <tr class="d-flex col-12">      
              <td class="col-8 d-flex align-items-center">
                <div>
                  <p class="song">${data[0].playlists[i].song.song_name}</p>
                </div>
              </td>
           
              <td class="col-4 d-flex justify-content-center">
                <div class="musicBtn">
                <a href="/videoPage/${data[0].playlists[i].song.id}"> <i class="fa-solid fa-play icon play"></i></a>
                  <i class="fa-solid fa-circle-minus icon" id='delete${i}'></i>
                </div>
                </div>
              </td>
           
            </tr>`);


            function deleteSong(){
              const playlistId = data[0].playlists[i].id;
              fetch(`/api/playlist/ ${playlistId}`, {
                method: 'DELETE',
              }).then(response => {console.log(response.status); })
              location.reload();
            }

            const deleteBtn=$(`#delete${i}`);
            deleteBtn.on('click', deleteSong);
            } //end of for loop

      });
  }




  
runSong();



