const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"]
console.log(names)
for (i = 0; i < Object.values(names).length; i++){
    var heading1 = document.createElement("h1")
    document.body.append(heading1)
    heading1.textContent = Object.values(names)[i]
    heading1.style.fontSize= "20 px"
    heading1.style.color = "cornFlowerBlue"
    heading1.style.fontWeight= "lighter"
    heading1.style.fontFamily= "sansSerif"
}

