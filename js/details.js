import Game from'./index';

export class GameDetails extends Game {
    constructor(id, title, thumbnail, shortDescription, genre, platform, category, status, gameUrl) {
      super(id, title, thumbnail, shortDescription, genre, platform);
      this.category = category;
      this.status = status;
      this.gameUrl = gameUrl;
    }
  
    getGameDetails() {
      return `
      <div class="container">
        <header class="hstack justify-content-between">
          <h1 class="text-center h3 py-4">Game Details</h1>
          <button class="btn-close btn-close-white" id="btnClose"></button>
        </header>
        <div class="row g-4" id="detailsContent">
          <div class="col-md-4">
            <img src="${this.thumbnail}" class="w-100" alt="image details">
          </div>
          <div class="col-md-8">
            <h3>Title: ${this.title}</h3>
            <p>Category: <span class="badge text-bg-info">${this.category}</span></p>
            <p>Platform: <span class="badge text-bg-info">${this.platform}</span></p>
            <p>Status: <span class="badge text-bg-info">${this.status}</span></p>
            <p class="small">${this.shortDescription}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${this.gameUrl}">Show Game</a>
          </div>
        </div>
      </div>
      `;
    }
}