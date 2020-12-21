// Após escolher o personagem inicia a função no botão

function startSasuke() {

    var nome = "Sasuke";
    var confirmSasuke = confirm(
        `Parabens por escolher o ${nome} da Vila Uchiha, agora vamos iniciar os treinamentos para nos tornamos grandes ninjas no futuro e reprensentar nossa aldeia, clique em ok para darmos inicio na nossa jornada ou cancelar para escolher outro ninja.`);

    if (confirmSasuke == true) {
        historySasuke();
    }
}

function startNaruto() {

    var nome = "Naruto";
    var confirmNaruto = confirm(

        `Parabens por escolher o ${nome} da Vila Uzumaki, agora vamos iniciar os treinamentos para nos tornamos grandes ninjas no futuro e reprensentar nossa aldeia, clique em ok para darmos inicio na nossa jornada ou cancelar para escolher outro ninja.`);

    if (confirmNaruto == true) {
        historyNaruto()
    }
}

function startHinata() {

    var nome = "Hinata";
    var confirmHinata = confirm(
        `Parabens por escolher o ${nome} da Vila Hyuga, agora vamos iniciar os treinamentos para nos tornamos grandes guerreiros(as) no futuro e representar nossa aldeia, clique em ok para darmos inicio na nossa jornada ou cancelar para escolher outro ninja.`);

    if (confirmHinata == true) {
        historyHinata();
    }
}
// Fim das inicializações


// inicia o modo História

// historia Sasuke---------

function historySasuke() {

    alert("Sasuke nunca conseguiu demonstrar o seu grande talento ele sempre esteve atrás dos seus companheiros de sala, muito desastrado e nunca conseguiu executar nenhum golpe secreto, coisa que seus amigos conseguiram com facilidade, mas isso está prestes a mudar com a nossa ajuda. clique em ok para embarcar na jornada.");

    alert("Após a escolha de trabalhar junto com você passaram-se anos e Sasuke evoluiu muito e se transformou em um grande guerreiro, porém agora chegou a grande hora e o seu vilarejo está sendo atacado, clique em OK para prosseguir");

    var lutar = prompt(" O primeiro vilarejo a ser atacada é o Uchiha de Sasuke, porém ele está sozinho pois os outros guerreiros tinha sido pegos desprevenidos, no ultimo momento aparece um mensageiro da Hinata solicitando sua presença no seu vilarejo, ele tem 2 opções ou 1- fica e tenta lutar sozinho , 2 foge e busca ajuda com os demais guerreiros tais como Naruto e Hinata");

    if (lutar == 2) {

        todosJuntos()
    } else if (lutar == 1) {
        alert('Mesmo com todo esforço de Sasuke não foi possível vencer a batalha e acabou morrendo em batalha, pois com poucos guerreiros ao seu lado pouco pode fazer contra o poderoso Orochimaru')  
        alert('Você Perdeu!! volte ao inicio')  }
    else {
        alert('Digite um numero válido, 1 ou 2 são as opções.')
        
    }

}

// fim da história Sasuke-----


// Inicio história Naruto-----

function historyNaruto() {

    alert("Naruto sempre tentou se comparar com seu irmão mais velho, que era muito habilidoso nas habilidades ninja e considerado um dos maiores guerreiros da atualidade, e ele sempre buscou ser melhor que ele, porém nunca obteve exito, mas isso está prestes a mudar, com a nossa ajuda podemos transformar ele no guerreiro que tanto almeja, clique em ok para embarcarmos nessa jornada");

    alert("Após a escolha de trabalhar junto com você passaram-se anos e Naruto pediu para poder treinar com seu irmão e que ele se tornasse seu mentor, mesmo muito ocupado seu irmão Obito começou a instruir seu irmão mais novo e Naruto fez uma promessa que um dia se tornaria melhor lutador que seu irmão e que o desafiaria para uma luta");

    var lutar = prompt(" A primeira vilarejo a ser atacada é a Uchiha de Sasuke, porém a vilarejo Uzumaki estava preparando seu guerreiros para ir ao combate e ajudar Hinata na vilrejo Hyuga que será o próxima a ser atacado, já Naruto estava inseguro, pois estava sem o seu irmão mais velho que tinha viajado em uma missão secreta para a Vila Oculta da folha, Hinata enviou um mensageiro solicitando a ida de Naruto para seu vilarejo, ele tem 2 opções ou 1- fica e espera o seu irmão retornar , 2 vai para o vilarejo Hyuga se encontrar com Hinata");

    if (lutar == 2) {
        todosJuntos()
    }  else if (lutar == 1) {
        alert('Como Naruto ficou no seu vilarejo aguardando seu irmão mais velho, todos da vila da folha foram derrotados e não foi possível vencer a batalha e muitos acabaram  morrendo em batalha e outros presos, pois sem um time organizado e estruturado para a batalha, pouco pode fazer contra o poderoso Orochimaru que acabou dominando a vila da folha')

        alert('Você Perdeu!! volte ao inicio')  
    }

    else {
        alert('Digite um numero válido, 1 ou 2 são as opções.')
        
    }

}

// fim história Naruto--------


// inicio história Hinata---

function historyHinata() {


    alert("Hinata sempre foi a maior promessa da sua vila sem muitos representantes fortes ela é a melhor aluna da classe, ela se destaca cada vez mais dia a dia, o futuro dela é promissor, porém não garantido, mas com nossa ajuda ela pode se tornar uma lenda. clique em ok para embarcarmos nessa jornada juntos");

    alert("Após a escolha de trabalhar junto com você passaram-se anos e Hinata muito habilidosa ganhou diversos torneios e outra coisa que ela era muito boa era sobre estrategias de guerras e como aproveitar ao máximo os guerreiros ao seu redor, direcionando cada um no campo de batalha estrategicamente conforme as habilidades de seus guerreiros");

    var lutar = prompt(" A primeira vilarejo a ser atacada é a Uchiha de Sasuke, após ficar sabendo do ataque , Hinata imediatamente convocou os guerreiros do seu vilarejo para traçar uma estratégia de defesa, o seu vilarejo tinha uma vantagem em comparação aos outros devido a áreas montanhosas e florestas, local onde poderiam surpreender seus oponentes, 1 - ela tem uma escolha aguardar o ataque e tentar com seus guerreiros lutar ou 2 - enviar mensageiro para outros vilarejos se juntarem a ela contando a sua estratégia. ");

    ////sabendo dos ataques ela enviou mensageiros para todas os vilarejos se juntarem a ela, pois teria vantagem estratégica e assim teriam uma chance de vencer juntos.

    if (lutar == 2) {

        todosJuntos()
    }  else if (lutar == 1) {
        alert('Como Hinata decidiu lutar sozinha, mesmo com todo seu conhecimento no campo de batalha não foi possivel vencer a batalha pois com poucos guerreiros ao seu lado não foi possivel vencer e ela acabou morrendo.., pouco pode fazer contra o poderoso Orochimaru que acabou dominando a Vila da folha')

        alert('Você Perdeu!! volte ao inicio')  
    }

    else {
        alert('Digite um numero válido, 1 ou 2 são as opções.')
        
    }

}

// fim da historia Hinata---


//inicio da história sincronizada-------

function todosJuntos() {

    alert('Como Hinata decidiu enviar os mensageiros, convocando Naruto, Sasuke e outros, eles atenderam o seu chamado e foram chegando aos poucos, o primeiro a chegar foi o Naruto, logo ao chegar Hinata o cumprimentou e foi passando sua estratégia e solicitando suas opniões para que formasse uma estratégia na batalha');

    alert('O próximo a chegar foi o Sasuke ferido da batalha, assim que chegou foi direto para os cuidados médicos');

    alert('Após os cuidados, Sasuke foi imediatamente conversar com Hinata e passar as informações sobre o inimigo, ao chegar lá encontrou também Naruto e ficou contente por rever um velho amigo,  Hinata pediu todos os detalhes para se posicionar estratégicamente na batalha')

    var lutar = prompt(" Hinata criou a estratégia e todos foram para o campo de batalha, porém com muitos lideres todos queria ter protagonismo, e se eles terminassem vitoriosos provavelmente que liderou se tornaria o líder de todos os vilarejos, agora todos prontos para a batalha Naruto e Sasuke tem 3 opções, 1- lutar de acordo com as orientações da Hinata, 2 - cada um tentar individualmente lutar diretamente contra Orochimaru, 3- os dois se juntarem e tentarem vencer Orochimaru ");

    if (lutar == 2) {

        alert('Devido a cada um buscar vencer e fazer o nome individualmente, todos foram derrotados devido a a ambiçao por poder e pensar que resolveriam sozinho, logo pouco puderam fazer contra o poderoso Orochimaru que acabou eliminando a todos e dominando a Vila da folha');

        alert('Você Perdeu!! volte ao inicio')  

    } else if (lutar == 1) {
        alert('Como todos decidiram se juntar a Hinata, a estrategia dela de ficar em um ponto mais alto da colina e proximo a floresta deu vantagem para eles conseguirem cercar e surpreender o inimigo, perdendo alguns companheiros, porém obteram exito e conseguiram vencer o inimigo graças a estratégia de Hinata')

    } else {

        alert('Com Naruto e Sasuke lutando juntos eles conseguiram vencer, mas durante a batalha perderam a amiga Hinata que se sacrificou para salvar ambos e todos da vila, assim eliminando o inimigo e perdendo diversos companheiros de batalha, devido a não ter se organizado de maneira estratégica.')

    }


}

// fim da historia Sincronizada ----
