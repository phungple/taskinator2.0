var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//by adding the event argument to the createTaskHandler(), we can use the data and functionality that object holds.
var createTaskHandler = function(event) {

    // if we execute the method below, we're instructing the browser to not carry out its default behavior
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    //create "li" item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to "li" item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    
    // add HTML content to div
    taskInfoEl.innerHTML= "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);

    //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
};

//form-specific event "submit" will listens for 2 events within the form:
// when click a <button> with a type attribute that has a value of "submit"
// when press Enter on keyboard
formEl.addEventListener("submit", createTaskHandler);