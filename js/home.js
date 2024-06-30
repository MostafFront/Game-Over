
export class Game {
    constructor(id, title, thumbnail, shortDescription, genre, platform) {
      this.id = id;
      this.title = title;
      this.thumbnail = thumbnail;
      this.shortDescription = shortDescription;
      this.genre = genre;
      this.platform = platform;
    }
  
    getGameCard() {
      return `
      <div class="col">
        <div data-id="${this.id}" class="card h-10 bg-transparent" role="button" "="">
          <div class="card-body">
            <figure class="position-relative">
              <img class="card-img-top object-fit-cover h-100" src="${this.thumbnail}">
            </figure>
            <figcaption>
              <div class="hstack justify-content-between">
                <h3 class="h6 small">${this.title}</h3>
                <span class="badge text-bg-primary p-2">Free</span>
              </div>
              <p class="card-text small text-center opacity-50">
                ${this.shortDescription}
              </p>
            </figcaption>
          </div>
          <footer class="card-footer small hstack justify-content-between">
            <span class="badge badge-color">${this.genre}</span>
            <span class="badge badge-color">${this.platform}</span>
          </footer>
        </div>
      </div>
      `;
    }
  }