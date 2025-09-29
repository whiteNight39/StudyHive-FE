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

// 🔹 Helper to set cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000)); // days → ms
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
}

// 🔹 Helper to get cookie (optional, for later)
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length));
  }
  return null;
}