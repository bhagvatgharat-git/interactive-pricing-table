const buttons = document.querySelectorAll(".expand-btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const info = button.nextElementSibling;

    if (info.style.display === "block") {
      info.style.display = "none";
      button.textContent = "More Details ▼";
    } else {
      info.style.display = "block";
      button.textContent = "Less Details ▲";
    }
  });
});