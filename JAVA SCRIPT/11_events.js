let button = document.getElementById("btn")

// mouse events
button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Clicked!!</b>"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Dubble Clicked!!</b>"
})

button.addEventListener("contextmenu", ()=>{
    alert("dont right click")
})

// keyboard events
document.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode);
})