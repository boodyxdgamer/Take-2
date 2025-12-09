document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    const username = document.getElementById("firstname-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const password = document.getElementById("password-input").value;
    const repeatPassword = document.getElementById("repeat-password-input").value;

    if (!username) {
        alert("Please enter a username.");
        return;
    }

    if (!email) {
        alert("Please enter an email.");
        return;
    }

    if (!password) {
        alert("Please enter a password.");
        return;
    }

    if (password !== repeatPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save credentials to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Signup successful!");
    window.location.href = "login.html";
});