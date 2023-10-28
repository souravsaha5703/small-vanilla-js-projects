let container=document.querySelector("#con");
var love=document.querySelector("i");

container.addEventListener("dblclick",()=>{
    love.style.transform="translate(-50%,-50%) scale(1)";
    love.style.opacity="0.9";
    setTimeout(()=>{
        love.style.opacity="0";
    },2000);
});