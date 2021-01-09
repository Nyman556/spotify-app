export default class AudioPlayer {
    constructor(selector = '.audioPlayer', songs) {
    this.playerElem = document.querySelector(selector);
    this.audio = songs;
    this.addPlayerElements();
    }

    addPlayerElements() {
        this.audioElem = document.createElement('audio');
        const playListElem = document.createElement('div');
        playListElem.classList.add('playlist');
        this.playerElem.appendChild(this.audioElem);
        this.playerElem.appendChild(playListElem);

        this.addPlayListElements(playListElem);
    }

    addPlayListElements(playListElem) {
        this.audio.forEach(audio => {
            const audioItem = document.createElement('a');
            audioItem.href = audio.url;
            audioItem.innerHTML = `<div class="wrapper"><i class="fas fa-play"></i><div class="song-info"><h3>${audio.name}</h3><p>${audio.artist}</p></div></div><span>${audio.duration}</span>`;
            this.setupEventListener(audioItem);
            playListElem.appendChild(audioItem);
        });
    }
    setupEventListener(audioItem) {
        audioItem.addEventListener('click', (e) => {
            e.preventDefault();

            const isCurrentAudio = audioItem.getAttribute('href') === (this.currentAudio && this.currentAudio.getAttribute('href'));
            if (isCurrentAudio && !this.audioElem.paused) {
                this.setPlayIcon(this.currentAudio);
                this.audioElem.pause();
                this.currentAudio.style.background = '';
            } else if (isCurrentAudio && this.audioElem.paused) {
                this.setPauseIcon(this.currentAudio);
                this.audioElem.play();
                this.currentAudio.style.background = 'rgba(36, 14, 19, 0.589)';
            } else {
                this.currentAudio = audioItem;
                this.setPauseIcon(this.currentAudio);
                this.audioElem.src = this.currentAudio.getAttribute('href');
                this.audioElem.play();
                this.currentAudio.style.background = 'rgba(36, 14, 19, 0.589)';
            }
        });
    }

    setPlayIcon(elem) {
        const icon = elem.querySelector('i');
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play')

        const duration = elem.querySelector('span')
        duration.style.color = '';
    }
    
    setPauseIcon(elem) {
        const icon = elem.querySelector('i');
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');

        const duration = elem.querySelector('span')
        duration.style.color = 'green';

        this.currentAudio.style.background = '';
    }
}