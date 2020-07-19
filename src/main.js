
const itemList = document.getElementById('list');
const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');
const prioritySelector = document.getElementById('prioritySelector');
const divLine = document.getElementById('divLine');
const taskCounter = document.createElement('span');
const tasksWord = document.createElement('span');
taskCounter.id = 'counter';

textInput.focus();

//what happens when the add button is clicked:
addButton.addEventListener('click', addToList);
function addToList() {
    // task container
    let taskContainer = document.createElement('div');
    taskContainer.className = 'todoContainer';
    todoList.appendChild(taskContainer);

    // task priority
    let taskPriority = document.createElement('span');
    taskPriority.className = 'todoPriority';
    taskPriority.innerHTML = prioritySelector.value;
    taskContainer.appendChild(taskPriority);
    
    // task time stamp
    let timeStamp = document.createElement('span');
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ':' + ((today.getMinutes() < 10 ? '0' : '') + today.getMinutes()) + ':' + ((today.getSeconds() < 10 ? '0' : '') + today.getSeconds());
    let dateNtime = date+' '+time;
    timeStamp.className = 'todoCreatedAt';
    timeStamp.innerHTML = dateNtime;
    taskContainer.appendChild(timeStamp);

    // task type...

    // task name
    let task = textInput.value;
    let addedTask = document.createElement('span');
    addedTask.className = 'todoText';
    addedTask.innerHTML = task;
    taskContainer.appendChild(addedTask);

    // task checkbox...


    textInput.value = '';
    textInput.focus();

// task counter
let counter = todoList.getElementsByTagName('div').length;
divLine.appendChild(taskCounter);
divLine.appendChild(tasksWord);
taskCounter.innerHTML = counter;
tasksWord.innerHTML = ' Tasks'
}
