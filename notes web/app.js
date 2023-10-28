let inputBox=document.getElementById("input-box");
let addBtn=document.getElementById("btn");
let notes=document.getElementById("notes");

addBtn.addEventListener("click",()=>{
    let value=inputBox.value;
    notes.style.display="block";
    let note=document.createElement("span");
    note.className="note";
    note.innerHTML=value;
    notes.appendChild(note);
    let delBtn=document.createElement("h4");
    delBtn.innerText="Delete";
    note.appendChild(delBtn);
});