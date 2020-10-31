const botao_topo = document.querySelector("#toTop");
const header = document.querySelector("header");

window.onscroll = () => {
    // console.log("outros", document.documentElement.scrollTop);
    const scrollValue = document.documentElement.scrollTop;

    if(scrollValue > header.clientHeight) {
        botao_topo.style.display = "block";
    } else {
        botao_topo.style.display = "none";
    }
}

const scrollToTop = () => {                     // passando a função para uma variável (agora a arrow function tem um nome)
    document.documentElement.scrollTop = 0;     // essa função é executada lá no HTML
}

// console.log(botao_topo) serve para debuggar o código, verifica se a variável existe
// o HTML não é renderizável, ele não aparece no console.log(document.html) é undefined