var input = document.querySelector('#userinput');
var enter = document.querySelector('#enter');
var ul = document.querySelector('ul');

function inputLength() {
   return input.value.length;
}

function createListElement() {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';

}

function afterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function afterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode == 13) {
        createListElement();
    }
}
enter.addEventListener('click', afterClick);

input.addEventListener('keypress', afterKeyPress);