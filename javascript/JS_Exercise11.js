//function even_digits(){

  //const numbers = document.getElementById("value1").value;//[7, 10, 15, 8, 13, 18, 6]; 
  //const answer=document.getElementById("answer").value;
  //const evens = numbers.filter((num) => num % 2 === 0);
  //answer.innerHTML=evens; 
//}
function isEven() {
    const arr = document.getElementById("value1").value;
    const answer=document.getElementById("answer");
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
            answer.innerHTML=count;
            
        }        

    }  
          
}  
