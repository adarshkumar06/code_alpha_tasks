function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
  
    if (taskInput.value === '') {
      alert('Please enter a task.');
      return;
    }
  
    var li = document.createElement('li');
    li.innerText = taskInput.value;
  
    li.onclick = function() {
      li.classList.toggle('complete');
    };
  
    taskList.appendChild(li);
    taskInput.value = '';
  }