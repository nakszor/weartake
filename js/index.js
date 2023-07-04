let tagUl = document.createElement("ul")
let divContainer = document.createElement("div")
let tagSection = document.createElement("section")
let tagMain = document.createElement("main")

divContainer.classList.add("container")
tagUl.classList.add("lista-cards")

divContainer.appendChild(tagUl)
tagSection.appendChild(divContainer)
tagMain.appendChild(tagSection)

let body = document.querySelector(".body")

body.appendChild(tagMain)

function criarLista(array) {
    
    for (let index = 0; index < array.length; index++) {

        let objetoLista = array[index]
           
        let card = criarCard(objetoLista)
            
       tagUl.appendChild(card)
            
    } 

}
criarLista(data)

let arrayVazio = []

function criarCard(objeto) {
let imgProduto          = document.createElement("img")
let divImg              = document.createElement("div")

let categoriaProduto    = document.createElement("p")
let divCategoria        = document.createElement("div")

let nomeProduto         = document.createElement("h3")
let divNome             = document.createElement("div")

let descricaoProduto    = document.createElement("p")
let divDescricao        = document.createElement("div")

let precoProduto        = document.createElement("p")
let divPreco            = document.createElement("div")

let buttonProduto       = document.createElement("button")
let divButton           = document.createElement("div")

let divContainerCard    = document.createElement("div") 
let tagLi               = document.createElement("li")

imgProduto.src = `${objeto.img}`
categoriaProduto.innerText = objeto.tag
nomeProduto.innerText = objeto.nameItem
descricaoProduto.innerText = objeto.description
precoProduto.innerText = `R$${objeto.value},00`
buttonProduto.innerText = objeto.addCart


divImg.classList.add("div-img")
divCategoria.classList.add("categoria")
divNome.classList.add("nome-produto")
divDescricao.classList.add("texto-descricao")
divPreco.classList.add("card-price")
divButton.classList.add("card-button")

divContainerCard.classList.add("card-content")
tagLi.classList.add("card-estilo")

buttonProduto.addEventListener("click",function(){
    arrayVazio.push(objeto)
    criarCardCarrinho(arrayVazio)
})

divImg.appendChild(imgProduto)
divCategoria.appendChild(categoriaProduto)
divNome.appendChild(nomeProduto)
divDescricao.appendChild(descricaoProduto)
divPreco.appendChild(precoProduto)
divButton.appendChild(buttonProduto)

divContainerCard.appendChild(divImg)
divContainerCard.appendChild(divCategoria)
divContainerCard.appendChild(divNome)
divContainerCard.appendChild(divDescricao)
divContainerCard.appendChild(divPreco)
divContainerCard.appendChild(divButton)

tagLi.appendChild(divImg)
tagLi.appendChild(divContainerCard)

     return tagLi
}

let tagInput            = document.createElement("input")
let tagButton           = document.createElement("button")
let tagForm             = document.createElement("form")


let titleCart           = document.createElement("h2")
let divCarrinhoTitulo   = document.createElement("div")

let carrinhoVazio           = document.createElement("h4")
let adicionarItens          = document.createElement("p")
let divCarrinhoCards        = document.createElement("div")
let divCarrinhoSpace        = document.createElement("div")


let divCarrinho              = document.createElement("div")
let sectionCart              = document.createElement("section")

tagButton.innerText = "Pesquisar"
titleCart.innerText = "Carrinho de Compras"
carrinhoVazio.innerText = "Carrinho vazio"
adicionarItens.innerText = "Adicionar itens"

tagInput.classList.add("input")
tagButton.classList.add("button")
tagForm.classList.add("form")
divCarrinhoTitulo.classList.add("carrinho-titulo")
divCarrinhoCards.classList.add("carrinho-cards")
divCarrinhoSpace.classList.add("carrinho-space")
divCarrinhoSpace.classList.add("carrinho-conteudo")
divCarrinho.classList.add("carrinho")

tagForm.appendChild(tagInput)
tagForm.appendChild(tagButton)
sectionCart.appendChild(tagForm)

divCarrinhoTitulo.appendChild(titleCart)
divCarrinhoCards.appendChild(carrinhoVazio)
divCarrinhoCards.appendChild(adicionarItens)
divCarrinhoSpace.appendChild(divCarrinhoCards)
divCarrinho.appendChild(divCarrinhoTitulo)
divCarrinho.appendChild(divCarrinhoSpace)

sectionCart.appendChild(tagForm)
sectionCart.appendChild(divCarrinho)
tagMain.appendChild(sectionCart)


let sectioncard = document.querySelector(".sectionCarrinho")
tagMain.appendChild(sectionCarrinho)
tagUl.addEventListener("click", adicionarAoCarrinho) 

function adicionarAoCarrinho(event) {
    
    let botaoAdd = event.target

    if(botaoAdd.tagName == "BUTTON"){
       
        let produto = botaoAdd.closest("li")
        
        divCarrinhoSpace(data)
    }
}
function criarCardCarrinho(arr) {
   
    let ulCarrinho = document.createElement("ul")

    

        for (let index = 0; index < arr.length; index++) {
    
        let imgProdutoCarrinho          = document.createElement("img")
        let divImgCarrinho              = document.createElement("div")
        
        let nomeProdutocarrinho         = document.createElement("p")
        let divNomeCarrinho             = document.createElement("div")
        
       
        let precoProdutoCarrinho        = document.createElement("p")
        let divPrecoCarrinho            = document.createElement("div")
        
        let buttonRemover               = document.createElement("button")
        let divButtonRemover            = document.createElement("div")
        
        let divConteinerCardCarrinho    = document.createElement("div") 
        let tagLiCarrinho               = document.createElement("li")
        
        imgProdutoCarrinho.src = `${arr[index].img}`
    
        nomeProdutocarrinho.innerText = arr[index].nameItem
        
        precoProdutoCarrinho.innerText = `R$${arr[index].value},00`
        buttonRemover.innerText = "Remover"

        divImgCarrinho.classList.add("div-img-carrinho")

        divNomeCarrinho.classList.add("nome-produto-carrinho")
       
        divPrecoCarrinho.classList.add("card-price-carrinho")
        divButtonRemover.classList.add("card-button-carrinho")
        
        divConteinerCardCarrinho.classList.add("card-content-carrinho")
        tagLiCarrinho.classList.add("card-estilo-carrinho")
       
        buttonRemover.addEventListener("click", function(){
            arrayVazio.splice(index,1)
            criarCardCarrinho(arrayVazio)
        })
        

        divImgCarrinho.appendChild(imgProdutoCarrinho)
        divNomeCarrinho.appendChild(nomeProdutocarrinho)
        divPrecoCarrinho.appendChild(precoProdutoCarrinho)
        divButtonRemover.appendChild(buttonRemover)
        
        divConteinerCardCarrinho.appendChild(divImgCarrinho)
       
        divConteinerCardCarrinho.appendChild(divPrecoCarrinho)
        divConteinerCardCarrinho.appendChild(divButtonRemover)
        
        tagLiCarrinho.appendChild(divImgCarrinho)
        tagLiCarrinho.appendChild(divNomeCarrinho)
        tagLiCarrinho.appendChild(divConteinerCardCarrinho)

        ulCarrinho.classList.add("tagUlCarrinho")

        ulCarrinho.appendChild(tagLiCarrinho)
        }
        divCarrinhoSpace.innerHTML = ""
        divCarrinhoSpace.appendChild(ulCarrinho)
       
        return divCarrinhoSpace
}
