var col1=document.querySelector(".color1");
var col2=document.querySelector(".color2");
var body = document.getElementById("chut");
//var n=document.createElement("h3"); 
var css = document.querySelector("h3");
function setcolor()
{
    body.style.background="linear-gradient(to right, "
    +col1.value 
    +","
    + col2.value
    + ")";
    css.textContent = body.style.background +";";

}
col1.addEventListener("input" ,setcolor);
col2.addEventListener("input" ,setcolor);