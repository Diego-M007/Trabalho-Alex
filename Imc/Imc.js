var altura;
var peso;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
    altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
    

    imc = peso / (altura * altura)

   resultado = document.getElementById("resultado");

   if (imc < 17) {
    resultado = document.getElementById("resultado")
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do seu peso!";
    resultado.style.cssText = 'background-color: red;';
   } else if (imc >= 17 && imc <= 18.49) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!";
    resultado.style.cssText = 'background-color: red;';
   } else if (imc >= 18.5 && imc <= 24.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está no peso ideal!";
    resultado.style.cssText = 'background-color: rgba(0, 0, 255, 0.596) ;';
   } else if (imc >= 25 && imc <= 29.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Você está com sobrepeso";
    resultado.style.cssText = 'background-color: red;';
   } else if (imc >= 30 && imc <= 34.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado, obesidade grau 1";
    resultado.style.cssText = 'background-color: red;';
   } else if (imc >= 35 && imc <= 39.99) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado, obesidade grau 2!";
    resultado.style.cssText = 'background-color: red;';
   } else if (imc >= 40) {
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado, obesidade grau 3!";
    resultado.style.cssText = 'background-color: red;';
   }
   document.getElementById("peso").value = "";
   document.getElementById("altura").value = "";
}