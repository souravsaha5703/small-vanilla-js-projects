let pass=document.getElementById("password");
let generate=document.getElementById("generate");
let visibilityPass=document.getElementById("visible");
let resultDisplay=document.getElementById("result");

let passLength=12;
let upparCasePass="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCasePass="abcdefghijklmnopqrstuvwxyz";
let numbersPass="0123456789";
let specialSymbols="@#$%^&*()_+~|}{[]></-=";
let allChars=upparCasePass+lowerCasePass+numbersPass+specialSymbols;

generate.addEventListener("click",()=>{
    let password="";
    password+=upparCasePass[Math.floor(Math.random()*upparCasePass.length)];
    password+=lowerCasePass[Math.floor(Math.random()*lowerCasePass.length)];
    password+=numbersPass[Math.floor(Math.random()*numbersPass.length)];
    password+=specialSymbols[Math.floor(Math.random()*specialSymbols.length)];

    while(passLength>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    resultDisplay.innerHTML=`Your Generated Password is ${password}`;
});

visibilityPass.addEventListener("click",()=>{
    if(pass.type=="password"){
        pass.type="text";
        visibilityPass.innerHTML="Hide";
    }else{
        pass.type="password";
        visibilityPass.innerHTML="Unhide";
    }
})