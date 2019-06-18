let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
console.log(favoriteAnimals);
favoriteAnimals.push('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log(
  'I think the value of array will be : /["blowfish", "meerkat", "capricorn", "giraffe", "turtle"/] ',
);
console.log(favoriteAnimals);
console.log(favoriteAnimals.length);
console.log('The length of array is = ' + favoriteAnimals.length);
let posGiraffe = 3;
favoriteAnimals.splice(posGiraffe, 1);
console.log(favoriteAnimals);
console.log(favoriteAnimals.indexOf('meerkat'));
let posMeerkat = favoriteAnimals.indexOf('meerkat');
console.log('The item you are looking for is at index: ' + posMeerkat);

//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
