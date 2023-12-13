const formPesquisa = document.querySelector('.form__pesquisa');

formPesquisa.addEventListener('submit', (evento) => {
  evento.preventDefault();
});

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
  const videos = document.querySelectorAll(".videos__item");

  if (barraDePesquisa.value != "") {
    for (const video of videos) {
      let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
      let valorFiltro = barraDePesquisa.value.toLowerCase();

      if (!titulo.includes(valorFiltro)) {
        video.style.display = "none";
      } else {
        video.style.display = "block";
      }

    }
  } else {
    for (const video of videos) {
      video.style.display = "block";
    }
  }
}