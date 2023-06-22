const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); // 입력창
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos"; // localStorage key name
let toDos = []; // todo list가 들어갈 배열

// localStorage에 toDos 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// html에서 list 삭제
// localStorage에서 데이터 삭제
function deleteToDo(e) {
  const li = e.target.parentElement; // click event를 받아 li 태그를 찾는다.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); // 새로운 toDos를 만들고 저장한다.
}

// toDo 객체를 받아 html에 그리는 함수
function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newToDo.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

// submit할 때 실행되는 함수
function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj); // html에 그리고
  saveToDos(); // localStorage 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // 저장된 배열 형태의 String
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos); // String to Array
  toDos = parsedToDos; // localStorage에 저장되어있던 toDo들을 toDos 저장
  parsedToDos.forEach(paintToDo); // 저장되어있던 toDo들 html에 보여줌.
}
