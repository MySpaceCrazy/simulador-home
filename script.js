// ======= Função Utilitária =======
function togglePopup(popupId, show) {
  const popup = document.getElementById(popupId);
  popup.style.display = show ? "flex" : "none";
}

// ======= Botões de Popups =======
document.getElementById("sobreBtn").addEventListener("click", () => {
  togglePopup("sobrePopup", true);
});

document.getElementById("contatoBtn").addEventListener("click", () => {
  togglePopup("contatoPopup", true);
});

document.getElementById("ajudaBtn").addEventListener("click", () => {
  togglePopup("ajudaPopup", true);
});

// ======= Fechar Popups =======
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".popup").style.display = "none";
  });
});

// Fechar popup clicando fora do conteúdo
window.addEventListener("click", (e) => {
  if (e.target.classList.contains("popup")) {
    e.target.style.display = "none";
  }
});

// ======= Scroll to Top =======
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ======= Animação de Entrada dos Cards =======
const cards = document.querySelectorAll(".card-base");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "all 0.6s ease-out";
  observer.observe(card);
});
