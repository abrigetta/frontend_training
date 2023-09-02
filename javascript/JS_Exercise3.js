function letterchange(str){
    return str.replace(/[a-zA-Z]/g, function(x){
        return String.fromCharCode(x.charCodeAt(0)+1);
    }
    );
}
console.log(letterchange("abc"));
console.log(letterchange("Hello"));
console.log(letterchange("Brigetta"));
console.log(letterchange("Kavin"));
console.log(letterchange("Arun"));


