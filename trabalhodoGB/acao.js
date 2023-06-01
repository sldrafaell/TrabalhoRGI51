var numero = [];
var historico = [];

$('#botao').click(function(){

    var result = document.querySelector('#result');
    
    do{
        ale = Math.floor(Math.random() * 100) + 1;
        if ($.inArray(ale, numero) === -1){
            numero.push(ale);  
        }
    
    }while(numero.length < 6)

    result.innerHTML += "<p>"+numero+"</p>";

    historico.push(numero);
    numero = [];
});
