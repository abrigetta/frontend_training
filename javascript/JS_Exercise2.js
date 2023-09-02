//const filename="sun.png";
//console.log(filename.split(".").pop());
let file=document.getElementById("myfile");
let message=document.getElementById("message");
file.addEventListener("input", () => {
if(file.files.length){
    let fileExtension=file.files[0].name.split(".").pop();
    message.innerHTML=fileExtension;

}
else{
message.innerHTML="Please select the file";
}


});