const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list ul");

let toDos = [];

const TODOS_KEY = "todos";

function localSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  localSaveToDos();
}

//페이지에 그리기
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText = "🗑️";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

let today = new Date();
function submitEvent() {
  event.preventDefault();
  if (toDos.length >= 11) {
    alert("최대 11개");
  } else {
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const toDoObj = {
      date:
        String(today.getFullYear()) +
        String(today.getMonth() + 1) +
        String(today.getDate()),
      id: Date.now(),
      text: newToDo,
    };
    toDos.push(toDoObj);
    paintToDo(toDoObj);
    localSaveToDos();
  }
}
toDoForm.addEventListener("submit", submitEvent);

//처음 검사
function init() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    //빈 리스트에 채워주기
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}

init();
