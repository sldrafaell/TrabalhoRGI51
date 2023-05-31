var numero = [];

$(document.querySelector('#botao')).click(function(){
    
    var result = document.querySelector('#result');

    result.innerHTML = numero;

    for (i=0;i < 6; i++){
        ale = Math.floor(Math.random() * 100) + 1;
        
        numero.push(ale);
        result.innerHTML = "<p>"+numero+"</p>";

    }
    
});
