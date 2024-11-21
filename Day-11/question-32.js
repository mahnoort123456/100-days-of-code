"use strict";
let currentUsers = ["ADMIN", "Mahnoor", "Anumta", "Nabiya", "Ushneha"];
let newUsers = ["Ayan", "Hamza", "Talha", "Fahad", "Faraz"];
newUsers.forEach((newUsers) => {
    if (currentUsers.some((currentUsers) => currentUsers.toLowerCase() === newUsers.toLowerCase())) {
        console.log(`${newUsers} will need to enter a new username.`);
    }
    else {
        console.log(`${newUsers} is available.`);
    }
});
