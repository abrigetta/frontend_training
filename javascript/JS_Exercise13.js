
function AscendingOrder(){
    var arr=document.getElementById("array").value;
    const arrval=arr.split(",");
    console.log(arrval);
    //console.log(arrVal[1]);
    var answer=document.getElementById("answer");
    for(var i= 0; i < arrval.length;i++) {
        console.log("arrval: " + arrval[i]);
        if(arrval[i] > arrval[i+1]) {
            console.log("In if");
            document.getElementById("answer").innerHTML="false";
            return;
        } else {
            console.log("In Else");
            document.getElementById("answer").innerHTML="true";
        }
    }
}
