
export default class UI {
    constructor(selector = '.showcase', songs) {
    this.showcase = document.querySelector(selector);
    this.songs = songs;
    this.addShowcaseElements(this.songs);
    }

addShowcaseElements()  {
        const albumCover = document.createElement('div');
        const header = document.createElement('h1');
        const songCounter = document.createElement('p');
        const btn = document.createElement('button');

        albumCover.classList.add('album-cover');
        header.classList.add('playlist-name');
        songCounter.classList.add('song-counter');
        btn.classList.add('playbutton')

        this.showcase.appendChild(albumCover);
        this.showcase.appendChild(header);
        this.showcase.appendChild(songCounter);
        this.showcase.appendChild(btn);

        header.innerHTML = 'Jab Playlist'
        songCounter.innerHTML = `${this.songs} Songs`
        btn.innerHTML = 'PLAY';
    }
}