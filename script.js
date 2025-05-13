document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle functionality
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
            this.classList.toggle("active");
        });
    }

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const isDarkMode = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDarkMode);
            this.textContent = isDarkMode ? "☀️" : "🌙";
        });

        // Check for saved dark mode preference
        if (localStorage.getItem("darkMode") === "true") {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀️"; // Sun icon for dark mode
        }
    }

    // Login/signup form toggle
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const showSignup = document.getElementById("show-signup");
    const showLogin = document.getElementById("show-login");

    if (loginForm && signupForm && showSignup && showLogin) {
        // Initially hide signup form
        signupForm.style.display = "none";

        showSignup.addEventListener("click", function (e) {
            e.preventDefault();
            loginForm.style.display = "none";
            signupForm.style.display = "block";
        });

        showLogin.addEventListener("click", function (e) {
            e.preventDefault();
            signupForm.style.display = "none";
            loginForm.style.display = "block";
        });

        // Form vallidation for login
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            if (email && password) {
                alert("Login successful!");
                this.reset();
            } else {
                alert("Please fill in all fields");
            }
        });

        // Form validation for signup
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("signup-name").value;
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;
            const confirmPassword = document.getElementById("signup-confirm-password").value;

            if (!name || !email || !password || !confirmPassword) {
                alert("Please fill in all fields");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            if (password.length < 8) {
                alert("Password must be at least 8 characters long");
                return;
            }
            alert("Account created successfully!");
            this.reset();
            signupForm.style.display = "none";
            loginForm.style.display = "block";
        });
    }

    // Contact form submission
    const contactForm = document.querySelector("submit", function (e) {
        if (contactForm) {
            contactForm.addEventListener("submit", function (e) {
                e.preventDefault();
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const subject = document.getElementById("subject").value;
                const message = document.getElementById("message").value;

                if (name && email && subject && message) {
                    alert("Thank you for your message! We will get back to you soon.");
                    this.reset();
                } else {
                    alert("Please fill in all fields");
                }
            });
        }

        // Search functionability
        const searchBox = document.querySelector(".search-box");
        if (searchBox) {
            const searchInput = searchBox.querySelector("input");
            const searchButton = searchBox.querySelector("button");

            searchButton.addEventListener("click", function () {
                const query = searchInput.value.trim();
                if (query) {
                    alert(`Searching for: ${query}`);
                    searchInput.value = "";
                }
            });

            searchInput.addEventListener("keypress", function (e) {
                if (e.key === "Enter") {
                    const query = searchInput.value.trim();
                    if (query) {
                        alert(`Searching for: ${query}`);
                        searchInput.value = "";
                    }
                }
            });
        }

        // Highlight active page in navigation
        const navLinks = document.querySelectorAll(".main-nav a");
        navLinks.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add("active");
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                if (targetId !== "#") {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                }
            });
        });
    });
});