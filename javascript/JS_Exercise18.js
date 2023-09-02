function csv_2Darray(){
    var name1="abc\ndef\nghi";
    var name2="jkl\nmno\npqr";
    var name3="stu\nvwx\nyza";
    var arrnames1=name1.split(",");
    var arrnames1=name1.split("\n");
    var arrnames2=name2.split(",");
    var arrnames2=name2.split("\n");
    var arrnames3=name3.split(",");
    var arrnames3=name3.split("\n");
    console.log(arrnames1);
    console.log(arrnames2);
    console.log(arrnames3);
}
/*const csv_2Darray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));

console.log(csv_2Darray('a,b\nc,d')); 
console.log(csv_2Darray('a;b\nc;d', ';')); 
console.log(csv_2Darray('head1,head2\na,b\nc,d', ',', true));*/
