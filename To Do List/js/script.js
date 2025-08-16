let inputForm = document.querySelector("#inputForm")
let buttonForm = document.querySelector("#buttonForm")
let gridTable = document.querySelector(".gridTable")
let gridRow = document.querySelector(".gridRow")
let gridHeader = document.querySelector(".gridHeader")
let gridCell = document.querySelector(".gridCell")
let errorMessage = document.querySelector(".errorMessage")
let removeIcon = document.querySelector(".removeIcon")
let gridCheck = document.querySelector(".gridCheck")

function updateRowColors() {
    let rows = document.querySelectorAll(".gridTable .gridRow:not(:first-child)")
    rows.forEach((row, index) => {
        let cells = row.querySelectorAll(".gridCell, .gridCheck")

        cells.forEach(cell => {
            if (index % 2 === 0) {
                cell.style.backgroundColor = "white"
            } else {
                cell.style.backgroundColor = "#f0f0f0"
            }
        })
    })
}

buttonForm.addEventListener("click", () => {
    let inputValue = inputForm.value

    if (!inputValue) {
        errorMessage.textContent = "Please enter a task"
        errorMessage.style.display = "block"
    } else {
        inputValue = inputForm.value.trim();

        errorMessage.style.display = "none"
        let newRow = document.createElement("div")
        newRow.classList.add("gridRow")

        newRow.innerHTML = `
        <div class="gridCell"> <input type="checkbox" class="gridCheck"></div>
        <div class="gridCell">${inputValue}</div>
        <div class="gridCell"><i class="fa-solid fa-trash-can removeIcon"></i></div>
    `

        gridTable.append(newRow)
        inputForm.value = ""


        updateRowColors()

    }


})


gridTable.addEventListener("click", (e) => {

    if (e.target.type === "checkbox" || e.target.classList.contains("gridCheck")) {
        let currentRow = e.target.closest(".gridRow")
        let taskCell = currentRow.querySelectorAll(".gridCell")[1]
        if (e.target.checked) {
            taskCell.style.textDecoration = "line-through"
        } else {
            taskCell.style.textDecoration = "none"
        }
    }

    if (e.target.classList.contains("fa-trash-can") || e.target.classList.contains("removeIcon")) {
        e.target.closest(".gridRow").remove()
        updateRowColors()

    }


})


updateRowColors()



