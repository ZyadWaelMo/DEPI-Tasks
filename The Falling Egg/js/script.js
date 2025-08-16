let egg = document.querySelector(".egg")
let basket = document.querySelector(".basket")

let basketPosition = 50

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft" && basketPosition > 0) {
        basketPosition -= 5
        basket.style.left = basketPosition + '%'
    }
    if (e.key === "ArrowRight" && basketPosition < 100) {
        basketPosition += 5
        basket.style.left = basketPosition + '%'
    }
})
function dropEgg() {

    egg.style.display = 'block';
    egg.classList.remove('falling')

    let randomX = Math.random() * 80 + 10
    egg.style.left = randomX + "%"


    egg.style.top = "-10rem"


    setTimeout(() => {
        egg.classList.add("falling")
    }, 100)
    setTimeout(() => {
        checkCollision(randomX)
    }, 3000)


}

function checkCollision(eggX) {
    let basketLeft = basketPosition - 4
    let basketRight = basketPosition + 4

    if (eggX >= basketLeft && eggX <= basketRight) {
        egg.style.display = 'none'
    } else {
        egg.src = "images/broken.jpg"
        egg.style.left = eggX + '%'
        egg.style.top = "calc(100vh - 10rem)"
        

    }
}

dropEgg();