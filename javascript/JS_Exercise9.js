function near_100() {
    var x=document.getElementById("value1").value;
    var y=document.getElementById("value2").value;
    var answer=document.getElementById("answer");
    
    if (x != y) {
        x1= Math.abs(x - 100);
        y1= Math.abs(y - 100);
    
        if (x1 < y1) {
            answer.innerHTML=x;
        }
        if (y1 < x1) {
            answer.innerHTML=y;
        }
    }
    else
      answer.innerHTML="false";
  }