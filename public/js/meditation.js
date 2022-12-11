// Variable Declaration
let songTitle = document.querySelector(".title");
let category = document.querySelector(".singer");
let videoContainer = document.querySelector(".videoContainer");
let row = $('#data')



function runSong() {
  let musicAPI = "http://localhost:3001/api/songs";
  fetch(musicAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for(let i=0; i<4; i++) {
        row.append(`
         <tr>      
           <td>
             <div>
               <p class="song">${data[i].song_name}</p>
             </div>
           </td>
        
           <td>
             <div id="musicBtn">
               <i class="fa-solid fa-play icon" id="play" data-href='videoPage.html'></i>
               <i class="fa-solid fa-circle-plus icon" id="add"></i>
             </div>
           </td>
        
         </tr>`);

      }
    });


}

runSong();

// function runMusicAPI() {
//   fetch(musicAPI)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data.song_source);
//       let video = document.createElement("video");
//       video.setAttribute("src", "");
//       let container = document.getElementById("container_1");
//       container.append(video);
//     });
// }

//event.button > invoke runMusicAPI
