"use strict";
/** Question 16 - More Guests: You just found a bigger dinner table, so now more space is available.
 * Think of three more guests to invite to dinner:

Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

Add one new guest to the beginning of your array.

Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

Print a new set of invitation messages, one for each person in your list. */
console.log("Fantastic news! I've secured a larger dining table!");
let guest = ["Nabiya", "Esha", "Sheeza", "Anumta", "Wafia", "Sitara"];
guest.push("Mahpara");
guest.unshift("Nantaara");
guest.splice(guest.length / 3, 1, "Mano");
guest.forEach((guest) => {
    console.log(`We have dinner tonight, and I would like to invite ${guest}. Would you like to come?`);
});
