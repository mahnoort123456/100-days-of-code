/** Question 14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner. */

let guest:string[]=["Nabiya","Esha","Sheeza","Anumta","Wafia","Ushneha"];
guest.forEach(guest=>{
    console.log(`We have dinner tonight, and I would like to invite ${guest}. Would you like to come?`)
})