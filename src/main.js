
const itemList = document.getElementById('list');
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const prioritySelector = document.getElementById('prioritySelector');
const typeSelector = document.getElementById('typeSelector');
const divLine = document.getElementById('divLine');
const sortByPriority = document.createElement('button');
const deleteChecked = document.createElement('button');
const taskCounter = document.createElement('span');
const tasksWord = document.createElement('span');
taskCounter.id = 'counter';
textInput.focus();

//what happens when the add button is clicked:
addButton.addEventListener('click', addToList);
function addToList() {
    // task container
    let taskContainer = document.createElement('div');
    // taskContainer.className = prioritySelector.value + ' todoContainer';
    taskContainer.className = typeSelector.value + ' todoContainer';
    taskContainer.value = prioritySelector.value;
    taskContainer.title = typeSelector.value;
    todoList.appendChild(taskContainer);




    // task priority
    let taskPriority = document.createElement('span');
    taskPriority.className = 'todoPriority';
    taskPriority.innerHTML = prioritySelector.value;
    taskContainer.appendChild(taskPriority);
    
    // task type
    let taskType = document.createElement('span');
    taskType.className = 'todoType';
    taskType.innerHTML = typeSelector.value;
    taskContainer.appendChild(taskType);

    // task time stamp
    let timeStamp = document.createElement('span');
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + ((today.getMinutes() < 10 ? '0' : '') + today.getMinutes()) + ':' + ((today.getSeconds() < 10 ? '0' : '') + today.getSeconds());
    let dateNtime = date+' '+time;
    timeStamp.className = 'todoCreatedAt';
    timeStamp.innerHTML = dateNtime;
    taskContainer.appendChild(timeStamp);

    // task name
    let task = textInput.value;
    let addedTask = document.createElement('span');
    addedTask.className = 'todoText';
    addedTask.innerHTML = task;
    taskContainer.appendChild(addedTask);

    // task checkbox
    let checkBox = document.createElement('input');
    checkBox.className = 'isDone';
    checkBox.type = 'checkbox';
    taskContainer.appendChild(checkBox);
    checkBox.addEventListener('change', isDone);

    function isDone() {
        if (this.checked) {
            taskContainer.className = 'done';
        } else {
            taskContainer.className = typeSelector.value + ' prio' + prioritySelector.value + ' todoContainer';
        }
    }

    // delete checked
    deleteChecked.id = 'deleteButton';
    deleteChecked.innerHTML = 'Clear Done';
    divLine.appendChild(deleteChecked);
    deleteChecked.addEventListener('click', clearChecked);
    function clearChecked(className){
    let doneTasks = document.getElementsByClassName('done');
        for (let i = doneTasks.length - 1; i >= 0; --i) {
            doneTasks[i].remove();
        }
        counter = todoList.getElementsByTagName('div').length;
        taskCounter.innerHTML = counter;
    }

    // sort by priority
    divLine.appendChild(sortByPriority);
    sortByPriority.id = 'sortButton';
    sortByPriority.innerHTML = 'Sort';
    sortButton.addEventListener('click', sortTasks);
    function sortTasks(arguments) {
        taskContainer.className = 'prio' + taskContainer.value + ' todoContainer ' + taskContainer.title;
    }

    // task counter
    let counter = todoList.getElementsByTagName('div').length;
    divLine.appendChild(tasksWord);
    divLine.appendChild(taskCounter);
    
    taskCounter.innerHTML = counter;
    tasksWord.innerHTML = '<br><br>Tasks: ';
    



// end addToList function
textInput.value = '';
textInput.focus();

}
    // enter is "send"
    const enterIsSend = document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addToList();
        }
    });