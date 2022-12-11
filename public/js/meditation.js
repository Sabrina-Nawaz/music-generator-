// Variable Declaration
let songTitle = document.querySelector(".title");
let category = document.querySelector(".singer");
let videoContainer = document.querySelector(".videoContainer");
let row = $("#data");

function runSong() {
  let musicAPI = "http://localhost:3001/api/songs";
  fetch(musicAPI)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      data.forEach((element) => {
        row.append(`
         <tr>      
           <td>
             <div>
               <p class="song">${element.song_name}</p>
             </div>
           </td>
        
           <td>
             <div id="musicBtn">
               <i class="fa-solid fa-play icon" id="play" data-href='videoPage.html'></i>
               <i class="fa-solid fa-circle-plus icon" id="add"></i>
             </div>
           </td>
         </tr>`);
      });
    });
}

runSong();

//---------------Gareth's Work-------------------
// console.log(data);
//       songs = [0, 1, 2, 3, 4, 5, 6, 7];
//       songs.forEach(function (i) {
//         let tableRow = document.createElement("tr");
//         let tableSongName = document.createElement("td");
//         let tableSongCategory = document.createElement("td");
//         tableSongName.textContent = data[i].song_name;
//         tableSongCategory.textContent = data[i].category;
//         tableSongName.setAttribute("class", "tableSongName");
//         tableSongCategory.setAttribute("class", "tableSongCategory");
//         // document.getElementsByClassName("tableSongName").style.fontWeight = "500";
//         // document.getElementsByClassName("tableSongCategory").style.fontWeight = 900;
//         songList.appendChild(tableRow);
//         tableRow.appendChild(tableSongName);
//         tableRow.appendChild(tableSongCategory);
//       });

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
