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
        name: "Bife com Natas",
        img: "foto01.jpg",
    },
    {
        name: "Sushi",
        img: "foto02.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto03.jpg",
    },
    {
        name: "Citrinos",
        img: "foto04.jpg",
    },
    {
        name: "Panquecas",
        img: "foto05.jpg",
    },
    {
        name: "Pizza",
        img: "foto06.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto07.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto08.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto09.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto10.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto11.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto12.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto13.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto14.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto15.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto16.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto17.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto18.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto19.jpg",
    },
    {
        name: "Iogurte e Fruta",
        img: "foto20.jpg",
    },
];

const videos = [
    {
        name: "Slow Motion food",
        id: "dzfOoIdyJRI",
    },
    {
        name: "Lego Breakfast",
        id: "1RMKR8h03iw",
    },
];

const noticiasLista = [
    {
        titulo: "Título da Notícia",
        img: "foto01.jpg",
        resumo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis debitis, ipsam quisquam a nesciunt veniam voluptatibus quia aliquid numquam!",
        data: "15/02/2024",
        link: "https://jn.pt/blablabla"
    },
    {
        titulo: "Título da Notícia",
        img: "foto01.jpg",
        resumo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis debitis, ipsam quisquam a nesciunt veniam voluptatibus quia aliquid numquam!",
        data: "15/02/2024",
        link: "https://jn.pt/blablabla"
    },
    {
        titulo: "Título da Notícia",
        img: "foto01.jpg",
        resumo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis debitis, ipsam quisquam a nesciunt veniam voluptatibus quia aliquid numquam!",
        data: "15/02/2024",
        link: "https://jn.pt/blablabla"
    },
    {
        titulo: "Título da Notícia",
        img: "foto01.jpg",
        resumo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis debitis, ipsam quisquam a nesciunt veniam voluptatibus quia aliquid numquam!",
        data: "15/02/2024",
        link: "https://jn.pt/blablabla"
    },
    {
        titulo: "Título da Notícia",
        img: "foto01.jpg",
        resumo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis debitis, ipsam quisquam a nesciunt veniam voluptatibus quia aliquid numquam!",
        data: "15/02/2024",
        link: "https://jn.pt/blablabla"
    },
    {
        titulo: "Título da Notícia",
        img: "foto01.jpg",
        resumo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio corporis debitis, ipsam quisquam a nesciunt veniam voluptatibus quia aliquid numquam!",
        data: "15/02/2024",
        link: "https://jn.pt/blablabla"
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