/* <i class="fas fa-play"></i> */
{/* <i class="fas fa-pause"></i> */}
const icon = document.getElementById('playing');
const playBtn = document.getElementById('playbutton');
const songCounter = document.getElementById('song-counter');
const songContainer = document.querySelectorAll('.song');

const playButtons = document.querySelectorAll('.btn');

icon.addEventListener('click', (e) => {
    console.log("active")
})

console.log(playButtons);

let songs = document.getElementById('song-list').getElementsByClassName('song');
songCounter.innerHTML = songs.length + ' SONGS';

var activeSong = '';



let playing = false;


window.addEventListener('click', (e) => {
    if(e.target.classList.contains('song')) {
        checkActive(e.target);
        e.target.classList.add('active');
    }
    if(e.target.classList.contains('fa-play')) {
        console.log('hello')
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        return
    }
    if(e.target.classList.contains('fa-pause')) {
        e.target.classList.remove('fa-pause');
        e.target.classList.add('fa-play');
        return
    }
})




function chBackcolor(color) {
   document.body.style.background = color;
}

playBtn.addEventListener('click', (e) => {
    if(e.target.innerHTML == 'PAUSE') {
        playBtn.innerHTML = 'PLAY';
        icon.innerHTML = ``
    } else {
        playBtn.innerHTML = 'PAUSE';
        icon.innerHTML = `<img src="https://s.svgbox.net/loaders.svg?ic=bars&fill=34ae55" width="32" height="32">`
        
    }
});

function checkActive(get) {
    console.log(get);
    for(i = 0; i < songs.length; i++) {
       if (songs[i].classList.contains('active')) {
        return activeSong = songs[i];
       } else return false;
    }
}