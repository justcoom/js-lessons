// хранение данных, бизнес-логика
const model = {
	tasks: [],
	addTask(title) {
		const isDone = false;
		const id = Math.random();

		const newTask = { title, isDone, id };
		// то же, что { title: title, isDone: isDone, id: id }

		this.tasks.push(newTask);
		view.renderTasks(model.tasks);
	},

	toggleTask(taskId) {
		this.tasks = this.tasks.map((task) => {
			if (task.id === taskId) {
				task.isDone = !task.isDone;
			}
			return task;
		});

		view.renderTasks(model.tasks);
	},

  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
    view.renderTasks(model.tasks)
  }
};

// отображение данных: рендер списка задач, размещение обработчиков событий
const view = {
	init() {
		this.renderTasks(model.tasks);

		const form = document.querySelector(".form");
		const input = document.querySelector(".input");
		form.addEventListener("submit", (event) => {
			event.preventDefault();
			const title = document.querySelector(".input").value;
			controller.addTask(title);
			input.value = "";
		});

		const list = document.querySelector(".list");
		list.addEventListener("click", (event) => {
			if (event.target.classList.contains("task-title")) {
				const taskId = +event.target.parentElement.id;
				controller.toggleTask(taskId);
			}

      if (event.target.classList.contains('delete-button')) {
        const taskId = +event.target.parentElement.id
        controller.deleteTask(taskId)
        // model.deleteTask(taskId) ПОЧЕМУ НЕЛЬЗЯ СРАЗУ ЗДЕСЬ ПИСАТЬ
      }
		});
	},

	renderTasks(tasks) {
		const list = document.querySelector(".list");
		let tasksHTML = "";

		tasks.forEach((task) => {
			tasksHTML += `
            <li id="${task.id}" class="${task.isDone ? "done" : ""}">
              <b class="task-title">${task.title}</b>
              <button class="delete-button" type="button">Удалить 🗑</button>
            </li>`;
		});
		list.innerHTML = tasksHTML;
	},
};

// обработка действий пользователя, обновление модели
const controller = {
	addTask(title) {
		if (title.trim() !== "") {
			model.addTask(title);
		}
	},
	toggleTask(taskId) {
		model.toggleTask(taskId);
	},
  deleteTask(taskId) {
    model.deleteTask(taskId)
  }
};

const init = () => {
	view.init();
	// здесь может быть код инициализации других модулей
};

init();
