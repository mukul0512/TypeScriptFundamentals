"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function addTwo(num) {
// num.toUpperCase(); // This will cause a TypeError if num is not a string
function addTwo(num) {
    // num.toUpperCase(); // This will cause a TypeError if num is not a string
    return num + 2;
}
// addTwo("5"); // This will cause a TypeError at runtime
addTwo(5); // This will work correctly
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
