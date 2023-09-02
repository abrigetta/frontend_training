/*function alphaorder(){
    const string=promt("Enter the string:");
    const words=string.split('');
    words.sort();
    console.log("The sorted word is:");
    for(const element of words){
        console.log(element);
    }
}*/
 function alphaorder(){
    const string=document.getElementById("value1").value;
    const answer=document.getElementById("answer");
    const arr=string.split('');
    arr.sort();
    answer.innerHTML=arr.join('');
 }
