

console.log("Script Loaded");


async function createTodoTask() {
    console.log("Works!!");
    let todoTaskName = document.getElementById("create-todo-text-field");
    console.log("Task Name: " + todoTaskName.value);
    const response = await fetch("http://localhost:8080/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "title": todoTaskName.value, "isComplete": false }),
      });

      const json = await response.json();
      console.log("Response: " + JSON.stringify(json));
    }



async function getAllTodoTasks() {
    console.log("Works again:");
    const response = await fetch("http://localhost:8080/todos/all", {
        method: "GET",
      });

    const json = await response.json();
    console.log("Response: " + JSON.stringify(json));
    let ulDisplayTodo = document.getElementById("todo-display-list");
    ulDisplayTodo.innerHTML = '';
    for (var i = 0; i < json.length; i++){
        var todo = json[i];
        let paragraph = document.createElement("p");
        paragraph.textContent = JSON.stringify(todo);
        ulDisplayTodo.appendChild(paragraph);
    }
}
