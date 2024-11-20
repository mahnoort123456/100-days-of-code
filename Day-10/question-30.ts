let userNames : string[] = ["Admin" , "Mahnoor" , "Anumta" , "Nabiya" , "Esha" , "Ushneha"];

userNames.forEach((userName) => {
    if(userName == "Admin"){
        console.log("Hello ADMIN! would you like to see a status report?");
    }else{
        console.log(`Hello ${userName}, thank you for loggin in again.`);
    }
});