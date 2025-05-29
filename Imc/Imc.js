// Declaração das variáveis
var altura;
var peso;
var imc;
var resultado;

// Função chamada ao enviar o formulário
function calcular(event) {
    event.preventDefault(); // Evita que a página recarregue ao enviar o formulário

    // Pega o valor digitado no campo 'peso', substitui vírgula por ponto e converte para número 
    peso = parseFloat(document.getElementById("peso").value.replace(",", "."));

    // Pega o valor digitado no campo 'altura', substitui vírgula por ponto e converte para número
    altura = parseFloat(document.getElementById("altura").value.replace(",", "."));

    // Calcula o IMC usando a fórmula peso / (altura * altura)
    imc = peso / (altura * altura);

    // Seleciona a div onde o resultado será mostrado
    resultado = document.getElementById("resultado");

    // Verifica em qual faixa o IMC calculado se encaixa e monta a mensagem correspondente
    if (imc < 17) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado, você está muito abaixo do seu peso!";

    } else if (imc >= 17 && imc <= 18.49) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!";

    } else if (imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal!";

    } else if (imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está com sobrepeso";

    } else if (imc >= 30 && imc <= 34.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado, obesidade grau 1";

    } else if (imc >= 35 && imc <= 39.99) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado, obesidade grau 2!";

    } else if (imc >= 40) {
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado, obesidade grau 3!";

    }

    // Limpa os campos de entrada após o cálculo
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}
