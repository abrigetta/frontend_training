function countString() {
    let count = 0;
    let str=document.getElementById("value1").value;
    let letter=document.getElementById("value2").value;
    let answer=document.getElementById("answer");
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    answer.innerHTML=count;
}

