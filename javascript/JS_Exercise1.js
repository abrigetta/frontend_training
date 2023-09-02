function addNum(){
    var val1=parseInt(document.getElementById("value1").value);
    var val2=parseInt(document.getElementById("value2").value);
    var ansD=document.getElementById("answer");
    ansD.innerHTML=val1+val2;

if(val1==100 || val2==100){
    ansD.innerHTML= "true";
}else if(val1+val2==100){
    ansD.innerHTML= "true";
}else{
    ansD.innerHTML="false"
}
}