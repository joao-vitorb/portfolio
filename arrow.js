window.addEventListener('scroll', function() {
    const arrow = document.querySelector('.arrow-down');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    
    // Calcule a opacidade com base na rolagem
    const opacity = 1 - (scrollTop / windowHeight);

    // Limita a opacidade para que nunca fique abaixo de 0
    arrow.style.opacity = Math.max(opacity, 0);
});
