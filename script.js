// Dark Mode toggle (already there)
const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Load preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Toggle event
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();
