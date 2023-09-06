//obtenemos los elementos 

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const rangers = player.querySelectorAll('.player__slider');

//construimos funciones

function togglePlay(){
    if(video.paused){
        video.play();
    }else{
        video.pause() ;
    }
}

function updateButton(){
    const icon = this.pause ? '▶' : '▐▐';
    toggle.textContent=icon;
}

//configuracion de eventos
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);
