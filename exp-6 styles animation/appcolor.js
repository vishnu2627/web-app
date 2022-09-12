function change(){
    var div = document.getElementById('box');
    var bgcolor = document.getElementById('bgcolor').value;
    div.style.backgroundColor = bgcolor;

    var color = document.getElementById('textcolor').value;
    div.style.color = color;

    var size = document.getElementById('textsize').value;
    div.style.fontSize = size + "px";

    var width = document.getElementById('width').value;
    div.style.width = width + "px";

    var height = document.getElementById('height').value;
    div.style.height = height + "px";

}
function borderRadius(){
    var div = document.getElementById('box');
    var radius = document.getElementById('myslider').value;
    div.style.borderRadius = radius + 'px';
}
