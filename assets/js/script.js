// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const taskId = generateTaskId();
console.log(taskId);
    
}


// Todo: create a function to create a task card
function createTaskCard(task) {

    



}

   
   
    

// Todo: create a function to render the task list and make cards draggable
 function renderTaskList() {

    $('.card-columns').empty();

    // Loop through tasks and create task cards
    tasks.forEach(task => {
      // Create task card HTML
      let cardHtml = `
        <div class="card mb-3" id="task-${task.id}">
          <div class="card-body">
            <h5 class="card-title">${task.name}</h5>
            <p class="card-text">Due Date: ${task.dueDate}</p>
          </div>
        </div>
      `;

      // Append task card to the appropriate swim lane
      $(`#${task.status}-cards`).append(cardHtml);

      // Make the task card draggable using jQuery UI
      $(`#task-${task.id}`).draggable({
        revert: true,
        stack: '.card',
        opacity: 0.7
      });
    });
  }



// Todo: create a function to handle adding a new task
function handleAddTask(event) {




 }

    // Todo: create a function to handle deleting a task
            function handleDeleteTask(event) {

            }

    // Todo: create a function to handle dropping a task into a new status lane
            function handleDrop(event, ui) {

            }

    // Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
            $(document).ready(function () {

            });
