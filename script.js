// Selectors
const newWordInput = document.getElementById("word-input")
const translationInput = document.getElementById("translation-input")
const wordDescriptionInput = document.getElementById("description-input")
const addBtn = document.querySelector(".add-word-button")


// Listeners
addBtn.addEventListener("click", () => {
    // Varialbles
    const wordsList = document.createElement("div")
    const newWordOut = document.createElement("p")
    const newTransOut = document.createElement("p")
    const newDescriptionOut = document.createElement("p")
    const hideButton = document.createElement("button")
    
    // Add classes
    wordsList.classList.add("words-list")
    newWordOut.classList.add("word-out")
    newTransOut.classList.add("trans-out")
    newDescriptionOut.classList.add("description-out")
    hideButton.classList.add("hide-button")
    hideButton.innerText = "Hide"

    // Do something
    if (newWordInput.value === "" || translationInput.value === "") {
        alert ('You have to fill "new word" and "translation" field. "Word description is optional"')
    } else {
    newWordOut.append(newWordInput.value)
    newTransOut.append(translationInput.value)
    newDescriptionOut.append(wordDescriptionInput.value)
    wordsList.append(newWordOut, newTransOut, newDescriptionOut, hideButton)
    document.body.appendChild(wordsList)
    newWordInput.value = ""
    translationInput.value = ""
    wordDescriptionInput.value = ""
    newWordInput.focus()
    }

    hideButton.addEventListener("click", () => {
        if (newTransOut.style.display === "none") {
            newTransOut.style.display = "flex"
        } else {
            newTransOut.style.display = "none"
        }
        
    })
    
})

