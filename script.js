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
// script.js for signup.html

document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const inputs = document.querySelectorAll(".login-input");

    const fullName = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const password = inputs[2].value.trim();
    const confirmPassword = inputs[3].value.trim();


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
//index.html script.js
// Order Now → scroll to categories
document.querySelector(".order-btn").addEventListener("click", function () {
    document.querySelector(".categories").scrollIntoView({ behavior: "smooth" });
});

// Search button
document.getElementById("go").addEventListener("click", function () {
    const query = document.querySelector(".search").value.trim();

    if (!query) {
        alert("Please type something to search.");
        return;
    }

    alert("Searching for: " + query);
});

// Category click → simple interaction
document.querySelectorAll(".cat-item").forEach(item => {
    item.addEventListener("click", () => {
        const category = item.querySelector("p").textContent;
        alert("You selected: " + category);
    });
});
// cart.html script.js
function updateTotal() {
    let total = 0;

    document.querySelectorAll(".cart-item").forEach(item => {
        const price = parseFloat(item.querySelector(".item-details p").textContent.replace("$", ""));
        const quantity = parseInt(item.querySelector("input").value);
        total += price * quantity;
    });

    document.querySelector(".cart-summary h3").textContent = "Total: $" + total.toFixed(2);
}

// Quantity change updates total
document.querySelectorAll(".cart-item input").forEach(input => {
    input.addEventListener("change", updateTotal);
});

// Remove item
document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", function () {
        this.closest(".cart-item").remove();
        updateTotal();
    });
});

// Checkout button
document.querySelector(".checkout-btn").addEventListener("click", function () {
    alert("Proceeding to checkout...");
});
