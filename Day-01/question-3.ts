/** Question 3
 * Name Cases: Store a person’s name in a variable, and then print that person’s name
 *  in lowercase, uppercase, and titlecase. */

let nameCases :string = "Mahnoor";
console.log(nameCases.toLowerCase());
console.log(nameCases.charAt(0).toUpperCase() + nameCases.slice(1).toLowerCase())
console.log(nameCases.toUpperCase());