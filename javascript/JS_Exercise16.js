function checkleapyear(){
    const year=document.getElementById("input").value;
    const answer=document.getElementById("answer");
    
    if((year % 4 == 0)){
        answer.innerHTML=" is a leap year";
    }else{
        answer.innerHTML="is not a leap year";
    }
}