/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = Number("5") - 2; // explicitly converts the string "5" to the number 5, resulting in a clear numerical subtraction.
console.log("The result is: " + result);

let isValid = Boolean(false); // Boolean(false) explicitly creates the boolean value false, making isValid false and preventing the if statement from running.
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // explicitly converts the string "25" to the number 25 so that 5 can be added mathmatically instead of being concatenated as text.
console.log("Total Age: " + totalAge);

let daysRemaining = null + 3; // JavaScript implicitly converts null to 0, so the result is the number 3.
console.log(daysRemaining);
console.log(typeof null); // object
console.log(typeof daysRemaining); // number

let routeNumber = 66;
console.log(routeNumber); 
console.log(typeof routeNumber); // number

let motherRoad = String(routeNumber); // JavaScript explicitly converts the number 66 into the string "66".
console.log(motherRoad);
console.log(typeof motherRoad); // string

