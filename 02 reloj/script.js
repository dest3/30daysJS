
    
    const segundero = document.querySelector('.p-segundos');
    const minutero = document.querySelector('.p-minutos');
    const hora = document.querySelector('.p-hora');

    function setDate(){
        const now = new Date();
        const second = now.getSeconds();
        const secondAngle = ((second/60) * 360)+90; 
        segundero.style.transform = `rotate(${secondAngle}deg)`;
        
        const min = now.getMinutes();
        const mintAngle = ((min / 60) * 360) + 90;
        minutero.style.transform = `rotate(${mintAngle}deg)`;
        
        const hour = now.getHours();
        const hourAngle = ((hour/12)*360)+90;
        hora.style.transform = `rotate(${hourAngle}deg)`;

        if (secondAngle == 444) {
            console.log('hola')
            
        }
    }

    setInterval(setDate, 1000);



