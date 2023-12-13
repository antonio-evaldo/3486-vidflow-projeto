const canaisExtras = document.querySelectorAll(".menu__canal.canal-escondido");

const botaoExpandirCanais = document.querySelector(".menu__botao-expandir-canais");

botaoExpandirCanais.addEventListener("click", () => {
  canaisExtras.forEach((canal) => {
    canal.classList.toggle("canal-escondido");
  });

  if (botaoExpandirCanais.ariaExpanded === "false") {
    botaoExpandirCanais.ariaExpanded = "true";

    botaoExpandirCanais.innerHTML = `
      <i class="icone__mostrar icone__mostrar-rotacionado"></i>
      <span class="texto-colapsar-canais">Mostrar menos</span>
    `;
  } else {
    botaoExpandirCanais.ariaExpanded = "false";
    botaoExpandirCanais.innerHTML = `
      <i class="icone__mostrar"></i>
      <span class="texto-colapsar-canais">Mostrar mais 2</span>
    `;
  }
});
