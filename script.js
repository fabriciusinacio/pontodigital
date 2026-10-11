// ALTERE ESTE NÚMERO PARA O SEU WHATSAPP
const WHATSAPP_NUMBER = "5599999999999";

// ALTERE AQUI SEUS LINKS PRINCIPAIS
const EMAIL_ADDRESS = "contato@seudominio.com";

const whatsappMessage = encodeURIComponent(
  "Olá! Quero conversar sobre a presença da minha empresa no Google."
);

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});

const emailLink = document.querySelector('.footer a[href^="mailto:"]');
if (emailLink) emailLink.setAttribute("href", `mailto:${EMAIL_ADDRESS}`);

const year = document.querySelector("#current-year");
if (year) year.textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    if (!targetId || targetId === "#") return;
    const target = document.querySelector(targetId);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});
