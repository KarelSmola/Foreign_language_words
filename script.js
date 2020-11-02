// Class
class NewLine {
    constructor(word, translation, description) {
        this.word = word;
        this.translation = translation;
        this.description = description;        
    }

    addNewWord(){
        let newWordInput = document.getElementById("word-input")
        let newTranslationInput = document.getElementById("translation-input")
        let newDescriptionInput = document.getElementById("description-input")
        const newWordLine = document.createElement("div")
        const wordOutput = document.createElement("p")
        const translationOutput = document.createElement("p")
        const descriptionOutput = document.createElement("p")
        const hideBtn = document.createElement("button")
        const deleteBtn = document.createElement("button")

        // Add css class
        newWordLine.classList.add("new-word-line")
        wordOutput.classList.add("word-out")
        translationOutput.classList.add("trans-out")
        descriptionOutput.classList.add("description-out")
        hideBtn.classList.add("hide-button")
        hideBtn.innerText = "Hide"
        deleteBtn.classList.add("delete-button")
        deleteBtn.innerText = "Delete"

        wordOutput.innerText = newWordInput.value
        translationOutput.innerText = newTranslationInput.value
        descriptionOutput.innerText = newDescriptionInput.value
        
        newWordLine.append(wordOutput, translationOutput, descriptionOutput, hideBtn, deleteBtn)
        document.body.appendChild(newWordLine)
        newWordInput.value = ""
        newTranslationInput.value = ""
        newDescriptionInput.value = ""
        newWordInput.focus()

        // Add Listener
        hideBtn.addEventListener("click", () => {
            if (translationOutput.style.visibility === "hidden") {
                translationOutput.style.visibility = "visible"
            } else {
                translationOutput.style.visibility = "hidden"
            }
        })

        deleteBtn.addEventListener("click", () => {
            newWordLine.remove()
        })
    }

    hideTranslation(){
        
        console.log("Hidden")
    }

    deleteWord(){
        console.log("Delete")

    }

}

// Selectors
const addBtn = document.querySelector(".add-word-button")

const newWord = new NewLine()

// Listeneres
addBtn.addEventListener("click", newWord.addNewWord)


