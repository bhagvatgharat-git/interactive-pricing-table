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
const toggle = document.getElementById("priceToggle");
const prices = document.querySelectorAll(".price");

toggle.addEventListener("change", () => {
  prices.forEach(price => {
    if (toggle.checked) {
      price.textContent = `$${price.dataset.yearly}/year`;
    } else {
      price.textContent = `$${price.dataset.monthly}/month`;
    }
  });
});