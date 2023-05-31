var numero = [];
var quantidadeNumeros = 6;
var sorteio = [];

$(document.querySelector('#botao')).click(function(){
    
    var result = document.querySelector('#result');

    result.innerHTML = numero;

    for (i=0;i < 6; i++){
        while (numero.length < quantidadeNumeros){
            ale = Math.floor(Math.random() * 100) + 1;
            if ($.inArray(ale, numero) === -1){
                numero.push(ale);
                
            } 
        }
        result.innerHTML = "<p>"+numero+"</p>";
        
    }
    
});
