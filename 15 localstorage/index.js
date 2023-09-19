const addItems = document.querySelector('.add-items'); //obtiene el input del user en el form
const itemsList = document.querySelector('.plates');//obtiene el div donde se cargara el input
const items = JSON.parse(localStorage.getItem('items')) || [];//guarda en arreglo

function addItem(e){//agrega el imput al arreglo cuando el user presiona "enviar"
    e.preventDefault();//previene que la pagina se recargue
    const text = (this.querySelector('[name=item]')).value;//crea la constante text para almacenar el valor name de item 
    const item = {//crea y da formato a item
        text    : text,
        done    : false
    };

    items.push(item)//agrega el imput al arreglo
    populateList(items, itemsList);//lama a funcion
    localStorage.setItem('items',JSON.stringify(items))
    this.reset();//resetea el input del user para poder almacenaer el siguiente
}


function populateList(plates = [], platesList){//obtiene el arreglo de platos y renderisa en html el plato solicitado 
    platesList.innerHTML = plates.map((plate, i) =>{
        return`
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked': ''}/> 
                <label for = "item${i}">${plate.text}</label>
            </li>
        `;//este codigo renderiza el input en pantalla y le agrega un checkbox con el atributo check solo si este es checkeado
    }).join('');

}

// Delegación de evento: Escucha los clics en la lista de elementos
function toggleDone(e) {
    if (!e.target.matches('input')) return; // No hace nada a menos que el destino sea un input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList)