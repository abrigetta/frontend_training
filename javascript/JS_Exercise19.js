function generatecolor(){
    var randomColor=(Math.floor(Math.random()*16777216)).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor="#" + randomColor;
    var code=document.getElementById("colorcode");
    code.innerText="#" + randomColor;
}