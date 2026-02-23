//Js para interatividade do site Simulador Home
// Seleção de elementos principais
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

// Efeito de opacidade no título e botão Voltar ao Topo
window.addEventListener("scroll", () => {
  const header = document.querySelector(".hero h1");
  if (header) {
    header.style.opacity = window.scrollY > 50 ? "0.5" : "1";
  }

  if (scrollToTop) {
    if (window.scrollY > 200) {
      scrollToTop.classList.add('show');
    } else {
      scrollToTop.classList.remove('show');
    }
  }
});
if (menuButton && menuDropdown) {
  menuDropdown.style.display = 'none';

  menuButton.style.cursor = 'pointer';
  menuDropdown.style.cursor = 'pointer';

  menuButton.addEventListener('click', () => {
    menuDropdown.style.display = menuDropdown.style.display === 'flex' ? 'none' : 'flex';
  });
}

if (sobreBtn && sobrePopup && closePopup) {
  sobrePopup.style.display = 'none';

  sobreBtn.style.display = 'block';
  sobreBtn.style.cursor = 'pointer';

  closePopup.style.display = 'block';
  closePopup.style.cursor = 'pointer';

  sobreBtn.addEventListener('click', () => {
    sobrePopup.style.display = 'flex';
    menuDropdown.style.display = 'none';
  });

  closePopup.addEventListener('click', () => {
    sobrePopup.style.display = 'none';
  });

  // Botões hover efeito
  ['mouseover', 'mouseout'].forEach(evt => {
    sobreBtn.addEventListener(evt, e => {
      sobreBtn.style.transform = evt === 'mouseover' ? 'scale(1.1)' : 'scale(1)';
    });
    closePopup.addEventListener(evt, e => {
      closePopup.style.transform = evt === 'mouseover' ? 'scale(1.1)' : 'scale(1)';
    });
  });
}

if (contatoBtn) {
  contatoBtn.style.display = 'block';
  contatoBtn.style.cursor = 'pointer';

  contatoBtn.addEventListener('click', () => {
    document.querySelector('.footer')?.scrollIntoView({ behavior: 'smooth' });
    if (menuDropdown) menuDropdown.style.display = 'none';
  });

  contatoBtn.addEventListener('mouseover', () => contatoBtn.style.transform = 'scale(1.1)');
  contatoBtn.addEventListener('mouseout', () => contatoBtn.style.transform = 'scale(1)');
}

// Cards animação e clique
document.querySelectorAll('.app-card,.app-card-bin').forEach(card => {
  card.style.cursor = 'pointer';

  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px) scale(1.05)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
  card.addEventListener('click', () => {
    const appName = card.querySelector('h3')?.textContent || 'aplicativo';
    alert(`Você clicou no card do ${appName}`);
  });
});

// Scroll para topo botão
if (scrollToTop) {
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  scrollToTop.addEventListener('mouseover', () => scrollToTop.style.transform = 'scale(1.1)');
  scrollToTop.addEventListener('mouseout', () => scrollToTop.style.transform = 'scale(1)');
}
if (helpButton && helpPopup && helpPopupBg && closeHelpPopup) {
  // Inicialmente ocultos
  helpPopup.style.display = 'none';
  helpPopupBg.style.display = 'none';

  helpButton.style.cursor = 'pointer';
  closeHelpPopup.style.cursor = 'pointer';

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

  // Hover efeitos para botões ajuda
  helpButton.addEventListener('mouseover', () => helpButton.style.transform = 'scale(1.1)');
  helpButton.addEventListener('mouseout', () => helpButton.style.transform = 'scale(1)');
  closeHelpPopup.addEventListener('mouseover', () => closeHelpPopup.style.transform = 'scale(1.1)');
  closeHelpPopup.addEventListener('mouseout', () => closeHelpPopup.style.transform = 'scale(1)');

  // Hover efeito para popup ajuda
  helpPopup.addEventListener('mouseover', () => helpPopup.style.transform = 'scale(1.05)');
  helpPopup.addEventListener('mouseout', () => helpPopup.style.transform = 'scale(1)');
} else {
  console.error('Algum elemento do popup de ajuda não foi encontrado');
}

// Função para animar elementos ao entrarem na viewport
function animarEntrada(seletor) {
  const elementos = document.querySelectorAll(seletor);
  const observer = new IntersectionObserver((entries, observer) => {
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

// Ao carregar a página, aplica as animações
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
// Animações hover para botões principais
const hoverScale = (el) => {
  el.addEventListener('mouseover', () => { el.style.transform = 'scale(1.1)'; });
  el.addEventListener('mouseout', () => { el.style.transform = 'scale(1)'; });
};

// Botões: scrollToTop, contato, sobre, fechar popup, menu
if (scrollToTop) hoverScale(scrollToTop);
if (contatoBtn) hoverScale(contatoBtn);
if (sobreBtn) hoverScale(sobreBtn);
if (closePopup) hoverScale(closePopup);
if (menuButton) hoverScale(menuButton);

// Animações hover para menu dropdown
if (menuDropdown) {
  menuDropdown.addEventListener('mouseover', () => { menuDropdown.style.transform = 'scale(1.05)'; });
  menuDropdown.addEventListener('mouseout', () => { menuDropdown.style.transform = 'scale(1)'; });
}

// Animações hover para os cards dos apps
document.querySelectorAll('.app-card,.app-card-bin').forEach(card => {
  card.addEventListener('mouseover', () => {
    card.style.transform = 'translateY(-10px) scale(1.05)';
  });
  card.addEventListener('mouseout', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});

// Evento clique nos cards para alertar nome do app
/*document.querySelectorAll('.app-card,.app-card-bin').forEach(card => {
  card.addEventListener('click', () => {
    const appName = card.querySelector('h3').textContent;
    alert(`Você clicou no card do ${appName}`);
  });
});*/

document.querySelectorAll('.app-card,.app-card-bin').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.querySelector('a').href;
    window.open(link, '_blank');
  });
});

// Scroll suave para topo ao clicar no botão
if (scrollToTop) {
  scrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Referências adicionais para o popup Sobre e Contato
const popupBg = document.getElementById('popupBg');
const contatoPopup = document.getElementById('contatoPopup');
const closeContatoPopup = document.getElementById('closeContatoPopup');

// Ajusta links do menu que tem href="#" para evitar scroll padrão
document.querySelectorAll('.menu-dropdown a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => e.preventDefault());
});

// Controle do popup "Sobre" e fundo escuro
if (sobreBtn && sobrePopup && popupBg && closePopup) {
    sobreBtn.addEventListener('click', () => {
        sobrePopup.style.display = 'flex';
        popupBg.style.display = 'block';      // mostra fundo escuro
        menuDropdown.style.display = 'none';  // fecha menu dropdown
    });

    closePopup.addEventListener('click', () => {
        sobrePopup.style.display = 'none';
        popupBg.style.display = 'none';       // esconde fundo escuro
    });

    // Fecha popup "Sobre" ao clicar no fundo escuro também (opcional)
    popupBg.addEventListener('click', () => {
        sobrePopup.style.display = 'none';
        popupBg.style.display = 'none';
    });
}

// Controle do popup "Contato"
if (contatoBtn && contatoPopup && closeContatoPopup) {
    contatoBtn.addEventListener('click', () => {
        contatoPopup.style.display = 'flex';
        popupBg.style.display = 'block';      // usa mesmo fundo escuro
        menuDropdown.style.display = 'none';  // fecha menu dropdown
    });

    closeContatoPopup.addEventListener('click', () => {
        contatoPopup.style.display = 'none';
        popupBg.style.display = 'none';
    });

    // Fecha popup Contato ao clicar no fundo escuro (mesmo popupBg)
    popupBg.addEventListener('click', () => {
        if (contatoPopup.style.display === 'flex') {
            contatoPopup.style.display = 'none';
            popupBg.style.display = 'none';
        }
    });
}

// Função de rolagem lenta personalizada
function scrollToElementSlow(element, duration = 4000) {
  const start = window.scrollY;
  const end = element.getBoundingClientRect().top + window.scrollY;
  const distance = end - start;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    // Movimento suave (ease-in-out)
    const ease = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, start + distance * ease);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

// Auto scroll após carregar a página
window.addEventListener('load', () => {
  setTimeout(() => {
    const simuladores = document.querySelector('.apps');
    if (simuladores) {
      scrollToElementSlow(simuladores, 4000); // 4s de rolagem
    }
  }, 2000); // 3s de delay antes de começar
});
