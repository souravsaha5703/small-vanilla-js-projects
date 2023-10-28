let pass=document.getElementById("password");
let generate=document.getElementById("generate");
let visibilityPass=document.getElementById("visible");

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

    
})