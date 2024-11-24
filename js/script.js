document.getElementById("plusButton").addEventListener("click", function () {
  const options = document.getElementById("options");
  const plusButtonIcon = document.querySelector("#plusButton i");

  if (options.classList.contains("show-options")) {
    options.classList.remove("show-options");
    plusButtonIcon.classList.remove("rotate-icon");
    plusButtonIcon.classList.add("rotate-icon-reverse");

    setTimeout(() => {
      options.style.display = "none";
      document.body.classList.remove("dark-bg");
    }, 350);
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
