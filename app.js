// SWIPER CAROUSEL / SLIDER

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// FANCYBOX / LIGHTBOX EFFECT

Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const photos = [
    {
        name: "Os NAPA",
        img: "napa01.jpg",
    },
    {
        name: "Os NAPA 2",
        img: "napa02.jpg",
    },
    {
        name: "Capa do disco Logo se Vê",
        img: "napa03.jpg",
    },
    {
        name: "Capa do disco Senso Comum",
        img: "napa04.jpg",
    },
    {
        name: "Os NAPA 3",
        img: "napa05.jpg",
    },
];

const videos = [
    {
        name: "NAPA - Luz do Túnel",
        id: "op0jaZ6zXsg",
    },
    {
        name: "NAPA - Areia",
        id: "XesDdEy3Gxk",
    },
    {
        name: "NAPA - Se eu Morrese Amanhã",
        id: "hCI8ki34p1E",
    },
    {
        name: "NAPA - Assim, sem fim",
        id: "QIQKxB-nkiI",
    },
];

const noticiasLista = [
    {
        titulo: "Os Napa, banda da ilha da Madeira",
        img: "noticia01.jpg",
        resumo: "Da ilha da Madeira para o mundo. Os Napa já foram Men on the Couch, hoje apresentam-se como banda 100% em português. Ficámos a saber mais sobre a transição do nome da banda e o novo disco: Logo se vê.",
        data: "25/05/2023",
        link: "https://rdpinternacional.rtp.pt/cultura/os-napa-banda-da-ilha-da-madeira"
    },
    {
        titulo: "NAPA editam segundo álbum[...]",
        img: "noticia01.jpg",
        resumo: "Editado na passada sexta-feira, 26 de maio, o segundo álbum dos NAPA, 'Logo Se Vê', marca o início de uma nova fase da banda madeirense.",
        data: "28/05/2023",
        link: "https://mag.sapo.pt/musica/artigos/napa-editam-segundo-album-com-uma-roupagem-mais-madura-mas-um-espirito-sempre-moco-ouca-aqui-logo-se-ve"
    },
    {
        titulo: "Em Maio, disseram Logo Se Vê[...]]",
        img: "noticia01.jpg",
        resumo: "O primeiro álbum, Senso Comum, lançado em 2019, ainda o gravaram como Men On The Couch, mas o segundo, Logo Se Vê, publicado em Maio passado, já trouxe o nome que em definitivo decidiram dar à banda: Napa.",
        data: "08/07/2023",
        link: "https://www.publico.pt/2023/07/08/culturaipsilon/video/maio-disseram-logo-ve-daonos-ouvir-gigantes-sao-napa-20230706-234540"
    },
];

function galeria() {
    const galeriaGrelha = document.querySelector("#galeria-grelha");

    for (photo of photos) {
        let codigo;

        codigo = `
          <div class="col">
              <figure>
                  <a href="img/${photo.img}" data-fancybox="comida" data-caption="${photo.name}">
                      <img src="img/${photo.img}" alt="" class="img-fluid">
                      <figcaption>${photo.name}</figcaption>
                  </a>
              </figure>
          </div>
        `;
        galeriaGrelha.innerHTML += codigo;
    }
}

function galeriaVideos() {
    const videosGrelha = document.querySelector("#videos-grelha");

    for (video of videos) {
        let codigo;

        codigo = `
          <div class="col">
              <figure>
                  <a href="https://youtu.be/${video.id}" data-fancybox="comida" data-caption="${photo.name}">
                      <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="" class="img-fluid">
                      <figcaption>${video.name}</figcaption>
                  </a>
              </figure>
          </div>
        `;
        videosGrelha.innerHTML += codigo;
    }
}

function noticias() {
    const noticiasGrelha = document.querySelector("#noticias-grelha");

    for (noticia of noticiasLista) {
        let codigo;

        codigo = `
            <div class="col noticia-item">
                <div class="row">
                    <div class="col-12 col-sm-3 order-2 order-sm-1">
                        <a href="${noticia.link}" target="_blank">
                            <img src="img/${noticia.img}" alt="">
                        </a>
                    </div>
                    <div class="col order-1 order-sm-2">
                        <h3>${noticia.titulo}</h3>
                        <p class="d-none d-sm-block">${noticia.resumo}</p>
                        <span>${noticia.data}</span>
                    </div>
                </div>
            </div>
        `;
        noticiasGrelha.innerHTML += codigo;
    }
}


function validateForm(){
    const listaInputsErro = document.querySelectorAll(".input-erro");
    listaInputsErro.forEach((input) => {
        input.classList.remove("input-erro");
    })
    const formNome = document.querySelector("#nome");
    const formEmail = document.querySelector("#email");
    const formTel = document.querySelector("#telefone");
    const formMensagem = document.querySelector("#mensagem");
    let msgErro = "";

    if (formNome.value.trim() == ""){
        msgErro += "\n- Nome";
        formNome.classList.add("input-erro");
    }  
    if (formEmail.value == ""){
        msgErro += "\n- Email";
        formEmail.classList.add("input-erro");
    }  
    if (formTel.value == ""){
        msgErro += "\n- Telefone";
        formTel.classList.add("input-erro");
    }  
    if (formMensagem.value == ""){
        msgErro += "\n- Mensagem";
        formMensagem.classList.add("input-erro");
    }  

    if (msgErro != ""){
        alert("Faltam os campos: " + msgErro);
        return false;
    }
}




galeria();
galeriaVideos();
noticias();
