// function addTwo(num) {
    // num.toUpperCase(); // This will cause a TypeError if num is not a string
function addTwo(num: number) {
    // num.toUpperCase(); // This will cause a TypeError if num is not a string
    // return num + 2;
    return "Hello"; // This will cause a TypeError if num is not a number
}
// addTwo("5"); // This will cause a TypeError at runtime
let myVal = addTwo(5); // This will work correctly
console.log(myVal);

// function getUpper(val){
function getUpper(val: string){
    return val.toUpperCase();
}
// getUpper(4); // This will cause a TypeError at runtime
getUpper("Mukul"); // This will work correctly

// function signUpUser(name, email, password) {
function signUpUser(name: string, email: string, isPaid: boolean) {

}

let isLoggedIn = (name: string, email: string, isPaid: boolean = false) => {
}

// signUpUser(1, 2, 3); // This will work but is not type-safe
signUpUser("Mukul", "mukul.codingworkx@gmail.com", true); // This will work correctly
isLoggedIn("Karnwal", "mukul@gmail.com");

export {};

// Conclusion -> In case of variables using type annotations is optional, but in case of functions it is recommended to use type annotations to avoid runtime errors.
