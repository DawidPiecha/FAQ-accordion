const buttons = document.querySelectorAll(".container__question-button");

const toggleHidden = (event) => {
  const button = event.target.closest(".container__question-button");

  if (button) {
    const answer = button.parentNode.nextElementSibling;
    answer.classList.toggle("is-hidden");

    const image = button.querySelector(".container__icon");

    if (answer.classList.contains("is-hidden")) {
      image.setAttribute("href", "./assets/images/icon-plus.svg");
    } else {
      image.setAttribute("href", "./assets/images/icon-minus.svg");
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", toggleHidden);
});
