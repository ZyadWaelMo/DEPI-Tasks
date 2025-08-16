let container = document.querySelector(".container")
let redBox = document.querySelector(".redBox")
let greenBox = document.querySelector(".greenBox")
let blueBox = document.querySelector(".blueBox")




container.addEventListener("click", (e) => {
    if (e.target.classList.contains("redBox")) {
        let newBox = document.createElement("div")
        newBox.classList.add("redBox")
        container.appendChild(newBox)

        e.target.style.backgroundColor = "rgb(255, 120, 120)"
        e.target.style.pointerEvents = "none"
    }
    if (e.target.classList.contains("greenBox")) {
        let newBox = document.createElement("div")
        newBox.classList.add("greenBox")
        container.appendChild(newBox)

        e.target.style.backgroundColor = "rgb(163, 255, 163)"
        e.target.style.pointerEvents = "none"
    }
    if (e.target.classList.contains("blueBox")) {
        let newBox = document.createElement("div")
        newBox.classList.add("blueBox")
        container.appendChild(newBox)

        e.target.style.backgroundColor = "rgb(127, 127, 255)"
        e.target.style.pointerEvents = "none"
    }

})