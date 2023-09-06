const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle= '#BADA55';
ctx.LineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth =0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
    if(!isDrawing)return;//esto para la funcion cuando no se esta "dibujando"
    console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;        
    ctx.beginPath();//empieza desde
    ctx.moveTo(lastX,lastY);//ir a
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX, e.offsetY];//crea y asigna valor a dos variables al mismo tiempo.
    hue++;
    if (hue > 360){
        hue=0;
    }
    
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if (direction){
        ctx.lineWidth++;
    }else{
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousemove', draw);//captura el movimiento del mouse 
canvas.addEventListener('mousedown', (e)=>{
    isDrawing=true;
    [lastX,lastY] = [e.offsetX, e.offsetY]
} )//captura cuando hace click
canvas.addEventListener('mouseout', (e) => {
    isDrawing=false;
    width=0;
})//deja de dibujar cuando el mause deja el canvas
canvas.addEventListener('mouseup' ,(e) => {
    isDrawing =false;
    width=0;
}); //deja de dibujar cuando deja de hacer click
