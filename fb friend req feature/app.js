const addBtn=document.getElementById("add");
const removeBtn=document.getElementById("remove");
const alternateBtn=document.getElementById("alternate");
let statusText=document.getElementById("status");
let flag=0;

addBtn.addEventListener("click",()=>{
    statusText.style.color="green";
    statusText.innerHTML="You are now friend";
});

removeBtn.addEventListener("click",()=>{
    statusText.style.color="red";
    statusText.innerHTML="You are now not a Friend";
});

alternateBtn.addEventListener("click",()=>{
    if(flag==0){
        statusText.style.color="green";
        statusText.innerHTML="You are now friend";
        alternateBtn.innerHTML="Remove Friend";
        flag=1;
    }else{
        statusText.style.color="red";
        statusText.innerHTML="You are now not a Friend";
        alternateBtn.innerHTML="Add Friend";
        flag=0;
    }
});