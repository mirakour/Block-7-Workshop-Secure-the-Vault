//Block 7 Workshop: Secure the Vault

//You are building a vault that requires three mathematical calculations to generate the three codes in a combination. 
// Use the JavaScript console or the script block within an HTML page to create three variables. 
// Each variable will be the result of each calculation (three in total). 
// The combination of the lock is 10 - 40 - 39. You must use three different arithmetic operators that will generate each individual number, 
// then display the combination on the HTML page, or in an alert popup.


//STEP 1: Create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:

let str1 = "You have received this message because you have been chosen to open an important vault. "; // string1
let str2 = "Here is the secret combination: "; //string2


//STEP 2: Assign three variables. Each variable contains the corresponding result of calculation using a unique arithmetic operator(+-*/). Each must equal one of the three codes in the combination.

var num1 = 20 / 2; // Returns first combination - 10
var num2 = 4 * 10; // Returns second combination - 40
var num3 = 30 + 9; // Returns third combination - 39

//STEP 3: Create a dialog box displaying the vault codes and the text if using HTML and a script tag, or create a popup dialog.

alert(str1 + str2 + num1 + " - " + num2 + " - " + num3 + "."); //dialog box to display the vault codes

