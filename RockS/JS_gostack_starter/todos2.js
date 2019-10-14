var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];
//["Fazer café", "Estudar Java Script", "Acessar comunidade"];

function renderTodos() {
  // Ele irá remover todo o conteúdo do 'li', para n repeti-lo no "refresh"
  listElement.innerHTML = "";

  for (todo of todos) {
    /*lembrar do 'for' e 'of'*/
    // 'li' = list item
    var todoElement = document.createElement("li");
    // todo 'text', ficara dentro da 'li', usando var 'todo' que tem o texto de cada todo
    var todoText = document.createTextNode(todo);
    // Colocar um link do botão excluir usando renderTodo
    var linkElement = document.createElement("a");
    // colocar um href no excluir

    linkElement.setAttribute("href", "#");
    var pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo('+ pos +')");

    var linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();
//addTodo é recuperar o que foi escrito no input .value
function addTodo() {
  var todoText = inputElement.value;
  // push é uma função do array para adicionar ao final do array
  todos.push(todoText);
  // inputElement.value = '' (vazio), para apagar o input
  inputElement.value = "";
  // após isso ela ira dar um "refresh" no arrey com o novo elemento do array
  renderTodos();
  saveToStorage();
}
// para chamar a função clicando no botão
buttonElement.onclick = addTodo;
function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
