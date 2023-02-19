const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-box");

let toDos = [];

const TODOS_KEY = "todos";

function localSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo() {
  lenght -= 1;
  const task = event.target.parentElement;
  task.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(task.id));
  localSaveToDos();
}

let lenght = 0;
//페이지에 그리기
function paintToDo(newToDo) {
  lenght += 1;
  console.log(lenght);
  const todo = document.createElement("div");
  todo.classList = "todo";
  todo.id = newToDo.id;
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = lenght;
  const label = document.createElement("label");
  label.innerText = newToDo.text;
  label.htmlFor = lenght;
  const span = document.createElement("span");
  span.innerText = "clear";
  span.classList = "material-icons";
  span.addEventListener("click", deleteToDo);
  div.appendChild(input);
  div.appendChild(label);
  todo.appendChild(div);
  todo.appendChild(span);
  toDoList.appendChild(todo);
}

let today = new Date();
function addTask() {
  event.preventDefault();
  const newTask = toDoInput.value;
  toDoInput.value = "";
  const toDoObj = {
    date:
      String(today.getFullYear()) +
      String(today.getMonth() + 1) +
      String(today.getDate()),
    id: Date.now(),
    text: newTask,
  };
  toDos.push(toDoObj);
  paintToDo(toDoObj);
  localSaveToDos();
}
toDoForm.addEventListener("submit", addTask);

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
