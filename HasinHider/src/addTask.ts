type Task = {
    id: number;
    title: string;
    completed: boolean;
};

const form = document.getElementById('taskForm') as HTMLFormElement;
const input = document.getElementById('taskInput') as HTMLInputElement;
const list = document.getElementById('taskList') as HTMLUListElement;
const exportButton = document.getElementById('export') as HTMLButtonElement;

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
    });

    console.log('Tasks Array:', tasks);

    // UI-তে রেন্ডার করার জন্য
    renderTasks();
}

// UI-তে টাস্কগুলো দেখানোর ফাংশন
function renderTasks(): void {
    list.innerHTML = ''; // আগের লিস্ট ক্লিয়ার করা

    tasks.forEach(task => {
        const li = document.createElement('li') as HTMLLIElement;
        li.className = 'task-item';

        const checkbox = document.createElement('input') as HTMLInputElement;
        checkbox.type = 'checkbox';
        checkbox.id = `task-${task.id}`;
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => { 
            task.completed = checkbox.checked;
        })

        // চেকবক্স চেঞ্জ হলে স্ট্যাটাস আপডেট হবে
        checkbox.addEventListener('change', () => {
            task.completed = checkbox.checked;
        });

        const label = document.createElement('label') as HTMLLabelElement;
        label.htmlFor = `task-${task.id}`;
        label.textContent = task.title;

        li.appendChild(checkbox);
        li.appendChild(label);
        list.appendChild(li);
    });
}

// নতুন টাস্ক ফর্ম সাবমিট করার ইভেন্ট হ্যান্ডলার
form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    const title = input.value.trim();

    if (title !== '') {
        const newTask: Task = {
            id: nextId++,
            title: title,
            completed: false
        };

        tasks.push(newTask);
        renderTasks();
        input.value = ''; // ইনপুট ফিল্ড খালি করা
        input.focus()
    }

    
});

exportButton.addEventListener('click', () => {
    console.log(tasks);
});

// প্রোগ্রাম রান করার জন্য ফাংশনটি কল করা হলো
createSampleTasks();
