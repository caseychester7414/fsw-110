// make the box disapear when the user clicks it
var hello = document.getElementsByClassName("red-box")[0]
console.log(hello)
hello.addEventListener("click", ()=> {
hello.remove()})