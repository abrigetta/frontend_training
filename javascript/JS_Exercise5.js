function addstring()
{
  let str=document.getElementById("input").value;
  let answer=document.getElementById("answer");

  if (str.startsWith("New!")||str.startsWith("new!")||str.startsWith("NEW!"))
   {
   answer.innerHTML= str;
 }
   else
     answer.innerHTML="New!"+str;
 }

