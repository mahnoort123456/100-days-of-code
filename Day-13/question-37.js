"use strict";
function make_Shirt(size = "large", message = "I LOVE TYPESCRIPT") {
    console.log(`Making a ${size} t-shirt with the message ${message} printed on it.`);
}
make_Shirt();
make_Shirt("medium");
make_Shirt("small", "Drive into Coding");
