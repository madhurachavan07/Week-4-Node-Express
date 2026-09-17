fetch("http://localhost:5000/tasks")
    .then(response => response.json())
    .then(data => {

        const taskList = document.getElementById("taskList");

        data.forEach(task => {
            const listItem = document.createElement("li");

            listItem.textContent = task.title;

            taskList.appendChild(listItem);
        });

    })
    .catch(error => {
        console.log("Error:", error);
    });