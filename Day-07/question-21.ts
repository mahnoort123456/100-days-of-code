{/* Question 21 
 They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items. */}



let MathBook:{
    title:string;
    author:string;
    yearPublished:number;
} ={
    title:"Mathematics 9th Grade",
    author:"Prof. Mushtaq Ahmed",
    yearPublished:2020
}

let PhysicsBook:{
    title:string;
    author:string;
    yearPublished:number;
} ={
    title: "Physics 9th Grade",
    author: "Prof. Muhammad Ali Malik",
    yearPublished: 2020,
};

let ChemistryBook: {
    title:string;
    author:string;
    yearPublished:number;
} = {
    title: "Chemistry 9th Grade",
    author: "Dr. Syed Asim Hussain",
    yearPublished: 2020,
};

console.log(`Book Info: ${MathBook.title} by ${MathBook.author}, published in ${MathBook.yearPublished}`);
console.log(`Book Info: ${PhysicsBook.title} by ${PhysicsBook.author}, published in ${PhysicsBook.yearPublished}`);
console.log(`Book Info: ${ChemistryBook.title} by ${ChemistryBook.author}, published in ${ChemistryBook.yearPublished}`);