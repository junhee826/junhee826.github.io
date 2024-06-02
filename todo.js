const list = document.getElementById("todo-list");
const todoform = document.getElementById("todoform");
let elements = [];

if (localStorage.getItem("todos") !== null) {
  elements = JSON.parse(localStorage.getItem("todos"));
  elements.forEach((element) => {
    const newelement = document.createElement("li");
    const todowork = document.createElement("span");
    const deletebtn = document.createElement("button");
    deletebtn.innerText = "X";
    todowork.innerText = element.text;
    newelement.appendChild(todowork);
    newelement.appendChild(deletebtn);
    newelement.id = element.id;
    list.appendChild(newelement);
    deletebtn.addEventListener("click", deletehandler);
  });
}

function deletehandler(event) {
  //console.dir(event.target.parentElement);
  const id = event.target.parentElement.id;
  elements = elements.filter((element) => {
    return parseInt(element.id) !== parseInt(id);
  });
  event.target.parentElement.remove();
  localStorage.setItem("todos", JSON.stringify(elements));
}

function todosubmithandler(event) {
  event.preventDefault();
  const todoelement = todo.value;
  const newtodo = {
    text: todoelement,
    id: Date.now(),
  };
  elements.push(newtodo);
  console.log(elements);
  const element = document.createElement("li");
  const todowork = document.createElement("span");
  const deletebtn = document.createElement("button");
  deletebtn.innerText = "X";
  todowork.innerText = newtodo.text;
  element.appendChild(todowork);
  element.appendChild(deletebtn);
  element.id = newtodo.id;
  list.appendChild(element);
  todo.value = "";
  deletebtn.addEventListener("click", deletehandler);
  localStorage.setItem("todos", JSON.stringify(elements));
}
todoform.addEventListener("submit", todosubmithandler);
