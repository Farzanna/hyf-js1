//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-1 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//1- Create a function that takes 3 arguments and returns the sum of the these arguments.
function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1, 2, 3));

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-2 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Create a function named colorCar that receives a color, and prints out, 'a red car' for example.
let colorName = "red";

function colorCar(a) {
  console.log("a " + a + " car");
}
colorCar(colorName);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-3 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
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

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-4 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
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

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-5 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

//Can you write the following without the if statement, but with just as a single line with console.log(...);?
if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}

console.log((3 === 3) ? "yes" : "no");

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-6 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

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

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-7 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.
let vehicleList = ['motorbike', 'caravan', 'bike'];

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-8 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
//How do you get the third element from that list?
console.log(vehicleList[2]);

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-9 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
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

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+- Q-10 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
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
