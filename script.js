document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburgerMenu && navMenu) {
        hamburgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('is-active');
        });

        // Fechar o menu quando um link é clicado
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburgerMenu.classList.remove('is-active');
                }
            });
        });

        // Fechar menu ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (!hamburgerMenu.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburgerMenu.classList.remove('is-active');
            }
        });
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});