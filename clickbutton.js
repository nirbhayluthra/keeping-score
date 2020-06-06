var p1b =document.querySelector("#p1");
var p2b =document.querySelector("#p2"); 
var p1d =document.querySelector("#p1d");
var p2d =document.querySelector("#p2d");
var reset =document.querySelector("#p3");
var numinput=document.querySelector("input");
var windisplay=document.querySelector("p span");
var p1s=0,p2s=0
var gameOver = false;
var winscore =5;

p1b.addEventListener("click",function(){
if(!gameOver){
    p1s++
    if(p1s===winscore){
        p1d.classList.add("winner");
        gameOver=true;
    }
  p1d.textContent=p1s;
}
});

p2b.addEventListener("click",function(){
 if(!gameOver){
    p2s++;
    if(p2s===winscore){
        p2d.classList.add("winner"); 
        gameOver=true;
    }
    p2d.textContent=p2s;
 }
}); 

reset.addEventListener("click",function(){
  reset1();
});
function reset1(){
    p1s=0;
    p2s=0;
    p1d.textContent=0;
    p2d.textContent=0;
    p1d.classList.remove("winner");
    p2d.classList.remove("winner");
    gameOver=false;
}

numinput.addEventListener("change",function(){
windisplay.textContent=this.value;
winscore=Number(this.value);
reset1();
});