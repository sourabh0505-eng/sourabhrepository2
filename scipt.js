// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (e) {

        e.preventDefault(); // stop page from refreshing

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("All fields are required");
            return;
        }

        if (!email.includes("@")) {
            alert("Enter a valid email address");
            return;
        }

        alert("Form Submitted Successfully!");

        // Clear form after submission
        document.getElementById("contactForm").reset();
    });

});


// To-Do List Function

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task + 
    " <button class='deleteBtn' onclick='removeTask(this)'>Delete</button>";

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}


// Remove Task Function

function removeTask(button) {
    button.parentElement.remove();
}