
const produtos = [
    {
        id:0,
        nomeItem: "Camisa Preta de manga curta",
        img: "/img/camiseta_nike_preta.webp",
        alt: "",
        categoria: "Camisas",
        paragrafo: "Acaba de encontrar a melhor camisa para você treinar na sua academia." ,
        price: 100.00,
    },
    {
        id:1,
        nomeItem: "Camiseta Dry-Fit Growth",
        img: "./img/m_camiseta-premium-long-preta-recorte-branca-growth.jpg",
        alt: "",
        categoria: "Camisas",
        paragrafo: "Acaba de encontrar a melhor camisa para você treinar na sua academia." ,
        price: 50.00,
    },
    {
        id:2,
        nomeItem: "Camiseta Adidas - Vermelha",
        img: "./img/camiseta-adidas-vermelha.webp",
        alt: "",
        categoria: "Camisas",
        paragrafo: "Acaba de encontrar a melhor camisa para você treinar na sua academia." ,
        price: 200.00,
    },
    {
        id:3,
        nomeItem: "Moletom Adidas de Capuz Longo",
        img: "./img/blusao-de-moletom-adidas-masculino.webp",
        alt: "",
        categoria: "Moletom",
        paragrafo: "Acaba de encontrar o melhor moletom para você treinar na sua academia." ,
        price: 200.00,
    },
    {
        id:4,
        nomeItem: "Moletom Adidas ",
        img: "./img/blusa-de-treino-adidas.webp",
        alt: "",
        categoria: "Moletom",
        paragrafo: "Acaba de encontrar o melhor moletom para você treinar na sua academia." ,
        price: 50.00,
    },
    {
        id:5,
        nomeItem: "Moletom Fitness Masculino",
        img: "/img/moletom-fitness-masculino.jpg",
        alt: "",
        categoria: "Moletom",
        paragrafo: "Acaba de encontrar o melhor moletom para você treinar na sua academia.",
        price: 50.00,
    },
    {
        id:6,
        nomeItem: "Anilha e Halteres",
        img: "./img/EHJ-0252-006_zoom1_anilhas+halteres.jpg",
        alt: "",
        categoria: "Acessorio",
        paragrafo: "Halteres para academia.",
        price: 100.00,
      
    },
    {
        id:7,
        nomeItem: "Step Preto Academia",
        img: "./img/STEP_ACESSORIO.webp",
        alt: "",
        categoria: "Acessorio",
        paragrafo: "Step de melhor qualidade que existe no mercado.",
        price: 100.00,
      
    },
    {
        id:8,
        nomeItem: "Luvas Academia - Preta",
        img: "./img/luvas-para-academia.webp",
        alt: "",
        categoria: "Acessorio",
        paragrafo: "Acaba de encontrar luvas perfeitas para não machucar a sua mão na academia.",
        price: 100.00,
      
    },
    {
        id:9,
        nomeItem: "Calça Nike Dri-Fit",
        img: "./img/calca-nike-dri-fit-academy-masculina.webp",
        alt: "",
        categoria: "Calcas",
        paragrafo: "Agora você encontrou a calça para treinar na sua academia.",
        price: 100.00,
      
    },
    {   
        id:10,
        nomeItem: "Calça Azul",
        img: "./img/Calça_azul.webp",
        alt: "",
        categoria: "Calcas",
        paragrafo: "Agora você encontrou a calça para treinar na sua academia.",
        price: 100.00,
      
    },
    {
        id:11,
        nomeItem: "Calça Camuflada",
        img: "./img/calca-masculina-e-moletom-treino-fitness-academia-camuflagem-exercito.jpg",
        alt: "",
        categoria: "Calcas",
        paragrafo: "Agora você encontrou a calça para treinar na sua academia.",
        price: 100.00,
      
    },
  ]
const vitrineUl = document.querySelector(".produtos")
const vitrineCarrinhoUl = document.querySelector(".aside_itens ul") 
function renderizarCards(produtos){
    vitrineUl.innerHTML = ""
    for(let produto of produtos){
        let card = criarCard(produto)
        vitrineUl.append(card) 
    }
}
renderizarCards(produtos)
function criarCard(produto){
    let tagLi = document.createElement('li')
    tagLi.className = "cards"
    tagLi.innerHTML = `
    <img src="${produto.img}" alt="${produto.nomeItem}">
    <h4>${produto.categoria}</h4>
    <h3>${produto.nomeItem}</h3>
    <p>${produto.paragrafo}</p>
    <p><strong>R$ ${produto.price.toFixed(2)}</strong></p>
    <button class="btn_adicionar_no_carrinho" id = "${produto.id}">Adicionar ao carrinho</button>
    `
return tagLi
}
function criarCardCarrinho(produto){
    let tagLi = document.createElement('li')
    tagLi.innerHTML = `
    <img class="item_img" src="${produto.img}" alt="${produto.nomeItem}"> 
    <h3 class="text">${produto.nomeItem}</h3>
    <h5 class="text">R$ ${produto.price.toFixed(2)}</h5>
    <button class="text" id = "${produto.id}">Remover Produto</button>
    `
    return tagLi
}
vitrineUl.addEventListener("click", addCarrinho)
function addCarrinho(event){
    let tagbotao = event.target
    if (tagbotao.tagName == "BUTTON") {
    let produto = produtos.find(function(produto){
        if (tagbotao.id == produto.id){
            let cardcarrinho = criarCardCarrinho(produto)
            vitrineCarrinhoUl.append(cardcarrinho)
        }
    })     
    }
}
vitrineCarrinhoUl.addEventListener("click", removerItemCarrinho)
function removerItemCarrinho(event){
    let tagBotaoRemover = event.target
    if (tagBotaoRemover.tagName == "BUTTON") {
        let produto = produtos.find(function(produto){
            if(tagBotaoRemover.id == produto.id){
                tagBotaoRemover.closest('li').remove('li')
            }
    })
    }
}