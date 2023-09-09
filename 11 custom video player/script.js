//obtenemos los elementos 

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const rangers = player.querySelectorAll('.player__slider');

//construimos funciones

function togglePlay(){//pausa y reproduce el video 
    if(video.paused){
        video.play();
    }else{
        video.pause() ;
    }
}

function updateButton(){//esta funcion actualiza el boton de play y pausa dependiendo del estado del video
    const icon = this.paused ? '▶' : '▐▐';
    toggle.textContent=icon;
}

function skip(){//esta funcion actualiza el video cuando se presionan los botones de skip
    video.currentTime += parseFloat(this.dataset.skip);
}

function rangeUpdate(){//esta funcion actualiza los controladores de rango como el volumen y la velocidad
    video[this.name]=this.value;
}

function handleProgres(){//actualiza la barra de progreso del video dependiendo de cuanto falte para que termine el video 
    const percent=(video.currentTime / video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {//actualiza el video cuando se hace click y se arrastra la barra de progreso 
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    console.log(e);
}


//configuracion de eventos
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgres);
toggle.addEventListener('click',togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip))
rangers.forEach(Range => Range.addEventListener('change', rangeUpdate))
rangers.forEach(Range => Range.addEventListener('mousemove', rangeUpdate))

let mousedown = false;

progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e)=> {
    if(mousedown){
        scrub(e);
    }
})
progress.addEventListener('mousedown', ()=>mousedown=true);
progress.addEventListener('mouseup', ()=>mousedown=false);
