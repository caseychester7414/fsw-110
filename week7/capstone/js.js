const form = document.mainForm

const liElements =[]
const myWrapper = document.getElementById("myListWithButtons")
const listUL = document.getElementById("theList");
let test = document.getElementById("test") // my test H1 on the DOM
const who = document.getElementById("assign");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = document.getElementById("assign").value
    let whoValue  = document.getElementById("dothis").value
    if (inputValue === "" ){
        alert("fill the open boxes!")
    }else{
        addListToDOM(inputValue)
    }
    document.getElementById("assign").value = "" ;//reset the input so they can add again\
    document.getElementById("dothis").value=""
})
function addListToDOM(taskedItem){
    let theListItem = createTaskElement(taskedItem)
    
    listUL.append(theListItem);
}
function  createTaskElement(addToLists){
    let listItem = document.createElement("li")
    let theLabel = document.createElement("label")
    let deleteButton = document.createElement("button")
    let who = document.getElementById("dothis").value
    theLabel.innerText = who + "   : " + addToLists + "." ;
    deleteButton.innerText = "Delete";
    listItem.onclick = clickedTask
    deleteButton.onclick = deleteAction
    deleteButton.className = "delete"
    listItem.appendChild(theLabel)
    listItem.appendChild(deleteButton)
    return listItem    
}
function deleteAction(){
    
    this.parentNode.parentNode.removeChild(this.parentNode)
}
function clickedTask(){
   
this.classList.toggle("checked")
}