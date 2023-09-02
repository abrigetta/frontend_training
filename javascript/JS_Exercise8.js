function addingstring() {
    let str1=document.getElementById("String1").value;
    let str2=document.getElementById("String2").value;
    let answer=document.getElementById("answer");
    str1 = str1. substring(1, str1. length);
    str2 = str2. substring(1, str2. length);
    answer.innerHTML=str1 + str2;
}