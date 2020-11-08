// Class
class NewLine {
  constructor(word, translation, description) {
    this.word = word;
    this.translation = translation;
    this.description = description;
  }

  addNewWord() {
    let newWordInput = document.getElementById("word-input");
    let newTranslationInput = document.getElementById("translation-input");
    let newDescriptionInput = document.getElementById("description-input");

    if (newWordInput.value === "" || newTranslationInput.value === "") {
      alert("You have to fill new word and translation");
    } else {
      const newWordLine = document.createElement("div");
      const wordOutput = document.createElement("p");
      const translationOutput = document.createElement("p");
      const descriptionOutput = document.createElement("p");
      const hideBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");

      // Add css to the class
      newWordLine.classList.add("new-word-line");
      wordOutput.classList.add("word-out");
      translationOutput.classList.add("trans-out");
      descriptionOutput.classList.add("description-out");
      hideBtn.classList.add("hide-button");
      hideBtn.innerHTML = "<i class='fas fa-eye-slash'></i>";
      deleteBtn.classList.add("delete-button");
      deleteBtn.innerHTML = "<i class='fas fa-trash'></i>";

      wordOutput.innerText = newWordInput.value;
      translationOutput.innerText = newTranslationInput.value;
      descriptionOutput.innerText = newDescriptionInput.value;

      newWordLine.append(
        wordOutput,
        translationOutput,
        descriptionOutput,
        hideBtn,
        deleteBtn
      );
      document.body.appendChild(newWordLine);
      newWordInput.value = "";
      newTranslationInput.value = "";
      newDescriptionInput.value = "";
      newWordInput.focus();

      // Add Listeners
      hideBtn.addEventListener("click", () => {
        if (translationOutput.style.visibility === "hidden") {
          translationOutput.style.visibility = "visible";
        } else {
          translationOutput.style.visibility = "hidden";
        }
      });

      deleteBtn.addEventListener("click", () => {
        newWordLine.classList.add("disappear");
        newWordLine.addEventListener("transitionend", function () {
          newWordLine.remove();
        });
      });
    }
  }
}

// Selectors
const addBtn = document.querySelector(".add-word-button");

const newWord = new NewLine();

// Listeneres
addBtn.addEventListener("click", newWord.addNewWord);
