const buttom = document.getElementById("random")
const adviceNumber = document.getElementById("title")
const adviceDescription = document.getElementById("advice")

async function getAdvice(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const adviceContent = await response.json()
    const adviceId = `Advice #${adviceContent.slip.id}`
    const adviceText = `"${adviceContent.slip.advice}"`

    adviceNumber.innerHTML = adviceId
    adviceDescription.innerHTML = adviceText
}

buttom.addEventListener("click",getAdvice)

getAdvice()