var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app buttob");

var todos = [
    "VisitarSogra",
    "Fazer um beat hj",
    "Deveres"
]

function renderTodos() {
    for (todo of todos){
        var todoElement = createElement(li);
        var todoText = createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos(); 