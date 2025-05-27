let greetings: string = "Hello, Mukul";
console.log(greetings);
// greetings = 7; // This will cause a type error in TypeScript
// greetings = true; // This will also cause a type error in TypeScript
greetings = "Hello, Mukul! How are you today?";
let replaceGreetings = greetings.replace("Mukul", "Krishna Sir");
console.log(replaceGreetings);
let splitGreetings = greetings.split(" ");
console.log(splitGreetings);
//  here all the methods we can able to access for string type only.

// ----------------------------------------------------------------------------------

let myNum = 7;
// myNum.toUpperCase(); // This will cause a type error in TypeScript
myNum.valueOf(); 
myNum.toString(myNum); 

// Note : -> TypeScript is a superset of JavaScript, so it allows you to use all JavaScript features while adding static typing. This means you can catch type-related errors at compile time rather than at runtime, which can help prevent bugs in your code.

// Conclusion -> In TypeScript, variables can be declared with specific types, and you can use methods that are appropriate for those types. If you try to use a method that doesn't exist for a particular type, TypeScript will give you an error at compile time, helping you catch potential issues early in the development process.

