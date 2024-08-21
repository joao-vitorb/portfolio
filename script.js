document.getElementById('plusButton').addEventListener('click', function() {
    const options = document.getElementById('options');
    const plusButtonIcon = document.querySelector('#plusButton i');

    if (options.classList.contains('show-options')) {
        // Oculta as opções e remove a rotação do ícone
        options.classList.remove('show-options');
        plusButtonIcon.classList.remove('rotate-icon');

        // Esconde as opções após a animação
        setTimeout(() => {
            options.style.display = 'none';
            document.body.classList.remove('dark-bg');
        }, 350); // Tempo igual ao maior delay de transição (0.35s)
    } else {
        // Exibe as opções antes da animação
        options.style.display = 'flex';

        // Atrasar para permitir que a exibição aconteça antes de aplicar as animações
        setTimeout(() => {
            options.classList.add('show-options');
            plusButtonIcon.classList.add('rotate-icon');
        }, 0);

        document.body.classList.add('dark-bg');
    }
});
