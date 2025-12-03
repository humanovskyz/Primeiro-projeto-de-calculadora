function calculadora(){

const escolha = document.getElementById("operacoes").value;

const numeroUm = Number(document.getElementById("numeroUm").value);
const numeroDois = Number(document.getElementById("numeroDois").value);
let resultado;

    if ( escolha == "multiplicacao" ){
        resultado = numeroUm * numeroDois;
    } else if ( escolha == "divisao" ){
        resultado = numeroUm / numeroDois;
    } else if ( escolha == "soma" ){
        resultado = numeroUm + numeroDois;
    } else{
        resultado = numeroUm - numeroDois;
    }
document.getElementById("resposta").textContent = "Seu resultado é: " + resultado.toFixed(2);
return 0;
}
const calcular = document.getElementById("calcular");
calcular.onclick = calculadora;
