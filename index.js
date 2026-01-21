// array for password characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// get password elements 
let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")


// function to generate random passwords 
function passWordGen() {
    // get password length from user input
    let passLength = document.getElementById("passlength").value;
    // if statement to ensure password length is between 10 and 20 characters
    if (passLength < 10){
        passLength = 10
    } else if (passLength > 20){
        passLength = 20
    } else {
        passLength = passLength;
    }
    // Initialise password arrays and password elements
    let password1 = [];
    let password2 = [];
    pass1El.textContent = "";
    pass2El.textContent = "";
    // for loop to populate password arrays with random characters from the character array. The password arrays are then looped through to generate the random passwords. 
    for (let i=0; i < passLength; i++){
        password1[i]= characters[Math.floor(Math.random()*characters.length)]
        password2[i]= characters[Math.floor(Math.random()*characters.length)]
        pass1El.textContent += password1[i]
        pass2El.textContent += password2[i]
    }
}