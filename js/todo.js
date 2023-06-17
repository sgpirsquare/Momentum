const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "✔";
  button.addEventListener("click", deleteToDo);
  li.append(span);
  li.append(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newTodo);
  //대소문자 구분 철저 paintToDo하고 paintTodo하고 다름. 코딩할때 가장 많이 하는 실수이고 초보가 가장 많이 하는 실수이고 시간낭비하는 실수임.
}

toDoForm.addEventListener("submit", handleToDoSubmit);
