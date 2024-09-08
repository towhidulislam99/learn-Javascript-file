
const addTask = () =>{
    const taskInput = document.getElementById('taskInput');
    const taskInputValue = taskInput.value.trim();

    if(taskInputValue !== ""){
        const taskListUi = document.getElementById('taskList');

        const li = document.createElement('li');
        li.style.marginTop = '10px';
        li.innerHTML = '<input class = "mr-2 ml-1" type="checkbox">' + taskInputValue + '<button class="bg-red-700 px-4 py-1 text-center text-white ml-2" onclick="deleteTask(this)"> Delete </button>';

        taskListUi.appendChild(li);

        taskInput.value = '';

    }
    else{
        alert("Please Add a Task");
    }
}

const deleteTask = (btn) => {
    const li = btn.parentNode;
    li.parentNode.removeChild(li);
}

const deleteTaskChecked = () => {
    const taskList = document.getElementById('taskList');
    const checkboxes = taskList.querySelectorAll('input[type = "checkbox"]:checked');

    checkboxes.forEach(checkbox => {
        const li = checkbox.parentNode;
        li.parentNode.removeChild(li);
    })

}
