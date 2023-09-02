/*function extractuniquechar(){
    var string= document.getElementById("input").value;
    var answer= document.getElementById("answer");
    let unique= "";
    for(var i=0; i<string.length;i++){
        if(unique.includes(string[i]==false)){
            unique +=string[i];
        }
    }
    answer.innerHTML=unique;
}*/
function extractuniquechar(){
    var string= document.getElementById("input").value;
    var answer= document.getElementById("answer");

    let string1=string.split("");
    string1=new Set(string1);
    string1=[...string1].join("");
    answer.innerHTML=string1;

}