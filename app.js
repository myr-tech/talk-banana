
var btnTranslate = document.querySelector("#btn-translate");
var textinput = document.querySelector("#text-input");
var outputDiv=document.querySelector("#output");

//outputDiv.innertext="mayur"
//console.log(outputDiv)
function clickHandler(){
    outputDiv.innerText="asasasashi"+ textinput.value;
    
    
    //console.log("clicked.!");
    //console.log("input",textinput.value);
};
btnTranslate.addEventListener("click",clickHandler)