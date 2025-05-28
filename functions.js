"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num) {
// num.toUpperCase(); // This will cause a TypeError if num is not a string
function addTwo(num) {
    // num.toUpperCase(); // This will cause a TypeError if num is not a string
    // return num + 2;
    return "Hello"; // This will cause a TypeError if num is not a number
}
// addTwo("5"); // This will cause a TypeError at runtime
var myVal = addTwo(5); // This will work correctly
console.log(myVal);
// function getUpper(val){
function getUpper(val) {
    return val.toUpperCase();
}
// getUpper(4); // This will cause a TypeError at runtime
getUpper("Mukul"); // This will work correctly
// function signUpUser(name, email, password) {
function signUpUser(name, email, isPaid) {
}
var isLoggedIn = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// signUpUser(1, 2, 3); // This will work but is not type-safe
signUpUser("Mukul", "mukul.codingworkx@gmail.com", true); // This will work correctly
isLoggedIn("Karnwal", "mukul@gmail.com");
// Conclusion -> In case of variables using type annotations is optional, but in case of functions it is recommended to use type annotations to avoid runtime errors.
// ----------------------------------------------------------------------------------------------------------------
function addTwoNum(num) {
    // return "Hello"; // This will cause a TypeError if num is not a number
    return num + 2; // This will work correctly
}
var myValue = addTwoNum(5);
console.log(myValue);
// Case 1:
// function getValue(myVal: number): boolean{
//     if(myVal > 5) {
//         return true; 
//     }
//     return "200 OK"; // This will cause a TypeError if myVal is not a number
// }
// Case 2:
// function getValue(myVal: number): string{
//     if(myVal > 5) {
//         return true;  // This will cause a TypeError if myVal is not a number
//     }
//     return "200 OK";
// }
// Case 3: this is the correct way to handle multiple return types
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 OK"; // This will work correctly
}
var getHello = function (s) {
    return "";
};
// Case 1: This will cause a TypeError if s is not a string
// const heros = ["Thor", "Ironman", "Hulk"];
//     heros.map((hero): string => {
//         return `Hero is ${hero}`;
//         // return 2; // This will cause a TypeError if hero is not a string
// })
// Case 2: This will work correctly if hero is a string
var heros = ["Thor", "Ironman", "Hulk"];
// const heros = [1 , 2, 3]; // This will cause a TypeError if heros is not an array of strings
heros.map(function (hero) {
    return "Hero is ".concat(hero); // This will work correctly if hero is a string
    // return 2; // This will cause a TypeError if hero is not a string
});
// --------------------------------------------------------------------------------------
function consoleError(errmssg) {
    console.log(errmssg);
}
function handleError(errmssg) {
    throw new Error(errmssg);
}
