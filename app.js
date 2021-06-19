//Selectors
// ["Murder in Mesopotamia by Agatha Christie","The Clocks by Agatha Christie"
//     ,"The Moving finger by Agatha Christie"
//     ,"Uma breve historia da humanidade sapiens by Yuval Noah Harari", "All God children need travelling shoes by Maya Angelou"
//     ,"O cobrador by Rubem Fonseca","A merda do mundo by Arcangelo Ferreira e Thiago Roney","Uma breve historia da filosofia by Nigel Warburton"
//     ,"Quem tem medo do feminismo negro by Djamila Ribeiro"]
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");



//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener('click', deleteCheck);


//Functions
function addTodo(event){
    //Prevent form from submmitting
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    //Check MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //CLEAR TODO INPUT VALUE
    todoInput.value = "";

}

function deleteCheck(e){
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
        todo.remove();
        });
    }
    //CHECK MARK
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

