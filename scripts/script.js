let myForm = document.querySelector("#new-todo");


 const generetadToDoDOM = (todo)=>{
     const todoEl = document.createElement("label");
     const containerEl = document.createElement("div");
     const todoText = document.createElement("text");
     todoText.textContent = todo;
     containerEl.appendChild.apply(todoText);
     todoEl.classList.add("list-items");
     containerEl.classList.add("list-item_container");
     todoEl.appendChild(containerEl);
     return todoEl;
 }


 myForm.addEventListener("submit", (e) => {
     e.preventDefault();
     const text = e.target.elements.text.value.trim();
     if(text.length !== 0) {
         createTodo(text)
         e.target.elements.text.value = "";
     console.log(todos);
    }
     
 })

 const text = document.createElement("p")
 const form = document.querySelector('form')
const todos = [];
const createTodo = (text) => {
     todos.push(text);
}

