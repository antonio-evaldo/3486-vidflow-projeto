const containerVideos = document.querySelector(".videos__container");

async function buscarEMostrarVideos() {
  try {
    const busca = await fetch("http://localhost:3000/videos");
    const videos = await busca.json();

    videos.forEach((video) => {
      if (video.categoria == "") {
        throw new Error('Vídeo não tem categoria');
      }
      containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem} alt="Logo do Canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
                <p class="categoria" hidden>${video.categoria}</p>
            </div>
        </li>
      `;
    })
  } catch (error) {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
  }
}

buscarEMostrarVideos();

const form = document.querySelector('.form__pesquisa');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  // filtrarPesquisa();
});

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa() {
  const videos = document.querySelectorAll(".videos__item");

  if (barraDePesquisa.value != "") {
    for (let video of videos) {
      let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
      let valorFiltro = barraDePesquisa.value.toLowerCase();

      if (!titulo.includes(valorFiltro)) {
        video.style.display = "none";
      } else {
        video.style.display = "block";
      }

    }
  } else {
    for (let video of videos) {
      video.style.display = "block";
    }
  }
}

const botoesCategorias = document.querySelectorAll(".superior__item");

botoesCategorias.forEach((botao) => {
  botao.addEventListener("click", () => {
    const categoriaSelecionada = botao.getAttribute("name");

    filtrarPorCategoria(categoriaSelecionada);
    atualizarEstadosDosBotoes(categoriaSelecionada);
  });
});

function atualizarEstadosDosBotoes(categoriaSelecionada) {
  botoesCategorias.forEach((botao) => {
    botao.ariaPressed = botao.getAttribute("name") === categoriaSelecionada;
  })
}

function filtrarPorCategoria(filtro) {
  const videos = document.querySelectorAll(".videos__item");
  for (let video of videos) {
    let categoria = video.querySelector(".categoria").textContent.toLowerCase();
    let valorFiltro = filtro.toLowerCase();

    if (!categoria.includes(valorFiltro) && valorFiltro != 'tudo') {
      video.style.display = "none";
    } else {
      video.style.display = "block";
    }
  }
}

const darkModeBotao = document.querySelector(".cabecalho__switch-input");

darkModeBotao.addEventListener("change", () => {
  const root = document.querySelector(":root");
  root.classList.toggle("dark-mode", darkModeBotao.checked);
});
