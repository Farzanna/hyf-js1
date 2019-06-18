let myString = "hello,this,is,a,difficult,to,read,sentence";
var re = /,/gi;
console.log(myString);
console.log(myString.length);
myString.replace(re, " ")
console.log(myString.replace(re, " "));