//funções padrão remover e criar botoes

function template() {
    remover("result");
    remover("btn");
    remover("btn-2");
}

function remover(id) {
    var removed = document.getElementById(id);
    removed.remove();
}

function createButton() {

    var teste4 = document.createElement("button");
    teste4.innerText = "OK";
    document.getElementById("btn-container").appendChild(teste4);
    teste4.addEventListener("click", fugir);
    teste4.setAttribute("id", "btn");


    var teste3 = document.createElement("button");
    teste3.innerText = "DESISTIR";
    document.getElementById("btn-container").appendChild(teste3);
     teste3.addEventListener("click", desistir);
    teste3.setAttribute("id", "btn-2");

}

function createButton1() {

    var bt1 = document.createElement("button"); // cria o botão
    bt1.innerText = "Fugir e buscar ajuda"; // nomeia o botão
    document.getElementById("btn-container").appendChild(bt1); // coloca o elemento criado dentro de uma DIV
    bt1.setAttribute("onclick", "fugir2()"); // parâmetros para o botão
    bt1.setAttribute("id", "btn"); //coloca um id no elemento criado


    var bt2 = document.createElement("button"); // cria o botão
    bt2.innerHTML = "ficar e lutar sozinho"; // nomeia o botão
    document.getElementById("btn-container").appendChild(bt2); // coloca o elemento criado dentro de uma DIV
    bt2.setAttribute("onclick", "ficar()"); // parâmetros para o botão
    bt2.setAttribute("id", "btn-2"); //coloca um id no elemento criado

}

function createButton2() {

    var teste4 = document.createElement("button");
    teste4.innerText = "lutar com o grupo";
    document.getElementById("btn-container").appendChild(teste4);
    teste4.addEventListener("click", fim);
    teste4.setAttribute("id", "btn");


    var teste3 = document.createElement("button");
    teste3.innerText = "lutar sozinho";
    document.getElementById("btn-container").appendChild(teste3);
     teste3.addEventListener("click", ficar);
    teste3.setAttribute("id", "btn-2");

}

function createButton3() {

    var txt2 = document.createElement("button");
    txt2.innerText = "Continuar";
    document.getElementById("btn-container").appendChild(txt2);
    txt2.addEventListener("click", guerra);
    txt2.setAttribute("id", "btn");


    var txt3 = document.createElement("button");
    txt3.innerText = "desistir";
    document.getElementById("btn-container").appendChild(txt3);
    txt3.addEventListener("click", desistir);
    txt3.setAttribute("id", "btn-2");

}

function desistir() {
    document.getElementById("divResultado").innerText = 'Atualize a pagina e reinicie o jogo'

    remover("btn");
    remover("btn-2")
}

// funções referentes a história

function begin() {

    remover("result");

    var teste2 = document.createElement("p");
    teste2.innerText =
        " Após a escolha de trabalhar junto com você passaram-se anos e Sasuke evoluiu muito e se transformou em um grande guerreiro, porém agora chegou a grande hora e o seu vilarejo está sendo atacado, clique em OK para prosseguir";
    document.getElementById("divResultado").appendChild(teste2);
    teste2.setAttribute("id", "result");

    remover("btn");
    remover("btn-2");
    createButton()


}

function ficar() {
    document.getElementById("divResultado").innerText =
        "Mesmo com todo esforço de Sasuke não foi possível vencer a batalha e acabou morrendo em batalha, pois com poucos guerreiros ao seu lado pouco pode fazer contra o poderoso Orochimaru, Você Perdeu!! volte ao inicio";

        remover("btn");
        remover("btn-2")

}

function fugir() {

    template();
    createButton1();

    var teste3 = document.createElement("p");
    teste3.innerText =
        " O primeiro vilarejo a ser atacada é o Uchiha de Sasuke, porém ele está sozinho pois os outros guerreiros tinha sido pegos desprevenidos, no ultimo momento aparece um mensageiro da Hinata solicitando sua presença no seu vilarejo, ele tem 2 opções ou fica e tenta lutar sozinho OU foge e busca ajuda com os demais guerreiros tais como Naruto e Hinata";

    document.getElementById("divResultado").appendChild(teste3);
    teste3.setAttribute("id", "result");

}

function fugir2() {

    template();
    createButton3();


    var teste5 = document.createElement("p");

    teste5.innerText =
        "Após os cuidados, Sasuke foi imediatamente conversar com Hinata e passar as informações sobre o inimigo, ao chegar lá encontrou também Naruto e ficou contente por rever um velho amigo,  Hinata pediu todos os detalhes para se posicionar estratégicamente na batalha";

    document.getElementById("divResultado").appendChild(teste5);
    teste5.setAttribute("id", "result");

}

function guerra(){

    template();
    createButton2();


    var txt = document.createElement("p");

    txt.innerText =
        "Hinata criou a estratégia e todos foram para o campo de batalha, porém com muitos lideres todos queria ter protagonismo, e se eles terminassem vitoriosos provavelmente que liderou se tornaria o líder de todos os vilarejos, agora todos prontos para a batalha Naruto e Sasuke tem 2 opções, lutar de acordo com as orientações da Hinata ou cada um tentar individualmente lutar diretamente contra Orochimaru."

    document.getElementById("divResultado").appendChild(txt);
    txt.setAttribute("id", "result");

}


function fim(){

    template();
    createButton2();


    var txt = document.createElement("p");

    txt.innerText =
        "Como todos decidiram se juntar a Hinata, a estrategia dela de ficar em um ponto mais alto da colina e proximo a floresta deu vantagem para eles conseguirem cercar e surpreender o inimigo, perdendo alguns companheiros, porém obteram exito e conseguiram vencer o inimigo graças a estratégia de Hinata e o trabalho em equipe de todos os integrantes"

    document.getElementById("divResultado").appendChild(txt);
    txt.setAttribute("id", "result");
    remover("btn");
    remover("btn-2")
    
    image();
}


// imagem adicionada ao final
function image() {

    var img = document.createElement("IMG");
    img.src = "https://image.freepik.com/free-vector/you-win-sign-pop-art-style_175838-498.jpg";
    img.className = "img"
  
    document.querySelector('body').appendChild(img);

}