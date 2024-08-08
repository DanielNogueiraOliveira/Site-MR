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

function abrirModal(carregarModal){

}

function fecharModal(fecharModal){

}