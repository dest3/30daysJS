const checkboxes =document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e){
    //comprueba si se tiene la tecla shift apretada
    //y comprueba si se esta checkeando el componente 
    let inBetween= false;
    if(e.shiftKey && this.checked){
        //recorre cada checkbox
        checkboxes.forEach(checkbox=>{
            console.log(checkbox);
            if(checkbox === this || checkbox=== lastChecked){
                inBetween = !inBetween;
                console.log('comprobando los checks intermedios');
            }
            
            if (inBetween) {
                checkbox.checked=true//marca chekeado todos los checkbox en el medio
            }
        });
    }

    lastChecked=this
}


checkboxes.forEach(checkboxes => checkboxes.addEventListener('click', handleCheck));