const btn=document.getElementById("fetchbtn");
const url="https://randomuser.me/api/";
let xhr=new XMLHttpRequest();
let data;

btn.addEventListener("click",()=>{
    xhr.open('GET',url);
    xhr.onreadystatechange=function (){
        if(xhr.readyState==4){
            data=JSON.parse(this.responseText);
            console.log(data);
        }
    }
});