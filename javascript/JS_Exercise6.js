function front_back3()
{
  let str=document.getElementById("input").value;
  let answer=document.getElementById("answer");

  if (str.length>=3)
   {
    back = str.substring(str.length-3);
   answer.innerHTML= back + str + back;
 }
   else
     answer.innerHTML="false";
 }
// function abc()
 //{
//console.log(front_back3("abc"));
//console.log(front_back3("ab"));
//console.log(front_back3("abcd"));
 //}