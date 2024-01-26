const passwordValue = document.getElementById("password");
const length = 12;
const buttonClick = document.getElementById("btn");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~{}[]<>/-=";

const allCombination = upperCase + lowerCase  + number + symbol;

function generatePassword(){
    let password ="";

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
       password += allCombination[Math.floor(Math.random() * allCombination.length)]; 
    }
    passwordValue.value = password;
}

function copyPassword(password){
    navigator.clipboard.writeText(password)
    .then(()=>{
       console.log("copy"+ password); 
    })
    .catch(err =>{
        console.log("Not Copied"+ err);
    })
}

buttonClick.addEventListener("click", function(){
    copyPassword(passwordValue.value);
});

generatePassword();
