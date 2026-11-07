type Task = {
    id: number;
    title: string;
    completed: boolean;
};

const form = document.getElementById('taskForm') as HTMLFormElement;
const input = document.getElementById('taskInput') as HTMLInputElement;
const list = document.getElementById('taskList') as HTMLUListElement;

let tasks: Task[] = [];
let nextId = 1;

function createSampleTasks(): void {
    const samples: Omit<Task, 'id'>[] = [
        { title: 'Learn TypeScript Generics and Interfaces', completed: false },
        { title: 'Fix top-level await issue in Node.js', completed: true },
        { title: 'Design responsive task list UI with HTML & CSS', completed: false },
        { title: 'Implement localStorage to persist state', completed: false },
        { title: 'Review pull requests on GitHub', completed: true },
        { title: 'Write unit tests for task validation', completed: false }
    ];

    samples.forEach(sample => {
        tasks.push({ id: nextId++, title: sample.title, completed: sample.completed });
    })
};

function renderTasks(): void { 
    list.innerHTML = "";
    tasks.forEach((task) => { 
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const spam = document.createElement("span")
    })
}

createSampleTasks();
console.log(tasks);