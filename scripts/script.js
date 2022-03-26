
 const text = document.createElement("p")
 const form = document.querySelector('form')


const todos = [];
const createTodos = (text) =>  {
    todos.push(text);
}


 const generateToDoDOM = (todo)=>{
     const todoEl = document.createElement("label");
     const containerEl = document.createElement("div");
     const todoText = document.createElement("span");
     todoText.textContent = todo;
     containerEl.appendChild.apply(todoText);
     todoEl.classList.add("list-items");
     containerEl.classList.add("list-item_container");
     todoEl.appendChild(containerEl);
     return todoEl;
 }

  

const renderTodos = (todos) => {
    
   const todoList = document.querySelector("#todos");
   if(todos.length === 0){

   }
   todoList.innerHTML = " ";
   todos.forEach((todo) => {
       const label = generateToDoDOM(todo);
       todoList.appendChild(label)
   });

}




  document.querySelector("#new-todo").addEventListener("submit", (e) => {
     e.preventDefault();
     const text = e.target.elements.text.value.trim();
     if(text.length !== 0) {
         createTodos(text)
         e.target.elements.text.value = "";
     renderTodos(todos);
    }
     
 })



