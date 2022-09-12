var car = null;
var timer = null;

function init(){
    car = document.getElementById('car');
    car.style.position = 'relative';
    car.style.left = '5px';
}
function move(){
    car.style.left = parseInt(car.style.left)+10+"px";
    timer = setTimeout(move,100);
}
function stop(){
    clearTimeout(timer);
}
function reset(){
    set = init()
}
