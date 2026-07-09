// Troca a classe do body para indicar que o JavaScript carregou.
// Sem JS, a classe "no-js" deixa o conteudo visivel do mesmo jeito.
document.body.classList.remove("no-js");
document.body.classList.add("js");

// Elementos usados no menu mobile.
const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

// Abre ou fecha o menu quando o usuario clica no botao hamburguer.
menuToggle?.addEventListener("click", () => {
  menu?.classList.toggle("is-open");
  document.body.classList.toggle("menu-open");
});

// Fecha o menu mobile quando o usuario clica em algum link.
menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  });
});

// Observa os elementos com classe .reveal para fazer animacao ao aparecer na tela.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

// Ativa a observacao em todos os elementos marcados com .reveal.
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

// Depois que a pagina carrega, pede para o Instagram montar os embeds dos posts.
window.addEventListener("load", () => {
  window.instgrm?.Embeds?.process();
});
