var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var css = document.querySelector('.css');
var body = document.querySelector('.gradient');

function setGradientColor() {
    body.style.background = "linear-gradient( to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + "";
    console.log(css.textContent);
    var input = document.createElement("input");
    input.setAttribute('type', 'text');
    input.setAttribute('value', css.textContent);
    body.appendChild(input);
}

color1.addEventListener('input', setGradientColor);
color2.addEventListener('input', setGradientColor);
