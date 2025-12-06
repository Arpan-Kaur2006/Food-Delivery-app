document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.querySelector('input[type="email"]').value.trim();
    const password = document.querySelector('input[type="password"]').value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    alert("Login successful!");
});

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll(".login-input");

    const fullName = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value.trim();
    const confirmPassword = inputs[3].value.trim();

    // Basic checks
    if (!fullName || !email || !password || !confirmPassword) {
        alert("Please fill all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Account created successfully! 🎉");
});
