//Dichiarazioni Generali
const inputForm = document.getElementById("input-form");
const inputButton = document.getElementById("input-button");
const body = document.querySelector("body");
const main = document.querySelector("main");
const listContainer = document.querySelector(".list-container");
// Fine dichiarazione Generali

//Funzione per creare un elemento della To Do List
inputButton.onclick = () => {
  const listElement = document.createElement("p");
  const deleteButton = document.createElement("button");
  listElement.id = "list-item";
  listElement.innerText = inputForm.value;
  deleteButton.id = "delete-button";
  deleteButton.innerText = "-";
  listElement.appendChild(deleteButton);
  listContainer.appendChild(listElement);

  //funzione per cancellare la riga con line-through
  listElement.onclick = () => {
    listElement.style.textDecoration = "line-through";
  };

  //   funzione per rimuovere l'elemento dalla To Do List
  deleteButton.onclick = () => {
    listElement.parentNode.removeChild(listElement);
  };
  inputForm.value = "";
};
