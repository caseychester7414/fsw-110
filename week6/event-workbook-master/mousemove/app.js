var hello = document.getElementsByClassName("red-box")[0]
hello.addEventListener("mousemove",(event) =>{
    
  hello.textContent=    event.pageX  + " y:" + event.pageY  
    console.log(event)
});
 console.log(hello)
