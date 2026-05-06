const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
  const text = taskInput.value.trim();

 if(text !== ''){
  const newText = document.createElement('li');
  newText.innerHTML = `${text}`;
  taskList.appendChild(newText);
 }
}