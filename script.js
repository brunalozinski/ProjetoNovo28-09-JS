"use strict"

const images = [
    ".img/demon-slayer.jpg",
    ".img/giyu-tomioka.png",
    ".img/inosuke-hashibira.jpg",
    ".img/luas-superiores.jpg",
    ".img/muzan-kibutsuji.png",
    ".img/nezuko-kamado.jpg",
    ".img/tanjiro-kamado.png",
    ".img/zenitsu-agatsuma.jpg"
]

const limparId = (urlImagem) => urlImagem.split("/")[2]
                                        .split(".")[0]
                                        .replace(" ", "-")
                                        .toLowerCase()

const criarItem = (urlImagem) => {
    const container = document.querySelector(".galeria-container")

    const novoLink = document.createElement("a")
    novoLink.href = `#${limparId(urlImagem)}`
    novoLink.classList.add("galeria-itens")
    novoLink.innerHTML = `<img src="${urlImagem}" alt="">`
    container.appendChild(novoLink)
}

const carregarImagens = () => images.forEach(criarItem)

const criarSlide = (urlImagem) => {
    const container = document.querySelector(".slide-container")
    const slide = document.createElement("div")
    slide.classList.add("slide")
    slide.id = limparId(urlImagem)



    // let indiceAnterior
    // if (indice > 0) {
    //     indiceAnterior = indice - 1
    // } else {
    //     indiceAnterior = arr.length - 1
    // }

    const indiceAnterior = indice > 0 ? indice - 1 : arr.length - 1
    const idAnterior = limparId(arr[indiceAnterior])

    const indiceProximo = indice < arr.length - 1 ? indice + 1 : 0
    const idProximo = limparId(arr[indiceProximo])

    slide.innerHTML = `
        <div class="imagem-container">
            <a href="#${idAnterior}" class="fechar">&#10006;</a>
            <a href="#" class="navegacao anterior">&#171;</a>

            <img src="${urlImagem}" alt="">

            <a href="#${idProximo}" class="navegacao proximo">&#187;</a>
        </div>
    `
    container.appendChild(slide)
}


const carregarSlides = () =>images;forEach(criarSlide)

carregarImagens()
carregarSlides()



