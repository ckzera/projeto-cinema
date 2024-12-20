window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.classList.add('nav-transparent');
    } else {
        nav.classList.remove('nav-transparent');
    }
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 4,
      centeredSlides: true,
      spaceBetween: 50,
      pagination: {
        type: "fraction",
      },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

let assentos = document.querySelector(".total-assento");
for (let i = 0; i < 59; i++) {
    let randint = Math.floor(Math.random() * 2);
    let booked = randint === 1 ? "reservado" : "";

    assentos.insertAdjacentHTML(
        "beforeend",
        `<input type="checkbox" name="ingresso" id="s${i + 2}" class="assento-checkbox"/>
         <label for="s${i + 2}" class="assento ${booked}"></label>`
    );
}

let precoTotal = document.querySelector(".conta")
let quantidadeIngresso = document.querySelector(".quantidade")
let precoIngresso = 16.20

function atualizarPreco() {
    let ingressosSelecionados = document.querySelectorAll(".assento-checkbox:checked").length;
    quantidadeIngresso.textContent = ingressosSelecionados;
    precoTotal.textContent = (ingressosSelecionados * precoIngresso).toFixed(2);
}

assentos.addEventListener("change", function (e) {
    if (e.target.classList.contains("assento-checkbox")) {
        atualizarPreco()
    }
});
atualizarPreco();


let reservouAssentos = function() {
    let ingressosSelecionados = document.querySelectorAll(".assento-checkbox:checked").length;
    if(ingressosSelecionados >= 2){
        window.alert("Você reservou os assentos!")
    } else {
        window.alert("Você reservou o assento!")
    }
} 

function selecionarFilme(titulo, imagem, sinopse) {
    localStorage.setItem('filmeTitulo', titulo);
    localStorage.setItem('filmeImagem', imagem);
    localStorage.setItem('filmeSinopse', sinopse);
    window.open('reserva.html', '_blank');
}

window.addEventListener('DOMContentLoaded', function() {
    const titulo = localStorage.getItem('filmeTitulo');
    const imagem = localStorage.getItem('filmeImagem');
    const sinopse = localStorage.getItem('filmeSinopse');
    document.querySelector('.nome-filme p').textContent = titulo;
    document.querySelector('.chainsaw-man-pag-1').src = imagem;
    document.querySelector('.sinopse p').textContent = sinopse;
});

function scrollDown() {
    document.getElementById('filme-scroll').scrollIntoView({ behavior: "smooth" });
} function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}