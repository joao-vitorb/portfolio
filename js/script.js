const plusButton = document.getElementById("plusButton");
const options = document.getElementById("options");
const plusButtonIcon = document.querySelector("#plusButton i");

function closeOptions() {
  options.classList.remove("show-options");
  plusButtonIcon.classList.remove("rotate-icon");
  plusButtonIcon.classList.add("rotate-icon-reverse");

  setTimeout(() => {
    options.style.display = "none";
    document.body.classList.remove("dark-bg");
  }, 350);
}

plusButton.addEventListener("click", function (event) {
  event.stopPropagation();
  if (options.classList.contains("show-options")) {
    closeOptions();
  } else {
    options.style.display = "flex";

    setTimeout(() => {
      options.classList.add("show-options");
      plusButtonIcon.classList.remove("rotate-icon-reverse");
      plusButtonIcon.classList.add("rotate-icon");
    }, 0);

    document.body.classList.add("dark-bg");
  }
});

document.addEventListener("click", function (event) {
  const isClickInside = plusButton.contains(event.target) || options.contains(event.target);
  if (!isClickInside && options.classList.contains("show-options")) {
    closeOptions();
  }
});
