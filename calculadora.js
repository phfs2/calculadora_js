
var sair = false;

do{
    var num1 = parseInt(prompt('Informe o primeiro numero: '));
    var num2 = parseInt(prompt('Informe o segundo numero: '));
    
    var operador = prompt('Informe a operação: ');

    switch(operador){
        case '+':
            var soma = num1 + num2;

            alert('O resultado da soma é ' + soma );
        break;

        case '-':
            var sub = num1 - num2;

            alert('O resultado da subtração é ' + sub);
        break;

        case '/':
            var div = num1 / num2;
            var resto = num1 % num2;
           if( resto != 0){
               alert('O resultado da divisão é ' + div);
               alert('O resto da divisão é ' + resto)
           }
           else{
                alert('O resultado da divisão é ' + div);
           }
        break;

        case '*':
            var mult = num1 * num2;

            alert('O resultado da multiplicação é ' + mult);

        break;

        default:
            alert("Operação inválida, tente novamente!");
    }

    var numEscape = parseInt(prompt('Digite: \n1- Operar novamente\n2-Sair'));

    if(numEscape == 2){
        sair = true;
    }


}while(sair == false);