var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//by adding the event argument to the createTaskHandler(), we can use the data and functionality that object holds.
var createTaskHandler = function(event) {

    // if we execute the method below, we're instructing the browser to not carry out its default behavior
    event.preventDefault();

    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasksToDoEl.appendChild(listItemEl);
    
};

//form-specific event "submit" will listens for 2 events within the form:
// when click a <button> with a type attribute that has a value of "submit"
// when press Enter on keyboard
formEl.addEventListener("submit", createTaskHandler);