console.log("hello");

// class selector
let boxes = document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor = "skyblue"

// id selector
document.getElementById("newbox").style.backgroundColor = "lightgreen"

// query selector
document.querySelector(".box").style.backgroundColor = "lightpink"
//  document.querySelectorAll(".box").forEach(e =>{
//     e.style.backgroundColor = "lightpink"
//  })