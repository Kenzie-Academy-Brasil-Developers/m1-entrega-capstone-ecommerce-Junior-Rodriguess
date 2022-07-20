
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
  
  
  

//////////////CRIANDO AS TAGS//////////////////

    let tagMain            = document.createElement('main')
    let tagDiv             = document.createElement('div')
    let tagSection         = document.createElement('section')
    let tagUl              = document.createElement('ul')
    let tagAside           = document.createElement("aside")
    let tagDivcarrinho     = document.createElement("div")
    let tagDivItens        = document.createElement("div")

    tagSection.classList.add("section_1")
    tagUl.classList.add("produtos")
    tagDivItens.classList.add("aside_carrinho")

    document.body.append(tagMain)
    tagMain.append(tagDiv)
    tagDiv.append(tagSection, tagAside)
    tagSection.append(tagUl)

  

   
    
////////////// RENDERIZANDO OS CARDS ---------------------------------------------------------------------------



const cardsProdutos = []

function renderizarprodutos(){

    

    for (let i = 0 ; i < produtos.length; i++) {
        
        let tagli             = document.createElement('li')
        tagli.classList.add("cards")

        let tagImgProdutos     = document.createElement('img')
        tagImgProdutos.src = `${produtos[i].img}`  
        tagImgProdutos.alt = `${produtos[i].nomeItem}`

        let tagH4Produtos          = document.createElement('h4')
        tagH4Produtos.innerText = `${produtos[i].categoria}`

        let tagH3Produtos           = document.createElement('h3')
        tagH3Produtos.innerText = `${produtos[i].nomeItem}`
        let tagDescricao = document.createElement('p')
        tagDescricao.innerText = `${produtos[i].paragrafo}`

        let strongValor         = document.createElement('strong')
        strongValor.innerText = `R$ ${produtos[i].price}`

        let tagbtn = document.createElement('button')
        
        tagbtn.innerText = `Adicionar ao carrinho`


        tagli.append(tagImgProdutos, tagH4Produtos, tagH3Produtos,tagDescricao, strongValor, tagbtn)
        tagUl.append(tagli)


    }   

    cardsProdutos.push(tagUl)
    


    return cardsProdutos
}
renderizarprodutos()




// CRIANDO O FORMULARIO ----------------------------------------------------------------------------


let tagForm = document.createElement('form')
let tagfieldset = document.createElement('fieldset')

tagAside.append(tagForm)
tagForm.append(tagfieldset)


function criandoformulario(){

   
    let tagPFormulario = document.createElement('p')
    tagPFormulario.classList.add("formulario")
    let tagLabel = document.createElement('label')

    let tagInput = document.createElement('input')
    let tagBotaoForms = document.createElement('button')

    
    tagBotaoForms.innerText = `pesquisar`
    
    tagPFormulario.append(tagLabel, tagInput, tagBotaoForms)
    tagfieldset.appendChild(tagPFormulario)

}
criandoformulario()


// CRIANDO O FORMULARIO --------------------------------------------------------------------------------


// CRIANDO CARRINHO ------------------------------------------------------------------------

let carrinhoCompras = document.createElement('button')
let tagA = document.createElement('a')


carrinhoCompras.classList.add("botao_do_carrinho")
tagA.classList.add("botao_comprar_do_carrinho")
tagA.innerText = `Carrinho de compras`

tagAside.append(carrinhoCompras)
carrinhoCompras.append(tagA)




// CRIANDO CARRINHO ------------------------------------------------------------------------



// CRIANDO O EVENTO DE ADICIONAR NO CARRINHO ----------------------------------------------



tagUl.addEventListener("click", addcarrinho)


function addcarrinho(event){


    let tagbotao = event.target
    if(tagbotao.tagName == "BUTTON"){

    let produtos = tagbotao.closest('li').cloneNode(true)

    tagAside.appendChild(produtos)

}

}
addcarrinho()


// CRIANDO O EVENTO DE ADICIONAR NO CARRINHO ----------------------------------------------



















//  console.log(divH3)