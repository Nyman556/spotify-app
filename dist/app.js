import AudioPlayer from './audioPlayer.js';
import UI from './ui.js';

var exportedSongs;

loadSongs();

function loadSongs() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let exp = this.response;
        let songNames = exp.split(',');
      }
    };
    xhttp.open("GET", "./assets/songs/song_list.txt", true);
    xhttp.send();
  }


function createSongArray(songs) {

}


const audioPlayer = new AudioPlayer('.audioPlayer', [
    {url: 'assets/songs/In_My_Feelings.mp3',      name: 'In My Feelings',                    artist: 'Drake',      duration: '03:38'},
    {url: 'assets/songs/Nice_For_What.mp3',       name: 'Nice For What',                     artist: 'Drake',      duration: '04:22'},
    {url: 'assets/songs/Gods_Plan.mp3',           name: "God's Plan",                        artist: 'Drake',      duration: '03:19'},
    {url: 'assets/songs/Professional_Rapper.mp3', name: 'Professional Rapper ft. Snoop Dog', artist: 'Lil Dicky',  duration: '05:52'},
    {url: 'assets/songs/Yellow.mp3',              name: 'Yellow',                            artist: 'Coldplay',   duration: '04:29'},
    {url: 'assets/songs/Get_Lucky.mp3',           name: 'Get Lucky',                         artist: 'Daft Punk',  duration: '06:09'},
    {url: 'assets/songs/Shape_Of_My_Heart.mp3',   name: 'Shape Of My Heart',                 artist: 'Sting',      duration: '04:43'},
    {url: 'assets/songs/7_days.mp3',              name: '7 days',                            artist: 'craig David',duration: '03:57'},
    {url: 'assets/songs/dilemma.mp3',             name: 'Nelly Dilemma ft. Kelly Rowland',   artist: 'Nelly',      duration: '04:42'},
    {url: 'assets/songs/Okay.mp3',                name: 'OKAY',                              artist: 'ODZ',        duration: '02:44'},
]);


const ui = new UI('.showcase', audioPlayer.audio.length);