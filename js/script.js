// To Do List
const todoForm = document.querySelector('.add-task__form');
const todoInput = document.querySelector('.add-task__input');
const todoList = document.querySelector('.task__list');
const todoDoneList = document.querySelector('.done-task__list');

function formHandler(event) {
	event.preventDefault();
	const taskText = todoInput.value;
	const newTask = document.createElement('li');
	newTask.classList.add('task__item');
	newTask.innerText = taskText;
	todoList.append(newTask);
	todoInput.value = '';
	todoInput.focus();

	const doneButton = document.createElement('button');
	doneButton.setAttribute('role', 'button');
	doneButton.innerText = 'o';
	doneButton.classList.add('task__do-btn');
	newTask.append(doneButton);

	const deleteButton = document.createElement('button');
	deleteButton.setAttribute('role', 'button');
	deleteButton.innerText = 'x';
	deleteButton.classList.add('task__delete-btn');
	newTask.append(deleteButton);

	doneButton.addEventListener('click', function () {
		const doneTask = this.closest('li');
		doneButton.remove();
		deleteButton.remove();
		const copyTask = doneTask.cloneNode(true);
		copyTask.classList.add('done-task');
		todoDoneList.append(copyTask);
		doneTask.remove();

		const removeTaskBtn = document.createElement('button');
		removeTaskBtn.setAttribute('role', 'button');
		removeTaskBtn.innerText = 'x';
		removeTaskBtn.classList.add('task__delete-btn');
		copyTask.append(removeTaskBtn);

		removeTaskBtn.addEventListener('click', function () {
			this.closest('li').remove();
		})
	})

	deleteButton.addEventListener('click', function () {
		this.closest('li').remove();
	})
}

todoForm.addEventListener('submit', formHandler);