function max_even() {
    var arr=document.getElementById("array").value;
    const answer=document.getElementById("answer");
    const arrval=arr.split(",");
    var temp = 0;
  for(var i=0;i<arrval.length;i++){
    if(arrval[i]%2==0) {
      if(Number(arrval[i]) > Number(temp)) {
        temp = arrval[i];  
      }
    }
  }
  document.getElementById("answer").innerHTML=temp;
}