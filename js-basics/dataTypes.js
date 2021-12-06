 // Data types 

 // Data types are split into two different kinds: Primitive Data types & Reference Types
 // In JavaScript the primitive data types are: string, number(integer), bigint(int = integer), boolean, undefined, symbol, and null.


 // String Literal (String)
 let pet = 'cat';

 // Number Literal 
 let lapTime = 4; // Number Literal
 console.log(typeof lapTime);
 // In JavaScript all numbers are numbers, unlike many other languages where you would have a different data type for floating point number etc.
 lapTime = 4.06;
 console.log(typeof lapTime);

 // boolean
 let isHungry = false; // Boolean Literal

 // Undefined
 let middleName; // undefined 
 // You can also declare a varible as unsigned but it is uncommon practice.
 let gender = undefined; // :D
 console.log(gender);
 // Fun note: Both the data type and value of the middleName variable as well as the gender variable, is undefined:
 console.log(gender);
 console.log(typeof gender);
 
 // null
 let currentScore = null;
 console.log(typeof currentScore);
 
 // Example for how null could be used:
 
 // Default value/ users has not decided yet.
 let selectedColor = null;
 console.log(selectedColor);

 // User selects color.
 selectedColor = 'red';
 console.log(selectedColor);

 // User deselects color.
 selectedColor = null;
 console.log(selectedColor);

