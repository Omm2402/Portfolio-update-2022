window.onload = () => {
  const navMenu = document.querySelector(".nav-menu");
  const navItems = document.querySelectorAll(".nav-item");
  const hamburger = document.querySelector(".nav-toggle");

  const toggle = (e) => e.classList.toggle("is-active");
  const toggleNav = ({ target }) =>
    Array.from(navMenu.classList).includes("is-active")
      ? toggle(navMenu)
      : null;

  hamburger.addEventListener("click", () => toggle(navMenu, "is-active"));
  Array.from(navItems).forEach((e) => e.addEventListener("click", toggleNav));
};

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("contactForm").reset();
}
