// Variable Declaration
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

//the buttons are going to be href that will send a home route request /videopage/1
//home request is going to serve the videoPage.html

runSong();