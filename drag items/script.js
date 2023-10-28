let left=document.getElementById("left");
let right=document.getElementById("right");
let items=document.getElementsByClassName("items");

for(item of items){
    item.addEventListener("dragstart",(e)=>{
        let select=e.target;
        right.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        right.addEventListener("drop",(e)=>{
            right.appendChild(select);
            select=null;
        });
        left.addEventListener("dragover",(e)=>{
            e.preventDefault();
        });
        left.addEventListener("drop",(e)=>{
            left.appendChild(select);
            select=null;
        });
    });
}
