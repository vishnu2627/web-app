var car = null;
var timer = null;

function init(){
    car = document.getElementById('car');
    car.style.position = 'relative';
    car.style.left = '5px';
}

function move(){
    if (parseInt(car.style.left) > 1150) {
        document.getElementById('danger').style.visibility = "visible";
        clearTimeout(timer);
    }
    else{
        car.style.left = parseInt(car.style.left) + 2 +'px';
        timer = setTimeout(move, 10);
    } 
}

function stop(){
    clearTimeout(timer);
}

function reset(){
    document.getElementById('danger').style.visibility = "hidden";
    car.style.left = '5px';
}
