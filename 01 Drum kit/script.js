
        
        function playsound(e){
            
            const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
            const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            if (!audio)return//si no encuentra audio asociado a la tecla detiene la funcion
            audio.currentTime =0;//resetea el tiempo del audio
            audio.play();//reproduce el audio
            key.classList.add('playing');
            
        }
        
        function removeTransition(e){
            if(e.propertyName !== 'transform') return; //termina si no es un evento transform
            this.classList.remove('playing')
        }

        const keys = document.querySelectorAll('.key');
        keys.forEach(key => key.addEventListener('transitionend', removeTransition));
        
        window.addEventListener('keydown',playsound );
    