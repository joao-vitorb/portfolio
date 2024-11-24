const words = ["Front-end", "Web", "Mobile", "React"];
let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const deletingSpeed = 100;
const pauseBetweenWords = 3000;
const textElement = document.getElementById("animated-text");

function type() {
  const currentWord = words[currentIndex];

  textElement.textContent = currentWord.slice(0, charIndex);

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    textElement.classList.remove("blinking");
    textElement.classList.add("solid");
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    textElement.classList.remove("blinking");
    textElement.classList.add("solid");
    setTimeout(type, deletingSpeed);
  } else if (!isDeleting && charIndex === currentWord.length) {
    textElement.classList.remove("solid");
    textElement.classList.add("blinking");
    setTimeout(() => (isDeleting = true), pauseBetweenWords);
    setTimeout(type, pauseBetweenWords);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    currentIndex = (currentIndex + 1) % words.length;
    textElement.classList.remove("blinking");
    textElement.classList.add("solid");
    setTimeout(type, typingSpeed);
  }
}

type();
