function addstring()
{
  let str=document.getElementById("input").value;
  let answer=document.getElementById("answer");
  const replaced='$'+str.substring(1);
  answer.innerHTML=replaced;

}


