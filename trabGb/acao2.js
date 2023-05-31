//Array que vai guardar valores
nomes = [];
valores = "";
ponto = 0;

//Selecionando componentes da tela
var txtNomes = document.querySelector("#nomes");
btn = document.querySelector("#iniciar");
pontuacao = 0;
rodada = 1;
tempo = 1;

btn.addEventListener("click",function(){
    valores = txtNomes.value;
    nomes = valores.split(" ");
    txtNomes.value = '';
    txtNomes.disabled = true;
    btn.disabled = true;
    setTimeout(function(){
        jogar()
    }, tempo);
})

function jogar(){
    numeroAleatorio = Math.floor(Math.random() * nomes.length) + 1;
    palpite = prompt(`Digite o ${numeroAleatorio}º nome da lista:`);

    nomeCorreto = nomes[numeroAleatorio - 1];
    var mensagem;
    if ( palpite === nomeCorreto){
        pontuacao++;
        mensagem = 'Parabéns, você acertou!';
    } else {
        pontuacao--;
        mensagem = `Ops, você errou! O nome correto era ${nomeCorreto}.`;
    } if (pontuacao<0){
        pontuacao = 0;
    }

    alert(mensagem + ` Sua pontuação é ${pontuacao}.`);
    rodada++;
    if( rodada <= 5){
        jogar();
    } else {
        alert(`Fim do jogo! Sua pontuação final é ${pontuacao}.`);
        var proProf = document.querySelector('#proprof')
        proProf.innerHTML = 'Professor, se você estiver lendo, quero que guarde isso que irei dizer: "Eu prometo que vou ficar melhor no que eu faço e parar de ser um mané nestas coisas!!"'
        txtNomes.disabled = false;
        btn.disabled = false;
    }
}