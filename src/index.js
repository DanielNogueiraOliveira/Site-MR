'use strict'

const menuSize = '250px'

window.addEventListener('load', () => {
    menu.style.marginLeft = `-${menuSize}`;
});


document.querySelector("#hambuguer").addEventListener ('click', e=>{
    document.querySelector('.menu').style.marginLeft = 0;
})

document.querySelector("#botao-fechar").addEventListener ('click', e=>{
    document.querySelector('.menu').style.marginLeft =  `-${menuSize}`;
})

/*const botao = document.querySelector("button")
const modal = document.querySelector("dialog")

botao.onclick = function () {
    modal.showModal()
}*/

// Selecionar todos os botões com a classe 'botao-servicos'  
const botoes = document.querySelectorAll(".botao-servicos");  

// Para cada botão, adicionar um evento de clique  
botoes.forEach(botao => {  
    botao.onclick = function () {  
        // Selecionar o dialog correspondente ao botão clicado  
        const dialog = botao.parentElement.querySelector("dialog");  
        dialog.showModal(); // Mostra o dialog  
    };  
});  

// Para fechar os diálogos, você pode adicionar um evento a cada imagem dentro do dialog  
const modais = document.querySelectorAll("dialog");  

modais.forEach(modal => {  
    modal.addEventListener("click", function () {  
        modal.close(); // Fecha o dialog ao clicar na imagem  
    });  
});  