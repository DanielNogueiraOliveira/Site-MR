
const head= document.head
const body= document.body

const CSS="<link rel='stylesheet' href='./assets/style.css'>"
head.innerHTML+=CSS


const Header= document.createElement("div")
Header.setAttribute("id","header")
Header.setAttribute("class","header")

body.prepend(Header)

const cabecalho=
    "<div class='cabecalho'>" +
        "<img class='logo' src='./assets/img/Logo_MR_Rualonga_desenho.png' loading='lazy' alt'Logo-MR' id='logo'/>"+
        "<nav class='botao-info'"+
        "<a class='x_info'>"+
        " <img src='./assets/img/info-icon.png' alt='info MR' id='info'>"
        "</a>"+
        "</nav>"
    "</div>"+
    "<section id='text-info'>"+
         "<p> A MR Tecnologia, é uma empresa que está a 15 anos no mercado, oferecendo Serviços personalizados para os nossos clientes. Somos uma equipe obstinada por transformar desafios tecnológicos em soluções inteligentes e eficientes. Desde da criação da sua rede estruturada até o Help Desk, passando por todas as fases. Nosso objetivo é potencializar seu negócio com o que há de mais avançado no mundo da T.I. O que nos diferencia? Nosso compromisso com a excelência, a dedicação em entender as necessidades específicas de cada cliente e a busca constante por inovação. Junte-se a nós e descubra como podemos elevar seu sucesso para o próximo nível."+
    "</section>"

    Header.innerHTML+=cabecalho
