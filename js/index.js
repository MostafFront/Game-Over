// 'use strict';

// let allGames =[];

// let rowData = document.getElementById('gameData')
// const toggleButtons = document.querySelectorAll('.nav-link');
// const displayDetails = document.querySelectorAll('.col')
// let detailsOfGame =document.getElementById('detailsOfGame');

// async function getGames(categoreOption) {
//     const options = {
//       method: "GET",
//       headers: {
//         "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
//         "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
//       },
//     };
  
//     const api = await fetch(
//       `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoreOption}`,
//       options
//     );
//     const response = await api.json();
//     allGames = response
//     console.log(allGames)
//     display()
//   }
  
// getGames(`mmorpg`);

// function display(){
//     let games =  ``;

//     for(let i=0;i<allGames.length;i++){
//         games += `
//         <div class="col">
//                         <div data-id="${allGames[i].id}" class="card h-10 bg-transparent" role="button" "="">
//                                 <div class="card-body">
//                                     <figure class="position-relative">
//                                         <img class="card-img-top object-fit-cover h-100" src="${allGames[i].thumbnail}">
//                                     </figure>
//                                     <figcaption>
//                                         <div class="hstack justify-content-between">
//                                             <h3 class="h6 small">${allGames[i].title}</h3>
//                                             <span class="badge text-bg-primary p-2">Free</span>
//                                         </div>
//                                         <p class="card-text small text-center opacity-50">
//                                            ${allGames[i].short_description}
//                                         </p>
//                                     </figcaption>
//                                 </div>
//                                 <footer class="card-footer small hstack justify-content-between">
//                                     <span class="badge badge-color">${allGames[i].genre}</span>
//                                     <span class="badge badge-color">${allGames[i].platform}</span>
//                                 </footer>
//                         </div>
//         </div>
//         `
//     }

//     rowData.innerHTML = games
// }


// toggleButtons.forEach(toggleButton => {
//   toggleButton.addEventListener('click', () => {
//     toggleButtons.forEach(btn => btn.classList.remove('active'));
//     toggleButton.classList.add('active');
//     getGames(toggleButton.dataset.category);
//     });
// });

// displayDetails.forEach((detail) => {
//     detail.addEventListener("click", function() {
//       let detailsOfThisGame = `
//       <div class="container">
//         <header class="hstack justify-content-between">
//           <h1 class="text-center h3 py-4">Game Details</h1>
//           <button class="btn-close btn-close-white" id="btnClose"></button>
//         </header>
//         <div class="row g-4" id="detailsContent">
//           <div class="col-md-4">
//             <img src="https://www.freetogame.com/g/582/thumbnail.jpg" class="w-100" alt="image details">
//           </div>
//           <div class="col-md-8">
//             <h3>Title: Tarisland</h3>
//             <p>Category: <span class="badge text-bg-info">MMORPG</span></p>
//             <p>Platform: <span class="badge text-bg-info">Windows</span></p>
//             <p>Status: <span class="badge text-bg-info">Live</span></p>
//             <p class="small"></p>
//             <a class="btn btn-outline-warning" target="_blank" href="https://www.freetogame.com/open/tarisland">Show Game</a>
//           </div>
//         </div>
//       </div>
//       `;
  
//       detailsOfGame.classList.remove('d-none');
//       detailsOfGame.innerHTML = detailsOfThisGame;
//     });
//   });




'use strict';

import { Game } from './Game.js';
import { GameDetails } from './GameDetails.js';
///////////////////////////////////////////
/////////////////////////////////////////////
///////////////////////////////////////
//المفروض لو شيلت الكمنت ده كله هيشتغل تمام بس عندي مشكله في )(Desplay Details)
/////////////////////////////////////
//////////////////////////////
////////////////////////////////////////
/////////////////////////////////
////////////////////////////////
///////////////////////////////
/////////////////////////////
//////////////////////////////////
////////////////////////////////////
// class Game {
//     constructor(id, title, thumbnail, shortDescription, genre, platform) {
//       this.id = id;
//       this.title = title;
//       this.thumbnail = thumbnail;
//       this.shortDescription = shortDescription;
//       this.genre = genre;
//       this.platform = platform;
//     }
  
//     getGameCard() {
//       return `
//       <div class="col">
//         <div data-id="${this.id}" class="card h-10 bg-transparent" role="button" "="">
//           <div class="card-body">
//             <figure class="position-relative">
//               <img class="card-img-top object-fit-cover h-100" src="${this.thumbnail}">
//             </figure>
//             <figcaption>
//               <div class="hstack justify-content-between">
//                 <h3 class="h6 small">${this.title}</h3>
//                 <span class="badge text-bg-primary p-2">Free</span>
//               </div>
//               <p class="card-text small text-center opacity-50">
//                 ${this.shortDescription}
//               </p>
//             </figcaption>
//           </div>
//           <footer class="card-footer small hstack justify-content-between">
//             <span class="badge badge-color">${this.genre}</span>
//             <span class="badge badge-color">${this.platform}</span>
//           </footer>
//         </div>
//       </div>
//       `;
//     }
//   }
  
//   class GameDetails extends Game {
//     constructor(id, title, thumbnail, shortDescription, genre, platform, category, status, gameUrl) {
//       super(id, title, thumbnail, shortDescription, genre, platform);
//       this.category = category;
//       this.status = status;
//       this.gameUrl = gameUrl;
//     }
  
//     getGameDetails() {
//       return `
//       <div class="container">
//         <header class="hstack justify-content-between">
//           <h1 class="text-center h3 py-4">Game Details</h1>
//           <button class="btn-close btn-close-white" id="btnClose"></button>
//         </header>
//         <div class="row g-4" id="detailsContent">
//           <div class="col-md-4">
//             <img src="${this.thumbnail}" class="w-100" alt="image details">
//           </div>
//           <div class="col-md-8">
//             <h3>Title: ${this.title}</h3>
//             <p>Category: <span class="badge text-bg-info">${this.category}</span></p>
//             <p>Platform: <span class="badge text-bg-info">${this.platform}</span></p>
//             <p>Status: <span class="badge text-bg-info">${this.status}</span></p>
//             <p class="small">${this.shortDescription}</p>
//             <a class="btn btn-outline-warning" target="_blank" href="${this.gameUrl}">Show Game</a>
//           </div>
//         </div>
//       </div>
//       `;
//     }
//   }



class GameList {
  constructor() {
    this.allGames = [];
    this.rowData = document.getElementById('gameData');
    this.toggleButtons = document.querySelectorAll('.nav-link');
    this.detailsOfGame = document.getElementById('detailsOfGame');
  }

  async getGames(categoryOption) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryOption}`,
      options
    );
    const response = await api.json();
    this.allGames = response.map(
      (game) =>
        new GameDetails(
          game.id,
          game.title,
          game.thumbnail,
          game.short_description,
          game.genre,
          game.platform,
          game.category,
          game.status,
          game.game_url
        )
    );
    this.displayGames();
  }

  displayGames() {
    this.rowData.innerHTML = this.allGames.map((game) => game.getGameCard()).join('');

    this.toggleButtons.forEach((toggleButton) => {
      toggleButton.addEventListener('click', () => {
        this.toggleButtons.forEach((btn) => btn.classList.remove('active'));
        toggleButton.classList.add('active');
        this.getGames(toggleButton.dataset.category);
      });
    });

    this.rowData.querySelectorAll('.col').forEach((detail) => {
      detail.addEventListener('click', () => {
        const clickedGame = this.allGames.find(
          (game) => game.id === parseInt(detail.dataset.id)
        );
        this.detailsOfGame.classList.remove('d-none');
        this.detailsOfGame.innerHTML = clickedGame.getGameDetails();
      });
    });
  }
}

const gameList = new GameList();
gameList.getGames('mmorpg');