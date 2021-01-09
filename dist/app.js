import AudioPlayer from './audioPlayer.js';

loadSongs();

function loadSongs() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let exp = this.response;
        let exportedSongs = exp.split(',');
        playlist(exportedSongs);
        songCounter(exportedSongs);
      }
    };
    xhttp.open("GET", "./assets/songs/song_list.txt", true);
    xhttp.send();
  }

function playlist(exportedSongs) {
const audioPlayer = new AudioPlayer('.audioPlayer', [
    {url: 'assets/songs/In_My_Feelings.mp3',      name: exportedSongs[0],  artist: 'Drake',      duration: '03:38'},
    {url: 'assets/songs/Nice_For_What.mp3',       name: exportedSongs[1],  artist: 'Drake',      duration: '04:22'},
    {url: 'assets/songs/Gods_Plan.mp3',           name: exportedSongs[2],  artist: 'Drake',      duration: '03:19'},
    {url: 'assets/songs/Professional_Rapper.mp3', name: exportedSongs[3],  artist: 'Lil Dicky',  duration: '05:52'},
    {url: 'assets/songs/Yellow.mp3',              name: exportedSongs[4],  artist: 'Coldplay',   duration: '04:29'},
    {url: 'assets/songs/Get_Lucky.mp3',           name: exportedSongs[5],  artist: 'Daft Punk',  duration: '06:09'},
    {url: 'assets/songs/Shape_Of_My_Heart.mp3',   name: exportedSongs[6],  artist: 'Sting',      duration: '04:43'},
    {url: 'assets/songs/7_days.mp3',              name: exportedSongs[7],  artist: 'craig David',duration: '03:57'},
    {url: 'assets/songs/dilemma.mp3',             name: exportedSongs[8],  artist: 'Nelly',      duration: '04:42'},
    {url: 'assets/songs/Okay.mp3',                name: exportedSongs[9],  artist: 'ODZ',        duration: '02:44'},
]);
}

function songCounter(exportedSongs) {
  const counter = document.querySelector('.song-counter');
  counter.innerHTML = exportedSongs.length + ' Songs';
}

const btn = document.querySelector('.playbutton');
var playing = false;

btn.addEventListener('click', (e) => {
  const audio = document.querySelector('.audio');
  console.log(audio);
  if (audio.src == '') {
    console.log('no song loaded')
  }
  if (audio.src != '' && playing === false) {
    audio.play();
    btn.innerHTML = 'PAUSE';
    return playing = true;
  }
  if (audio.src != '' && playing === true) {
    audio.pause();
    btn.innerHTML = 'PLAY';
    return playing = false;
  }
});