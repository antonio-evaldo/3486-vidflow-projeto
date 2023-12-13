const tabList = document.querySelector('[role="tablist"]');
const botoesCategorias = document.querySelectorAll(".botao-categoria");

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelecionada = botao.getAttribute("name");

    filtrarPorCategoria(categoriaSelecionada);
    atualizarEstadosDosBotoes(categoriaSelecionada);
  });

  botao.addEventListener("keydown", mudarFocoPorTeclado);
});

function filtrarPorCategoria(filtro) {
  const videos = document.querySelectorAll(".videos__item");

  for (const video of videos) {
    const categoria = video.querySelector(".categoria").textContent.toLowerCase();
    const valorFiltro = filtro.toLowerCase();

    if (!categoria.includes(valorFiltro) && valorFiltro !== 'tudo') {
      video.style.display = "none";
    } else {
      video.style.display = "block";
    }
  }
}

function atualizarEstadosDosBotoes(categoriaSelecionada) {
  botoesCategorias.forEach((botao) => {
    const botaoFoiSelecionado = botao.getAttribute("name") === categoriaSelecionada;

    botao.setAttribute("aria-selected", botaoFoiSelecionado);
    botao.setAttribute("tabindex", botaoFoiSelecionado ? 0 : -1);
  })
}

function mudarFocoPorTeclado(evento) {
  const botaoAtual = evento.target;

  if (evento.key === "ArrowRight") {
    if (botaoAtual === tabList.lastElementChild) {
      tabList.firstElementChild.focus();
    } else {
      botaoAtual.nextElementSibling.focus();
    }
  } else if (evento.key === "ArrowLeft") {
    if (botaoAtual === tabList.firstElementChild) {
      tabList.lastElementChild.focus();
    } else {
      botaoAtual.previousElementSibling.focus();
    }
  }
}
