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

// criação de botoes 
function createButton() {

    var bt4 = document.createElement("button");
    bt4.innerText = "CONTINUAR";
    document.getElementById("btn-container").appendChild(bt4);
    bt4.addEventListener("click", fugir);
    bt4.setAttribute("id", "btn");


    var teste3 = document.createElement("button");
    teste3.innerText = "DESISTIR";
    document.getElementById("btn-container").appendChild(teste3);
     teste3.addEventListener("click", desistir);
    teste3.setAttribute("id", "btn-2");

}

function createButton1() {

    var bt1 = document.createElement("button"); // cria o botão
    bt1.innerText = "ENVIAR MENSAGEIRO"; // nomeia o botão
    document.getElementById("btn-container").appendChild(bt1); // coloca o elemento criado dentro de uma DIV
    bt1.setAttribute("onclick", "fugir2()"); // parâmetros para o botão
    bt1.setAttribute("id", "btn"); //coloca um id no elemento criado


    var bt2 = document.createElement("button"); // cria o botão
    bt2.innerHTML = "AGUARDAR E LUTAR SOZINHA"; // nomeia o botão
    document.getElementById("btn-container").appendChild(bt2); // coloca o elemento criado dentro de uma DIV
    bt2.setAttribute("onclick", "ficar()"); // parâmetros para o botão
    bt2.setAttribute("id", "btn-2"); //coloca um id no elemento criado

}

function createButton2() {

    var teste4 = document.createElement("button");
    teste4.innerText = "LUTAR COM O GRUPO";
    document.getElementById("btn-container").appendChild(teste4);
    teste4.addEventListener("click", fim);
    teste4.setAttribute("id", "btn");


    var teste3 = document.createElement("button");
    teste3.innerText = "LUTAR SOZINHO";
    document.getElementById("btn-container").appendChild(teste3);
     teste3.addEventListener("click", ficar);
    teste3.setAttribute("id", "btn-2");

}

function createButton3() {

    var txt2 = document.createElement("button");
    txt2.innerText = "CONTINUAR";
    document.getElementById("btn-container").appendChild(txt2);
    txt2.addEventListener("click", guerra);
    txt2.setAttribute("id", "btn");


    var txt3 = document.createElement("button");
    txt3.innerText = "DESISTIR";
    document.getElementById("btn-container").appendChild(txt3);
    txt3.addEventListener("click", desistir);
    txt3.setAttribute("id", "btn-2");

}

function btnRestart(){
    var teste3 = document.createElement("button");
    teste3.innerText = "RESTART GAME";
    document.getElementById("btn-container").appendChild(teste3);
    teste3.addEventListener("click", function(){
        onclick = window.location.href='../index.html';
    });
    teste3.setAttribute("id", "btn-2");
}

// funções referentes a história

function begin(){

    remover("result");

    var teste2 = document.createElement("p");
    teste2.innerText =
         "Após a escolha de trabalhar junto com você passaram-se anos e Sakura muito habilidosa ganhou diversos torneios e outra coisa que ela era muito boa era sobre estrategias de guerras e como aproveitar ao máximo os guerreiros ao seu redor, direcionando cada um no campo de batalha estrategicamente conforme as habilidades de seus guerreiros, clique em continuar";

    document.getElementById("divResultado").appendChild(teste2);
    teste2.setAttribute("id", "result");

    remover("btn");
    remover("btn-2");
    createButton()


}

function desistir() {
    document.getElementById("divResultado").innerText = 'Clique no botão e volte ao inicio'

    remover("btn");
    remover("btn-2")
    btnRestart();
}

function ficar(){
    document.getElementById("divResultado").innerText =
        "Como Sakura decidiu lutar sozinha, mesmo com todo seu conhecimento no campo de batalha não foi possivel vencer a batalha pois com poucos guerreiros ao seu lado não foi possivel vencer e ela acabou morrendo.., pouco pode fazer contra o poderoso Orochimaru que acabou dominando a Vila da folha, Você Perdeu!! volte ao inicio";

        remover("btn");
        remover("btn-2")
        btnRestart();
        imageLose();

}

function fugir(){

    template();
    createButton1();

    var teste3 = document.createElement("p");
    teste3.innerText =
        " A primeira vilarejo a ser atacada é a Uchiha de Sasuke, após ficar sabendo do ataque , Sakura imediatamente convocou os guerreiros do seu vilarejo para traçar uma estratégia de defesa, o seu vilarejo tinha uma vantagem em comparação aos outros devido a áreas montanhosas e florestas, local onde poderiam surpreender seus oponentes, 1 - ela tem uma escolha aguardar o ataque e tentar com seus guerreiros lutar ou 2 - enviar mensageiro para outros vilarejos se juntarem a ela contando a sua estratégia. ";

    document.getElementById("divResultado").appendChild(teste3);
    teste3.setAttribute("id", "result");

}

function fugir2(){

    template();
    createButton3();


    var teste5 = document.createElement("p");

    teste5.innerText =
        "Como Sakura decidiu enviar os mensageiros, convocando Naruto, Sasuke e outros, eles atenderam o seu chamado e foram chegando aos poucos, o primeiro a chegar foi o Naruto, logo ao chegar Sakura o cumprimentou e foi passando sua estratégia e solicitando suas opniões para que formasse uma estratégia na batalha"

    document.getElementById("divResultado").appendChild(teste5);
    teste5.setAttribute("id", "result");

}

function guerra(){

    template();
    createButton2();


    var txt = document.createElement("p");

    txt.innerText =
        "Sakura criou a estratégia e todos foram para o campo de batalha, porém com muitos lideres todos queria ter protagonismo, e se eles terminassem vitoriosos provavelmente que liderou se tornaria o líder de todos os vilarejos, agora todos prontos para a batalha Naruto e Sasuke tem 2 opções, lutar de acordo com as orientações da Sakura ou cada um tentar individualmente lutar diretamente contra Orochimaru."

    document.getElementById("divResultado").appendChild(txt);
    txt.setAttribute("id", "result");

}

function fim(){

    template();
    createButton2();


    var txt = document.createElement("p");

    txt.innerText =
        "Como todos decidiram se juntar a Sakura, a estrategia dela de ficar em um ponto mais alto da colina e proximo a floresta deu vantagem para eles conseguirem cercar e surpreender o inimigo, perdendo alguns companheiros, porém obteram exito e conseguiram vencer o inimigo graças a estratégia de Sakura e o trabalho em equipe de todos os integrantes se destacando Naruto e Sasuke"

    document.getElementById("divResultado").appendChild(txt);
    txt.setAttribute("id", "result");
    remover("btn");
    remover("btn-2")
    
    imageWin();
}


// imagem adicionada ao final caso ganhe
function imageWin() {

    var img = document.createElement("IMG");
    img.src = "https://image.freepik.com/free-vector/you-win-sign-pop-art-style_175838-498.jpg";
    img.className = "img"
  
    document.querySelector('body').appendChild(img);

    btnRestart();

}

// imagem adicionada ao final caso perca
function imageLose() {

    var img = document.createElement("IMG");
    img.src = "https://media0.giphy.com/media/eJ4j2VnYOZU8qJU3Py/giphy_s.gif";
    img.className = "img2"
  
    document.querySelector('body').appendChild(img);

}

