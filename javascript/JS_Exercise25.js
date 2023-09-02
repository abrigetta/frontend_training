function firstnotrepeated(){
    var string=document.getElementById("input").value;
    var answer=document.getElementById("answer");
    for(var i=0; i< string.length; i++){
        var char=string[i];
        if(string.indexOf(char)==i && string.indexOf(char,i+1) == -1){
            answer.innerHTML=char;

        }
    }
   answer.innerHTML="none";
}