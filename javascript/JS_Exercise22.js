function countvowels(){
    const str1=document.getElementById("value1").value;
    const answer=document.getElementById("answer");
    count=0;
    const string=str1.toString();
    for(var i=0;i<=string.length-1;i++){
        if(string.charAt(i)=="a" || string.charAt(i)=="e" || string.charAt(i)=="i" || string.charAt(i)=="o" || string.charAt(i)=="u" || string.charAt(i)=="A" || string.charAt(i)=="E" || string.charAt(i)=="I" || string.charAt(i)=="O" || string.charAt(i)=="U"){
         count += 1;
        }
    }
    answer.innerHTML=count;
}
