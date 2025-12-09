document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Stop default form submission

    const enteredEmail = document.getElementById("email-input").value.trim();
    const enteredPassword = document.getElementById("password-input").value.trim();

    // Get stored credentials (for normal users)
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const savedUsername = localStorage.getItem("username");

    // Hard-coded admin credentials
    const adminEmail = "admin@invincible.com";
    const adminPassword = "secure123";

    if (enteredEmail === adminEmail && enteredPassword === adminPassword) {
        // Admin login successful
        alert("Admin login successful!");
        window.location.href = "admin.html"; // redirect to admin inventory page
    } else if (enteredEmail === savedEmail && enteredPassword === savedPassword) {
        // Normal user login successful
        alert("Login successful!");
        localStorage.setItem("currentUsername", savedUsername);
        window.location.href = "index.html"; // redirect to normal homepage
    } else {
        // Login failed
        alert("Invalid email or password.");
    }
});
