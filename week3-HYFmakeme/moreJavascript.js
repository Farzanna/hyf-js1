//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-1 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//1- Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+--+-+ Q-2 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
let colorName = "red";

function colorCar(a) {
  console.log("a " + a + " car");
}
colorCar(colorName);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-3 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

const myObj = {
  firstname: 'Anna',
  lastname: 42,
  id: false
};
// propertyName is what you want
// you can get the value like this: myObject[propertyName]
function printObjectKeysAndValues() {
  for (var propertyName in myObj) {
    console.log(propertyName + " :" + myObj[propertyName]);
  }
}
printObjectKeysAndValues();

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-4 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

let car = {
  color: "red",
  code: 1
};

let motorbike = {
  color: "blue",
  code: 2
};

function vehicleType(colorx, code) {
  if (code == car.code) {
    console.log("a " + colorx + 'car');
  } else if (code == motorbike.code) {
    console.log("a " + colorx + ' motorbike');
  }

}

vehicleType("blue", 2);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-5 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

//Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}

console.log((3 === 3) ? "yes" : "no");

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-6 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

//Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

function vehicleType(colorx, code, age) {
  let usedNew = (age == 0) ? "new" : "used";
  if (code == 2) {

    console.log("a " + colorx + " " + usedNew + ' car');
  } else if (code == 1) {
    console.log("a " + colorx + " " + usedNew + ' motorbike');
  }

}
vehicleType("blue", 2, 3);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-7 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicleList = ['motorbike', 'caravan', 'bike'];

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-8 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//How do you get the third element from that list?
console.log(vehicleList[2]);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-9 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike"

function vehicleType(colorx, code, age) {
  let usedNew = (age == 0) ? "new" : "used";
  if (code == 0) {
    console.log("a " + colorx + " " + usedNew + ' motorbike');
  } else if (code == 1) {
    console.log("a " + colorx + " " + usedNew + ' Caravan');
  } else if (code == 2) {
    console.log("a " + colorx + " " + usedNew + ' bike');
  }

}
vehicleType("green", 2, 0);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-10 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
let vehicleList = ['car', 'motorbike', 'caravan', 'bike'];
var vehicleName = '';
for (i = 1; i < vehicleList.length; i++) {
  if (i < vehicleList.length - 1) {
    vehicleName += ', ' + vehicleList[i] + 's';
  } else {
    vehicleName += ' and ' + vehicleList[i] + 's';
  }
}
console.log("Amazing Joe's Garage, we service " + vehicleList[0] + 's' + vehicleName);


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-11 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?
let vehicleList = ['car', 'motorbike', 'caravan', 'bike'];
vehicleList.push("scooter");
var vehicleName = '';
for (i = 1; i < vehicleList.length; i++) {
  if (i < vehicleList.length - 1) {
    vehicleName += ', ' + vehicleList[i] + 's';
  } else {
    vehicleName += ' and ' + vehicleList[i] + 's.';
  }
}
console.log("Amazing Joe's Garage, we service " + vehicleList[0] + 's' + vehicleName);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-12 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Create an empty object.
var emptyObject = {};


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-13 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Create an object that contains the teachers that you have had so far for the different modules.
var teachers = {
  name: ['Philipp', 'Rob', 'Igor', 'Bonan', 'Nick']
};
console.log(teachers.name[0]);


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-14 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Add a property to the object you just created that contains the languages that they have taught you.

var teachersInfo = {
  name: ['Philipp', 'Rob', 'Igor', 'Bonan', 'Nick'],
  language: ['Html', 'Css', 'CLI', 'Git', 'JavaScript']
}
console.log(teachersInfo.language[0]);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-15 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// Write some code to test two arrays for equality using == and ===. Test the following:

  let x = [1, 2, 3];
  let y = [1, 2, 3];
  let z = y;
// What do you think will happen with x == y, x === y and z == y and z == x? Prove it!
// Don't cheat! Seriously - try it first.
//>> x == y will be false I think > they are not same object
//>> x === y will be false I think > they are not same object
//>> z == y will be true I think > they are same object
//>> z == x will be false I think > they are not same object

console.log(x == y);//false
console.log(x === y);//false
console.log(z == y);//true
console.log(z == x);//false


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-16 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
// Take a look at the following code:
// Show that changing o2 changes o3(or not) and changing o1 changes o3(or not).
//>>yes it will change
let o1 = {
  foo: "bar"
};
console.log(o1);
let o2 = {
  foo: "bar"
};
console.log(o2);
if (o1 === o2) {
  console.log('equal')
} else {
  console.log('Not equal')
}; //Not equal

let o3 = o2;
if (o3 === o2) {
  console.log('equal')
} else {
  console.log('Not equal')
}; //equal

// Does the order that you assign(o3 = o2 or o2 = o3) matter ?

let o2 = o3;
if (o2 === o3) {
  console.log('equal')
} else {
  console.log('Not equal')
};
//SyntaxError: Identifier 'o2' has already been declared
//>>we declared one time o2 and it gets error if we want again declair it


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+ Q-17 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
What does the following code
return ?(And why ? )
let bar = 42;
console.log(typeof bar); //number 
console.log(typeof typeof bar); //string >>>it seems typeof number is string

