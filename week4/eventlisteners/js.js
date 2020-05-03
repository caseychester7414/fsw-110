var hello = document.getElementById("hello")
console.log(hello)
hello.addEventListener("mouseenter", ()=> {
hello.style.backgroundColor =  "blue"})

// hello.addEventListener("mouseleave", ()=> {
// hello.style.backgroundColor =  "brown"})

hello.addEventListener("mousedown", ()=> {
    hello.style.backgroundColor =  "red"})

    hello.addEventListener("mouseup", ()=> {
        hello.style.backgroundColor =  "yellow"})

        hello.addEventListener("dblclick", ()=> {
            hello.style.backgroundColor =  "green"})
            
            window.addEventListener("scroll", ()=> {
                hello.style.backgroundColor =  "orange"})
    


                for (i = 0; i < 5; i++) {
                    const h1=document.createElement("h1")
                    document.body.append(h1)
                    h1.textContent= "hello im a cat"
                }


                document.addEventListener("keydown", (event)=> {
                   if (event.which === 66 ){
                    hello.style.backgroundColor =  "blue"
                       console.log("hello world")
                   }

                       if  (event.which === 82 ){
                        hello.style.backgroundColor =  "red"
                           console.log("hello world")
                       }
                       if  (event.which === 89 ){
                        hello.style.backgroundColor =  "yellow"
                           console.log("hello world")
                       }
                       if  (event.which === 71 ){
                        hello.style.backgroundColor =  "green"
                           console.log("hello world")
                       }
                       if  (event.which === 79 ){
                        hello.style.backgroundColor =  "orange"
                           console.log("hello world")

                }})



                