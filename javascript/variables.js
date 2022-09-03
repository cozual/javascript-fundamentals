// VARIABLES
// JavaScript works with information
// 1. An online shop might need javascript for goods being sold and shopping cart

// A VARIABLE
// A variable is a "named storage" for data. We can use them to store goodies, visitors, and other data.
let message;
// We can put some data into it by using assignment operator =
message = "Hello World!"; // store the string 'Hello!' in the variable named message
// We can now acess it using the variable name
console.log(message);
// To be concise combine the variable declaration and assignment into a single line!
let introduction = "Hello I'm Nelly!";
console.log(introduction);
// We can also declare multiple variables in one line but this is not recommended for the sake of readability
let user = "Nelson",
  age = 21,
  favoriteColor = "Purple";
// Instead use multiple lines
let userFix = "Nelson";
let ageFix = 21;
let favoriteColorFix = "Purple";

// A REAL-LIFE ANALOGY
// We can easily grasp the concept of a "variable" if we imagine it as a "box" for data, with a uniquely-named sticker on it
// The variable message can be imagined as a box labeled "message" with the value "Hello!" in it:
// We can put any value in the box and also change it as many times as we want
let messageA;
messageA = "Hello!";
messageA = "World!"; // value changed
console.log(messageA);
// When the value is changed, the old data is removed from the variable
// We can also declare two variables and copy data from one into the other
let hello = "Copied Variable";
let messageB;
// copy "Hello World!" from hello into messageB
messageB = hello;
console.log(hello);
console.log(messageB);
// Declaring a varialbe twice will cause an error
let errorRepeat = "This";
// let errorRepeat = "That";
// So we should declare a varialbe once and then refer to it without let

// VARIABLE NAMING
// There are two limitations on variable names in JavaScript
// The name must only contain letters, digits, or the symbols $ and _
// The first character must not be a digit
// Examples of valid names:
let userName;
let test123;
// When the name contains multiple words, camelCase should be used, That is: words go one after another each word expect first starting with a captial letter:
let myVeryLongName;
// The dollar sign "$" and the underscore "_" can also be used in names, they are regular symbols just like letters with no special meaning
let $ = 1;
let _ = 2;
console.log($ + _);
// Examples of incorrect variable names:
// let 1a; // cannot start with a digit
// let my-name: // hyphens '-' aren't allowed in the name

// CASE MATTERS
let apple;
let APple;
// These are two different variables

// NON-LATIN LETTERS ARE ALLOWED BUT NOT RECOMMENDED
let имя = "...";
let 我 = "...";

// RESERVED NAMES
// There is a list of reversed words that can't be used to name variable's because they are used by the language itself
// let, class, return, and function are reserved
// let let = 5; // can't name a varialbe let
// let return = 5; // can't name a variable return

// AN ASSIGNMENT WITHOUT USE STRICT
// Normally, we need to define a variable before using it. But in the old times, it was technically possible to create a varialbe by mere assignment of the value without using let. This still works now if we don't put "use strict" in our scripts to maintain compatibility with old scripts.
// note: no "use strict" in this example
num = 5;
console.log(num);
// This is a bad practice and would cause an error in strict mode:
("use strict");
num2 = 10;
console.log(num2); // error: num is not defined

// CONSTANTS
// To declare a constant (unchanging) variable, use const instead of let:
const myBirthday = "18.04.1982";
// Variables declared using const are called "constants". They cannot be reassigned. If you try it will error you.
// const myBirthday = "01.01.2001";
// When a programmer is sure that a variable will never change, they can declare it with const to gurantee and clearly communicate that fact to everyone.

// UPPERCASE CONSTANTS
// There are two widespread practice to use contants as aliases for difficult-to-remember balues that are knwon prior to execution
// Such constants are named using capital letters and underscores
// contants for colors in web hexadecimal format:
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "00F";
const COLOR_ORANGE = "#FF7F00";
// ....when we need to pick a color
let color = COLOR_ORANGE;
console.log(color);
// Benefits:
// COLOR_ORANGE is much easier to remember than "FF7F00"
// It is much easier to mistype "#FF7F00" than COLOR_ORANGE
// When reading the code COLOR_ORANGE is much more meaningful
// When should we use capitals for a constant and when should we name it normally?
// Being a "constant" just means that a variable's value never changes. But there are constants that are knwon prior to execution (like a hexadecimal value for red) and there are constans that are calculated in run-time, during the execution, but do not change after their initial assignment.
// for instance:
const pageLoadTime = "time taken by a webpage to load";
// The value of pageLoadTime is not known prior to the page load, so it's named normally. But it's still a constant because it doesn't change after assignment.
// In other words, capital-named constants are only used as aliases for "hard-coded" values.

// NAME THINGS RIGHT
// A variable name should have a clean, obvious meaning, describing the data that it stores.
// variable naming is very important and complex in programming, a quick glance at variable names can reveal which code was written by a beginner versus an experienced developer.
// In real projects, most time is spent modifying and extending an existing code base rather than writing something from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labeled. Or, in other words, when the variables have good names.
// Good rules to follow:
// Use human-readable names like userName or shoppingCart.
// stay away from abbreviations or short names like a, b, c, unless you really know what you're doing.
// Make names maximally descriptive and concise. Examples of bad names are data and value. Such names say nothing. It's only okay to use them if the context of the code makes it expectionally obvious which data or value the variable is referencing.
// Agree on terms within your team and in your own mind. If a site visitor is called a "user" then we should name related variables currentUser or newUser instead of currentVisitor or newManInTown.

// SUMMARY
// We can declare variables to store data by using the var, let, or const keywords.
// let - is a modern variable declaration.
// var - is an old-school variable declaration. Normally we don't use it at all, but we'll cover subtle differences from let later
// const - is like let, but the value of the variable can't be changed.
// Variables should be named in a way that allows us to easily understand what's inside them.

// TASKS

// WORKING WITH VARIABLES
// 1. Declare two variables: admin and name.
let admin;
let name;
// 2. Assign the value "John" to name.
name = "John";
// 3. Copy the value from name to admin.
admin = name;
// 4. Show the value of admin using console
console.log(admin);

// GIVING THE RIGHT NAME
// 1. Create a variable with the name of our planet. How would you name such a variable?
let ourPlanetName = "Earth";
// 2. Create a variable to store the name of a current visitor to a website.
let currentUserName = "John";
// We could shorten that to userName if we know for sure that the user is current.
// Modern editors and autocomplete make long variable names easy to write. Don't save on them. A name with 3 words in it is fine

// UPPERCASE CONST
// Examine the following code:
const birthday = "18.04.1982";
const ageB = someCode(birthday);
// Would it be right to user upper case for birthday? For age? or even for both?
// birthday should be UPPERCASE
// ageB should be normal because today we have one age, a year after we'll have another one. It is a constant that does not change through the code execution. But its a bit "less of a constant" than birthday.
// upper case constants are "hard-coded" or in other words, known prior to execution and directly written into the code.
