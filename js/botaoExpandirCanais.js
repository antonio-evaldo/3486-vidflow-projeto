const canaisEscondidos = document.querySelectorAll(":nth-child(n + 6 of .menu__canal)");

canaisEscondidos.forEach(canal => {
  canal.classList.add("canal-escondido");
});

const botaoExpandirCanais = document.querySelector(".menu__expandir-canais");

botaoExpandirCanais.addEventListener("click", () => {
  const canaisEstaoExpandidos = botaoExpandirCanais.ariaExpanded === "true";

  if (!canaisEstaoExpandidos) {
    botaoExpandirCanais.ariaExpanded = "true";
    botaoExpandirCanais.innerHTML = `
      <i class="icone__mostrar icone__mostrar-rotacionado"></i>
      <span class="texto-colapsar-canais">Mostrar menos</span>
    `;
  } else {
    botaoExpandirCanais.ariaExpanded = "false";
    botaoExpandirCanais.innerHTML = `
      <i class="icone__mostrar"></i>
      <span class="texto-colapsar-canais">Mostrar mais</span>
    `;
  }

  canaisEscondidos.forEach((canal) => {
    canal.classList.toggle("canal-escondido");
  });
});
