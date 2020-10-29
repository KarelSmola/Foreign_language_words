// Class
class NewLine {
    constructor(word, translation, description) {
        this.word = word,
        this.translation = translation,
        this.description = description
    }

    addNewWord(){
        console.log(this.word)
    }

    hideTranslation(){

    }

    deleteWord(){

    }

}

// Selectors
const wordInput = document.getElementById("word-input")
const translationInput = document.getElementById("translation-input")
const descriptionInput = document.getElementById("description-input")
const addBtn = document.querySelector(".add-word-button")

const newWord = new NewLine(wordInput.value, translationInput.value, descriptionInput.value)

addBtn.addEventListener("click", newWord.addNewWord)