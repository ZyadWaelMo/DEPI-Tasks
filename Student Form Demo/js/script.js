let gridTable = document.querySelector(".gridTable")
let addBtn = document.querySelector(".addBtn")
let rowTable = document.querySelector(".rowTable")
let errorMessage = document.querySelector("#errorMessage")
let dropDown = document.querySelector(".dropDown")
let dropDown2 = document.querySelector(".dropDown2")
let dropDownContent = document.querySelector(".dropDownContent")
let filterClick = document.querySelector(".filterClick")
let successStd = document.querySelector(".successStd")
let failStd = document.querySelector(".failStd")
let allStd = document.querySelector(".allStd")
let nameStd = document.querySelector(".nameStd")
let gradeStd = document.querySelector(".gradeStd")

document.querySelectorAll(".dropDown").forEach(drop => {
    drop.addEventListener("click", function (event) {
        event.stopPropagation()

        document.querySelectorAll(".dropDownContent").forEach(menu => {
            if (menu !== drop.querySelector(".dropDownContent")) {
                menu.classList.remove("show")
            }
        })
        let content = drop.querySelector(".dropDownContent")
        content.classList.toggle("show")
    })
})
window.addEventListener('click', function () {
    document.querySelectorAll(".dropDownContent").forEach(menu => {
        menu.classList.remove("show")
    })
})

function deleteRow(icon) {
    icon.addEventListener("click", () => {
        icon.closest(".rowTable").remove()
    })
}

gridTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("removeIcon")) {
        event.target.closest(".rowTable").remove()
    }
})

addBtn.addEventListener("click", () => {



    let studentName = document.querySelector("#studentName").value
    let studentGrade = document.querySelector("#studentGrade").value
    let department = document.querySelector("input[name='department']:checked");


    errorMessage.textContent = "";
    if (!studentName || !studentGrade || !department) {
        errorMessage.textContent = "Please enter a name, a grade, and select a department.";
        errorMessage.style.display = "block";
        return
    }
    if (isNaN(studentGrade) || studentGrade < 0 || studentGrade > 100) {
        errorMessage.textContent = "Please enter a valid grade between 0 and 100.";
        errorMessage.style.display = "block";
        return
    }
    let existingNames = Array.from(gridTable.querySelectorAll(".gridCells.nameCell"))
        .map(cell => cell.textContent.trim().toLowerCase())

    if (existingNames.includes(studentName.toLowerCase())) {
        errorMessage.textContent = "Please enter a valid or not repeated student name"
        errorMessage.style.display = "block"
        return
    }

    errorMessage.style.display = "none"
    let row = document.createElement("div")
    row.classList.add("rowTable")

    let formattedName = studentName.charAt(0).toUpperCase() + studentName.slice(1).toLowerCase();


    row.innerHTML =
        `  
                            <div class="gridCells nameCell">${formattedName}</div>
                            <div class="gridCells gradeCell">${studentGrade}</div>
                            <div class="gridCells"><i class="fa-solid fa-trash-can removeIcon"></i></div>
                        
                        `

    gridTable.appendChild(row)



    document.querySelector("#studentName").value = "";
    document.querySelector("#studentGrade").value = "";
    document.querySelector("input[name='department']:checked").checked = false;


})

successStd.addEventListener("click", () => {

    document.querySelectorAll(".rowTable").forEach(row => {
        let grade = parseFloat(row.querySelector(".gradeCell").textContent)
        if (grade < 60) {
            row.style.display = "none"
        } else {
            row.style.display = ""


        }
    })
})
failStd.addEventListener("click", () => {

    document.querySelectorAll(".rowTable").forEach(row => {
        let grade = parseFloat(row.querySelector(".gradeCell").textContent)
        if (grade >= 60) {
            row.style.display = "none"
        } else {
            row.style.display = ""

        }
    })

})

nameStd.addEventListener("click", () => {

    sortTable("name");

})
gradeStd.addEventListener("click", () => {

    sortTable("grade");

})


function sortTable(criteria) {
    const table = document.querySelector(".gridTable");
    const rows = Array.from(document.querySelectorAll(".rowTable"))

    rows.sort((a, b) => {
        if (criteria === "name") {
            let nameA = a.querySelector(".gridCells:nth-child(1)").textContent.trim().toLowerCase()
            let nameB = b.querySelector(".gridCells:nth-child(1)").textContent.trim().toLowerCase()
            return nameA.localeCompare(nameB)
        } else if (criteria === "grade") {
            let gradeA = parseFloat(a.querySelector(".gridCells:nth-child(2)").textContent.trim())
            let gradeB = parseFloat(b.querySelector(".gridCells:nth-child(2)").textContent.trim())
            return gradeB - gradeA
        }
    })

    rows.forEach(row => table.appendChild(row))
}



