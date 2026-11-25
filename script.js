
// Get theme toggle button
const themeToggle = document.getElementById("theme-toggle");

// Get saved theme from browser storage
const savedTheme = localStorage.getItem("portfolio-theme");

// Apply previously saved theme
if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

// Update theme button text
function updateThemeButton() {

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight
        ? "🌙 Dark Mode"
        : "☀️ Light Mode";
}

// Set initial button text
updateThemeButton();

// Theme switching functionality
themeToggle.addEventListener("click", function () {

    // Toggle between dark and light themes
    document.body.classList.toggle("light-theme");

    // Check active theme
    const isLight = document.body.classList.contains("light-theme");

    // Save preference in browser
    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    // Update button label
    updateThemeButton();

});


// =================================
// NAVIGATION INTERACTION


/* Mobile navigation menu */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// =================================

// Close mobile navigation is not needed yet.
// Smooth scrolling is handled by CSS.


// =================================
// CONSOLE MESSAGE
// =================================

console.log("Welcome to Reshma's Portfolio!");
console.log("Portfolio JavaScript loaded successfully.");
