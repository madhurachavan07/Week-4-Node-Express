const API_URL = "/tasks";

function loadTasks() {
    fetch(API_URL)
        .then(response => response.json())
        .then(tasks => {
            const taskList = document.getElementById("taskList");

            taskList.innerHTML = "";

            tasks.forEach(task => {
                const li = document.createElement("li");

                li.innerHTML = `
                    ${task.title} - ${task.completed ? "Completed" : "Pending"}
                    <button onclick="toggleTask(${task.id})">Complete</button>
                    <button onclick="deleteTask(${task.id})">Delete</button>
                `;

                taskList.appendChild(li);
            });
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

function addTask() {
    const input = document.getElementById("taskInput");

    if (input.value.trim() === "") {
        alert("Enter a task");
        return;
    }

    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: input.value
        })
    })
        .then(response => response.json())
        .then(() => {
            input.value = "";
            loadTasks();
        });
}

function toggleTask(id) {
    fetch(`${API_URL}/${id}`, {
        method: "PUT"
    })
        .then(response => response.json())
        .then(() => {
            loadTasks();
        });
}

function deleteTask(id) {
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(() => {
            loadTasks();
        });
}

loadTasks();