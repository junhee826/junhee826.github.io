const form = document.getElementById("loginform");
const todo = document.getElementById("todo");
const login = document.getElementById("login");
const logout = document.getElementById("logout");
const loginname = document.getElementById("loginname");
const logindiv = document.getElementById("logindiv");
const tododiv = document.getElementById("tododiv");
const todolist = document.getElementById("todo-list");

if (localStorage.getItem("username") !== null) {
  login.hidden = true;
  logout.hidden = false;
  todo.hidden = false;
  logindiv.hidden = true;
  tododiv.hidden = false;
  todolist.hidden = false;
  loginname.innerText = `${localStorage.getItem("username")}'s todo list`;
} else {
  login.hidden = false;
  logout.hidden = true;
  todo.hidden = true;
  logindiv.hidden = false;
  tododiv.hidden = true;
  todolist.hidden = true;
}

function loginhandler(event) {
  event.preventDefault();
  const username = login.value;
  localStorage.setItem("username", username);
  login.hidden = true;
  logout.hidden = false;
  todo.hidden = false;
  logindiv.hidden = true;
  tododiv.hidden = false;
  todolist.hidden = false;
  loginname.innerText = `${username}'s todo list`;
}

function logouthandler(event) {
  localStorage.removeItem("username");
  login.value = "";
  loginname.innerText = "";
  login.hidden = false;
  logout.hidden = true;
  todo.hidden = true;
  logindiv.hidden = false;
  tododiv.hidden = true;
  todolist.hidden = true;
}

form.addEventListener("submit", loginhandler);
logout.addEventListener("click", logouthandler);
