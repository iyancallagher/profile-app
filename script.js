// ===== Dark Mode Persistence =====
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark");
  }

  const toggle = document.getElementById("toggle-theme");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem(
        "mode",
        document.body.classList.contains("dark") ? "dark" : "light"
      );
    });
  }
});

// ===== Typing Effect (optional) =====
const text = ["Adriansyah Amir", "Web Developer", "Backend Developer"];
let i = 0,
  j = 0;
let isDeleting = false;
let delayAfterTyping = false;
const typed = document.querySelector(".typed");

function type() {
  if (!typed) return;

  let currentText = text[i];

  if (!delayAfterTyping) {
    if (!isDeleting) {
      j++;
      typed.textContent = currentText.substring(0, j);
      if (j === currentText.length) {
        delayAfterTyping = true;
        setTimeout(() => {
          delayAfterTyping = false;
          isDeleting = true;
          type();
        }, 1500);
        return;
      }
    } else {
      j--;
      typed.textContent = currentText.substring(0, j);
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
      }
    }
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();
