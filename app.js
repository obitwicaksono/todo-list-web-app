const formInputTodo = document.querySelector(".form-wrap-input-todo");
const inputTodo = document.querySelector(".input-input-todo");
const todoList = document.querySelector(".list-group");
const deleteTodoItem = document.querySelector(".delete-todo-item");
const clearAllTodos = document.querySelector(".submit-button")

formInputTodo.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);
todoList.addEventListener("click", deleteAllTodos)

function addTodo(e) {
  e.preventDefault();

  if (inputTodo.value) {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.appendChild(document.createTextNode(inputTodo.value));

    const a = document.createElement("a");
    a.href = "#";
    a.className = "delete-todo-item";
    a.innerHTML = "delete";

    li.appendChild(a);
    todoList.appendChild(li);

    inputTodo.value = "";
  } else {
    alert("masukkan todo, tidak boleh kosong");
  }
}

function deleteTodo(e) {
  e.preventDefault();

  if (e.target.classList.contains("delete-todo-item")) {
    if (confirm("yakin ingin menghapus todo ini?")) {
      const parent = e.target.parentElement;
      parent.remove();
    }
  }
}

function deleteAllTodos() {
    todoList.innerHTML = ""
}