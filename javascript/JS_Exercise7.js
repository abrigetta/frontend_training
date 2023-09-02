function extract_halfstring(){
    let str=document.getElementById("input").value;
    let answer=document.getElementById("answer");
    if(str.length%2==0){ 
        answer.innerHTML= str.slice(0,str.length/2);
    }else
    answer.innerHTML= str;

}