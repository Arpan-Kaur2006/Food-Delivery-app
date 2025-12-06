// ========== LOGIN PAGE ==========
if (window.location.pathname.includes("login.html")) {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const email = document.querySelector('input[type="email"]').value.trim();
            const password = document.querySelector('input[type="password"]').value.trim();

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            alert("Login successful!");
        });
    }
}



// ========== SIGNUP PAGE ==========
if (window.location.pathname.includes("signup.html")) {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
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
    }
}



// ========== INDEX PAGE (HOME) ==========
if (window.location.pathname.includes("index.html")) {

    // Order Now
    const orderBtn = document.querySelector(".order-btn");
    if (orderBtn) {
        orderBtn.addEventListener("click", function () {
            document.querySelector(".categories").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Search
    const goBtn = document.getElementById("go");
    if (goBtn) {
        goBtn.addEventListener("click", function () {
            const query = document.querySelector(".search").value.trim();

            if (!query) {
                alert("Please type something to search.");
                return;
            }

            alert("Searching for: " + query);
        });
    }

    // Category click
    document.querySelectorAll(".cat-item").forEach(item => {
        item.addEventListener("click", () => {
            const category = item.querySelector("p").textContent;
            alert("You selected: " + category);
        });
    });
}



// ========== CART PAGE ==========
if (window.location.pathname.includes("cart.html")) {

    function updateTotal() {
        let total = 0;

        document.querySelectorAll(".cart-item").forEach(item => {
            const price = parseFloat(item.querySelector(".item-details p").textContent.replace("$", ""));
            const quantity = parseInt(item.querySelector("input").value);
            total += price * quantity;
        });

        document.querySelector(".cart-summary h3").textContent = "Total: $" + total.toFixed(2);
    }

    // Quantity update
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

    // Checkout
    const checkoutBtn = document.querySelector(".checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", function () {
            alert("Proceeding to checkout...");
        });
    }
}
