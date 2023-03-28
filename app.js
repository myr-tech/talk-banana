
var btnTranslate = document.querySelector("#btn-translate");
var textinput = document.querySelector("#text-input");

console.log(textinput)

function clickHandler(){
    console.log("clicked.!");
    console.log("input",textinput.value);
};
btnTranslate.addEventListener("click",clickHandler)