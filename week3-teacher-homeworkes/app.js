//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-question1:Array manipulation +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

//Array manipulation
//Arguement: [5, 3, 2, 9, 19, 20, 3, 5] First, remove both 3 s from the array, then add a 100 to the array.
//Return: Array

let myArray = [5, 3, 2, 9, 19, 20, 3, 5];
let myArrayToDelete = [];
function editArray(myArrayX, objectToDelete, objectToAdd) {
  
  for (i = 0; i < myArrayX.length;) {
    if (myArrayX[i] == objectToDelete) {
      myArrayToDelete.push(i);
    }
    i++;
  }
  console.log("number index to delete: " + myArrayToDelete);

  for (j = 0; j < myArrayToDelete.length;) {
    myArrayX.splice(myArrayToDelete[j] - j, 1);
    j++;
  }
  console.log("new array without 'objectToDelete': " + myArrayX);

  myArrayX.push(objectToAdd);
  console.log("new array with 'objectToAdd' : " + myArrayX);
  return myArrayX;
}
console.log(editArray(myArray, 3, 100));




//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-question2: Object Fun +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-

// Object Fun
// Make an array of pet objects, this pet object should include animal name animal weight animalSound - the animal sound should be a function that console logs the sound the animal makes (meow, moo, oink) loop through the array and print out the animal sound and name
// Return: void (nothing)

let petsName = ["cat", "dog", "bird", "sheep", "hen", "rooster", "cow"];
let petsWeight = ["5kg", "8kg", "0.5kg", "15kg", "2kg", "2kg", "30kg"];
let petsSound = ["mew", "woof", "tweet", "baa", "kokoak", "kykyrky", "moo"];

function getPetInfo(petsNameX, petsSoundX, petsWeightX) {
  for (i = 0; i < petsName.length; i++) {
    console.log(petsNameX[i] +
      ': ' +
      petsSoundX[i] +
      ' ,' +
      petsWeightX[i]);
  }
}
getPetInfo(petsName, petsSound, petsWeight);




//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-question3: String Manipulation +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

// String Manipulation
// Arguement: 'Hello, it is a good day, I eat good bananas, I do not like the word good' remove the word 'good' from the string
// Return: String

let myString = 'Hello, it is a good day, I eat good bananas, I do not like the word good';
let oldChar = /good/gi;
let newChar = "";

function replaceChar(myStringX, oldCharX, newCharX) {
  // let oldCharXAll = /"oldCharX"/gi;
  // console.log (myStringX.replace(oldCharXAll, newCharX))
  let newMyString = myStringX.replace(oldCharX, newCharX);
  return newMyString;
}
console.log(replaceChar(myString, oldChar, newChar));




//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-question4: Conditionals +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-++-+-+-+-

// Write a program that prints out, in reverse order, every multiple of 3 between 1 and 200. output should be 198 195 192 ......

// Return: void (nothing)

let endNum = 200;
let firstNum = 1;
let multipleNum = 3;
let allMultipleResults = [];

function findMultipleNumbs(firstNumX, endNumX, multipleNumX) {

  console.log(allMultipleResults);
  for (i = endNumX; i > firstNumX;) {
    if (i % multipleNumX == 0) {
      allMultipleResults.push(i);
    }
    i--;
  }
  return allMultipleResults;
}
findMultipleNumbs(firstNum, endNum, multipleNum);
console.log(allMultipleResults);
