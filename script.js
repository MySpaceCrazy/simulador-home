// Efeito de opacidade no título ao rolar a página
window.addEventListener("scroll", () => {
    const header = document.querySelector(".hero h1");
    header.style.opacity = window.scrollY > 50 ? "0.5" : "1";

    // Mostrar ou esconder o botão Voltar ao Topo
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

// Menu suspenso
const menuButton = document.getElementById('menuButton');
const menuDropdown = document.getElementById('menuDropdown');
const sobreBtn = document.getElementById('sobreBtn');
const sobrePopup = document.getElementById('sobrePopup');
const closePopup = document.getElementById('closePopup');
const contatoBtn = document.getElementById('contatoBtn');

menuButton.addEventListener('click', () => {
    menuDropdown.style.display = menuDropdown.style.display === 'flex' ? 'none' : 'flex';
});

sobreBtn.addEventListener('click', () => {
    sobrePopup.style.display = 'flex';
    menuDropdown.style.display = 'none';
});

closePopup.addEventListener('click', () => {
    sobrePopup.style.display = 'none';
});

contatoBtn.addEventListener('click', () => {
    document.querySelector('.footer').scrollIntoView({ behavior: 'smooth' });
    menuDropdown.style.display = 'none';
});

// Hover nos cards
document.querySelectorAll('.app-card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
    card.addEventListener('click', () => {
        const appName = card.querySelector('h3').textContent;
        alert(`Você clicou no card do ${appName}`);
    });
});

// Efeito de rolagem suave para o topo
const scrollToTopButton = document.getElementById('scrollToTop');
if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Função genérica para animar elementos ao entrar na tela
function animarEntrada(seletor) {
    const elementos = document.querySelectorAll(seletor);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.classList.add('hidden');
        observer.observe(el);
    });
}

// Aplicação das animações
window.addEventListener('load', () => {
    animarEntrada('.app-card');
    animarEntrada('.section-title');
    animarEntrada('.footer');
    animarEntrada('.footer img');
    animarEntrada('.footer h2');
    animarEntrada('.footer p');
    animarEntrada('.footer .btn');
    animarEntrada('#scrollToTop');
    animarEntrada('#menuButton');
    animarEntrada('#sobreBtn');
    animarEntrada('#closePopup');
    animarEntrada('#contatoBtn');
    animarEntrada('.menu-dropdown');
});
