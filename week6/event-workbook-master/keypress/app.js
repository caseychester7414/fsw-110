/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

document.addEventListener("keydown", (event)=> {
    // if (event.which === 66 ){
    //  hello.style.backgroundColor =  "blue"
    //     console.log("hello world")
    // } 
    console.log(event)

    document.getElementById("output").innerHTML = event.keyCode + event.key

    //     if  (event.which === 82 ){
    //      hello.style.backgroundColor =  "red"
    //         console.log("hello world")
    //     }
    //     if  (event.which === 89 ){
    //      hello.style.backgroundColor =  "yellow"
    //         console.log("hello world")
    //     }
    //     if  (event.which === 71 ){
    //      hello.style.backgroundColor =  "green"
    //         console.log("hello world")
    //     }
    //     if  (event.which === 79 ){
    //      hello.style.backgroundColor =  "orange"
    //         console.log("hello world")

//  }
})

        