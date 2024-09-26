class Task {
    constructor(title, isCompleted = false) {
      this.title = title;
      this.isCompleted = isCompleted;
    }
  
    toggleComplete() {
      this.isCompleted = !this.isCompleted;
    }
  }
  
  let tasks = [];
  
  const addTask = (title) => {
    const task = new Task(title);
    tasks.push(task);
    renderTasks();
  };
  
  const renderTasks = () => {
    const taskList = $('#task-list'); 
    taskList.empty(); 
  
    tasks.forEach((task, index) => {
      const taskItem = $('<li></li>'); 
      taskItem.text(task.title);
  
      if (task.isCompleted) {
        taskItem.addClass('completed');
      }
  
      const completeButton = $('<button class="complete"></button>').text(
        task.isCompleted ? 'Undo' : 'Complete'
      );
      completeButton.on('click', () => {
        task.toggleComplete();
        renderTasks(); 
      });
  
      const deleteButton = $('<button class="delete"></button>').text('Delete');
      deleteButton.on('click', () => {
        tasks = tasks.filter((_, i) => i !== index); 
        renderTasks(); 
      });
  
      taskItem.append(completeButton, deleteButton);
      taskList.append(taskItem);
    });
  };
  
  
  $('#add-task-button').on('click', () => {
    const taskTitle = $('#task-title').val(); 
    if (taskTitle) {
      addTask(taskTitle); 
      $('#task-title').val(''); 
    }
  });
