window.addEventListener("scroll", function () {
  const arrow = document.querySelector(".arrow-down");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const opacity = 1 - scrollTop / windowHeight;
  arrow.style.opacity = Math.max(opacity, 0);
});
