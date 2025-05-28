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

// ----------------------------------------------------------------------------------------------------------------
function addTwoNum(num: number): number {
    // return "Hello"; // This will cause a TypeError if num is not a number
    return num + 2; // This will work correctly
}
let myValue = addTwoNum(5); 
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
function getValue(myVal: number): boolean | string {
    if(myVal > 5) {
        return true; 
    }
    return "200 OK"; // This will work correctly
}

const getHello = (s: string): string => {
    return "";
} 
// Case 1: This will cause a TypeError if s is not a string
// const heros = ["Thor", "Ironman", "Hulk"];
//     heros.map((hero): string => {
//         return `Hero is ${hero}`;
//         // return 2; // This will cause a TypeError if hero is not a string
// })

// Case 2: This will work correctly if hero is a string
const heros = ["Thor", "Ironman", "Hulk"];
// const heros = [1 , 2, 3]; // This will cause a TypeError if heros is not an array of strings
    heros.map(hero => {
        return `Hero is ${hero}`; // This will work correctly if hero is a string
        // return 2; // This will cause a TypeError if hero is not a string
})

// --------------------------------------------------------------------------------------

function consoleError(errmssg: string): void {
    console.log(errmssg);
} 

function handleError(errmssg: string): never {
     throw new Error(errmssg);
} 