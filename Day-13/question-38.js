"use strict";
function describe_City(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_City("Karachi");
describe_City("Islamabad");
describe_City("Tokyo", "Japan");
