let chave = "c5c0dd8bcc3ee0bdc6a6c40206a64f77";

const imagensDeFundo = [
    'mapa-1.png',
    'mapa-2.png',
    'mapa-3.png',
  ];

const indiceAleatorio = Math.floor(Math.random() * imagensDeFundo.length);

const imagemSorteada = imagensDeFundo[indiceAleatorio];

document.body.style.backgroundImage = `url('./assets/${imagemSorteada}')`;


function colocarNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.body.style.backgroundImage =
    '(url("https://loremflickr.com/1600/900/${dados.name}"))';
}




async function buscarCidade(cidade) {

    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
         + cidade 
        + "&appid=" + chave 
        + "&lang=pt_br" 
         + "&units=metric"
        ).then(resposta => resposta.json());

    colocarNaTela(dados);
}




function cliqueiNoBotao() {

    let cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);
 }