let myString = "hello,this,is,a,difficult,to,read,sentence";
const re = /,/g;
console.log(myString);
console.log(myString.length);
myString.replace(re, " ")
console.log(myString.replace(re, " "));
