'use strict'

const menuSize = '250px'

window.addEventListener('load', () => {
    menu.style.marginLeft = `-${menuSize}`;
});


document.querySelector("#hambuguer").addEventListener ('click', e=>{
    open = !open;
    
    alterarMenu()
})

document.querySelector("#botao-fechar").addEventListener ('click', e=>{
    open = false;

    alterarMenu()
})

function alterarMenu(){
    if(open){
        document.querySelector('.menu').style.marginLeft = 0;
        return
    }
    else{
        document.querySelector('.menu').style.marginLeft =  `-${menuSize}`;
    }
}

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

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,       
  user: 'u484149852_contatos',     
  password: 'MR@30cr56',   
  database: 'u484149852_contatos'
});

// Conectar ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');
});

// Middleware para lidar com dados JSON e URL encoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para processar o formulário
app.post('/contato', (req, res) => {
  const { nome, email, mensagem } = req.body;

  const sql = 'INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)';
  db.query(sql, [nome, email, mensagem], (err, result) => {
    if (err) {
      console.error('Erro ao inserir dados: ' + err.stack);
      res.status(500).send('Erro ao enviar mensagem.');
      return;
    }
    res.send('Mensagem enviada com sucesso!');
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});