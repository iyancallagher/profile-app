// Dark Mode Toggle
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Typing Effect
const text = ["Adriansyah Amir", "Web Developer", "Backend Developer"];
let i = 0, j = 0;
let isDeleting = false;
let delayAfterTyping = false;
const typed = document.querySelector(".typed");

function type() {
  // Update current text
  let currentText = text[i];

  if (!delayAfterTyping) {
    if (!isDeleting) {
      // Mengetik satu per satu
      j++;
      typed.textContent = currentText.substring(0, j);
      if (j === currentText.length) {
        delayAfterTyping = true;
        setTimeout(() => {
          delayAfterTyping = false;
          isDeleting = true;
          type(); // lanjut ke delete
        }, 1500); // jeda setelah selesai mengetik
        return;
      }
    } else {
      // Menghapus satu per satu
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
