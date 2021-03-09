const myCodeImmersivesObj = {
  objectify: 'me'
};

// Set the value of property `objectify` to be "yourself".
myCodeImmersivesObj.objectify = 'yourself';
console.log(myCodeImmersivesObj);


// Add the new property `isAnExcellentObject` and set it to `true`.
myCodeImmersivesObj.isAnExcellentObject = 'true';
console.log(myCodeImmersivesObj);


// Add the property `term` and set it to 1.
myCodeImmersivesObj.term = 1;
console.log(myCodeImmersivesObj);


// Now add 1 to the value of your object's `term` property and put that new value back in your object's `term`.
myCodeImmersivesObj.term = myCodeImmersivesObj.term + 1;
// myCodeImmersivesObj.term += 1;
// myCodeImmersivesObj.term++;
console.log(myCodeImmersivesObj);


// Now add a new property called `currentScore` and set it to 3.
myCodeImmersivesObj.currentScore = 3;
console.log(myCodeImmersivesObj);


// Now add a new property called `cumulativeScore` and set it to 50.
myCodeImmersivesObj.cumulativeScore = 50;
console.log(myCodeImmersivesObj);


// Now add your `currentScore` and your `cumulativeScore` and put it back in `cumulativeScore`.
myCodeImmersivesObj.cumulativeScore = myCodeImmersivesObj.cumulativeScore + myCodeImmersivesObj.currentScore
console.log(myCodeImmersivesObj);


// Now add a property called `I am exactly this cool` (you'll need bracket notation!) and set it to `soooooo cool`.
myCodeImmersivesObj['I am exactly this cool'] = 'soooooo cool';
console.log(myCodeImmersivesObj);

// Now make a new EMPTY object that represents yourself.
const mySelf = {

};
console.log(mySelf);
// Add a `firstName` property and set it to a string.
mySelf.firstName = 'Sonny',
console.log(mySelf); 


// Add a `lastName` property and set it to a string.
mySelf.lastName = 'Valenzuela',
console.log(mySelf);

// Add a `fullName` property and set it to the name properties put together with a space string in the middle.
mySelf.fullName = mySelf.firstName + ' ' + mySelf.lastName;
console.log(mySelf.fullName);

// Add an `age` property and set it to a number.
mySelf.age = '34';
console.log(mySelf);


// Add an address property and set it to an empty array.
// square brackets for array
mySelf.address = [];


// Now push three strings into that array.
mySelf.address.push('programmer')
mySelf.address.push('investor')
mySelf.address.push('italiano')
console.log(mySelf);
console.log(mySelf.address);
// // Now make a new object, but this time we'll pre-populate it, not set it in any lines below it. In other words, the properties should be set the same way I initially set the `codeImmersivesObject` on line 1. It can be called whatever you want and can have whatever properties you want, as long as they include at least one string value, boolean value, number value, and array of numbers. The important thing here is: this should all be done within the brackets of the object, not below the place where the object is declared.

const dinosaur = {
  species: 'T - Rex',
  extinct: true,
  teeth: 1000,
  weight: '10,000',
  foods: [
    'Triceratops',
    'Stegosaurus',
    'Pteranodon',
  ],
}
console.log(dinosaur);
// // As a stretch goal, pre-populate the object with at least one property using bracket notation as well. 
dinosaur['height'] = '60 feet';

console.log(dinosaur);