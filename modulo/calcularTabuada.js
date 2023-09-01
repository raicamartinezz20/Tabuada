

const gerarTabuada = function(valorTabuada, contadorInicial, contadorFinal){

    let tabuada = valorTabuada;
    let contInicial = contadorInicial;
    let contFinal = contadorFinal;

    let resultado;
    let status = false;

    if(contFinal < contInicial){
        contInicial = contFinal;
        contFinal = contInicial;
    }

    if (contInicial == '' || contFinal == '' || tabuada == '')
    console.log('ERRO: É obrigatório fornecer todos os valores.');
    else if (isNaN(contInicial) || isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada))
    console.log('ERRO: É obrigatório a entrada somente dos números.')
    else{

        contInicial = Number(contInicial);
        contFinal = Number(contFinal);

        while(contInicial <= contFinal){
            resultado = tabuada * contInicial;
            console.log(`${tabuada} x ${contInicial} = ${resultado}`);

            contInicial ++;

            status = true;
        }
    }
    
    return status;

}


gerarTabuada('9', '0', '10')