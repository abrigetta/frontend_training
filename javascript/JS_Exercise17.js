function objprop(){
    const output=document.getElementById("output"); 
    const objA={a:1,b:1,c:1};
    const objB={a:1,b:1,c:1};
    const objC={a:1,b:1,d:1};
    if(objA.a === objB.a && objA.c === objC.c){
        output.innerHTML="matched";
    }else{
        output.innerHTML="mismatched";
    }
}