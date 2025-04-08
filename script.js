
const head = document.head
const body = document.body

const CSS = "<link rel='stylesheet' href='./assets/style.css'>"
head.innerHTML += CSS


const Header = document.createElement("div")
Header.setAttribute("id", "header")
Header.setAttribute("class", "header")

body.prepend(Header)

const cabecalho =
    "<div class='cabecalho'>" +
    "<img class='logo' src='./assets/img/Logo_MR_Rualonga_desenho.png' loading='lazy' alt'Logo-MR' id='logo'/>" +
    "<a href='./sobre.html' class='x_info'>" +
    " <img src='./assets/img/info-icon.png' alt='info MR' id='info'>"
    "</a>" +
    "</div>"

Header.innerHTML += cabecalho
