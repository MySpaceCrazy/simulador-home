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
const scrollToTop = document.getElementById('scrollToTop');
const helpButton = document.getElementById('helpButton');
const helpPopup = document.getElementById('helpPopup');
const helpPopupBg = document.getElementById('helpPopupBg');
const closeHelpPopup = document.getElementById('closeHelpPopup');

// Adiciona o evento de clique para abrir/fechar o menu dropdown
if (menuButton && menuDropdown) {
    menuDropdown.style.display = 'none'; // Esconde o menu dropdown inicialmente
} else {
    console.error('Menu button or dropdown not found');
}
if (sobreBtn) {
    sobreBtn.style.display = 'block'; // Exibe o botão de Sobre
} else {
    console.error('Sobre button not found');
}
if (closePopup) {
    closePopup.style.display = 'block'; // Exibe o botão de fechar popup
} else {
    console.error('Close popup button not found');
}
if (contatoBtn) {
    contatoBtn.style.display = 'block'; // Exibe o botão de Contato
} else {
    console.error('Contato button not found');
}
if (menuDropdown) {
    if (sobreBtn && sobrePopup) {
        sobrePopup.style.display = 'none'; // Esconde o popup de Sobre inicialmente
    } else {
        console.error('Sobre button or popup not found');
    }
    if (closePopup) {
        closePopup.style.cursor = 'pointer'; // Adiciona cursor de ponteiro ao botão
    } else {
        console.error('Close popup button not found');
    }
    if (contatoBtn) {
        contatoBtn.style.cursor = 'pointer'; // Adiciona cursor de ponteiro ao botão
    } else {
        console.error('Contato button not found');
    }
    if (menuButton) {
        menuButton.style.cursor = 'pointer'; // Adiciona cursor de ponteiro ao botão
    } else {
        console.error('Menu button not found');
    }
    if (sobreBtn) {
        sobreBtn.style.cursor = 'pointer'; // Adiciona cursor de ponteiro ao botão
    } else {
        console.error('Sobre button not found');
    }
    menuDropdown.style.cursor = 'pointer'; // Adiciona cursor de ponteiro ao menu
    if (sobrePopup) {
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
    }
} // <-- Corrige o fechamento do bloco if (menuDropdown)

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

// Efeito de animação para o botão Voltar ao Topo
if (scrollToTop) {
    scrollToTop.addEventListener('mouseover', () => {
        scrollToTop.style.transform = 'scale(1.1)';
    });
    scrollToTop.addEventListener('mouseout', () => {
        scrollToTop.style.transform = 'scale(1)';
    });
}

// Efeito de animação para o botão de ajuda
if (helpButton && helpPopup && helpPopupBg) {
    helpButton.addEventListener('click', () => {
        helpPopup.style.display = 'flex';
        helpPopupBg.style.display = 'block';
    });
    helpPopupBg.addEventListener('click', () => {
        helpPopup.style.display = 'none';
        helpPopupBg.style.display = 'none';
    });
    closeHelpPopup.addEventListener('click', () => {
        helpPopup.style.display = 'none';
        helpPopupBg.style.display = 'none';
    });
    closeHelpPopup.style.cursor = 'pointer';
    closeHelpPopup.addEventListener('mouseover', () => {
        closeHelpPopup.style.transform = 'scale(1.1)';
    });
    closeHelpPopup.addEventListener('mouseout', () => {
        closeHelpPopup.style.transform = 'scale(1)';
    });
} else {
    console.error('Close help popup button not found');
}
helpButton.addEventListener('mouseover', () => {
    helpButton.style.transform = 'scale(1.1)';
});
helpButton.addEventListener('mouseout', () => {
    helpButton.style.transform = 'scale(1)';
});

// Efeito de animação para o botão de contato
if (contatoBtn) {
    contatoBtn.addEventListener('mouseover', () => {
        contatoBtn.style.transform = 'scale(1.1)';
    });
    contatoBtn.addEventListener('mouseout', () => {
        contatoBtn.style.transform = 'scale(1)';
    });
}

// Efeito de animação para o botão de sobre
if (sobreBtn) {
    sobreBtn.addEventListener('mouseover', () => {
        sobreBtn.style.transform = 'scale(1.1)';
    });
    sobreBtn.addEventListener('mouseout', () => {
        sobreBtn.style.transform = 'scale(1)';
    });
}

// Efeito de animação para o botão de fechar popup
if (closePopup) {
    closePopup.addEventListener('mouseover', () => {
        closePopup.style.transform = 'scale(1.1)';
    });
    closePopup.addEventListener('mouseout', () => {
        closePopup.style.transform = 'scale(1)';
    });
}

// Efeito de animação para o botão de menu
if (menuButton) {
    menuButton.addEventListener('mouseover', () => {
        menuButton.style.transform = 'scale(1.1)';
    });
    menuButton.addEventListener('mouseout', () => {
        menuButton.style.transform = 'scale(1)';
    });
}

// Efeito de animação para o menu dropdown
if (menuDropdown) {
    menuDropdown.addEventListener('mouseover', () => {
        menuDropdown.style.transform = 'scale(1.05)';
    });
    menuDropdown.addEventListener('mouseout', () => {
        menuDropdown.style.transform = 'scale(1)';
    });
}

// Efeito de animação para os cards de aplicativos
document.querySelectorAll('.app-card').forEach((card) => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px) scale(1.05)';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});
helpPopup.addEventListener('mouseover', () => {
    helpPopup.style.transform = 'scale(1.05)';
});
helpPopup.addEventListener('mouseout', () => {
    helpPopup.style.transform = 'scale(1)';
});