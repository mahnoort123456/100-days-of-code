"use strict";
{ /* Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:

Tests for equality and inequality with strings

Tests using the lower case function

Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

Tests using "and" and "or" operators

Test whether an item is in a array

Test whether an item is not in a array

 */
}
let fruit = 'apple';
console.log("Is fruit == 'apple'? I predict True.");
console.log(fruit == 'apple');
console.log("Is fruit == 'banana'? I predict False.");
console.log(fruit == 'banana');
let city = 'Karachi';
console.log("Is city.toLowerCase() == 'karachi'? I predict True.");
console.log(city.toLowerCase() == 'karachi');
console.log("Is city.toLowerCase() == 'lahore'? I predict False.");
console.log(city.toLowerCase() == 'lahore');
let personAge = 25;
console.log("Is age == 25? I predict True.");
console.log(personAge == 25);
console.log("Is age != 30? I predict True.");
console.log(personAge != 30);
console.log("Is age > 30? I predict False.");
console.log(personAge > 30);
console.log("Is age < 30? I predict True.");
console.log(personAge < 30);
console.log("Is age >= 25? I predict True.");
console.log(personAge >= 25);
console.log("Is age <= 20? I predict False.");
console.log(personAge <= 20);
let score = 85;
console.log("Is score > 80 and score < 90? I predict True.");
console.log(score > 80 && score < 90);
console.log("Is score < 80 or score > 90? I predict False.");
console.log(score < 80 || score > 90);
let cars = ['toyota', 'honda', 'subaru'];
console.log("Is 'honda' in the cars array? I predict True.");
console.log(cars.includes('honda'));
console.log("Is 'BMW' in the cars array? I predict False.");
console.log(cars.includes('BMW'));
let animals = ['cat', 'dog', 'rabbit'];
console.log("Is 'lion' not in the animals array? I predict True.");
console.log(!animals.includes('lion'));
console.log("Is 'cat' not in the animals array? I predict False.");
console.log(!animals.includes('cat'));
