function getCurrentDate(){
    //let date=new Date().toDateString();
    //document.querySelector('.output').textContent= date;
    let dateobj=new Date();
    let month=String(dateobj.getMonth()+1).padStart(2,'0');
    let day=String(dateobj.getDate()).padStart(2,'0');
    let year=dateobj.getFullYear();
    let output=day+'/'+month+'/'+year;
    document.querySelector('.output').textContent= output;
}