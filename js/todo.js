const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  //JSON.stringify() string으로 바꿔줌
  //JSON.parse("[1,2,3,4]") => 배열로 바뀜
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove(); //UI, 즉 웹페이지에서만 삭제된 것임 li 차체는 살아있음
  //remove함수
  //DOM instance method Element.remove()
  //https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
  //   console.dir(li);
  //remove() 사용법 MDN 공식문서
  {
    /* <div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<div id="div-03">Here is div-03</div>
const element = document.getElementById("div-02");
element.remove(); // Removes the div with the 'div-02' id */
  }

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.append(span);
  li.append(button);
  toDoList.appendChild(li);
}
//7.4 Loading To Dos part One 부터 급격하게 난이도 올라간다고 함.

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
  //대소문자 구분 철저 paintToDo하고 paintTodo하고 다름. 코딩할때 가장 많이 하는 실수이고 초보가 가장 많이 하는 실수이고 시간낭비하는 실수임.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
//saveToDos와 savedToDos 이름 중복 설정으로 인한 uncaught syntax error
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

//return true true만 값을 반환해서 그대로 두는 것처럼 보임 return false는 공백?인건가?
//proto
