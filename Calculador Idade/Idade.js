// Função chamada quando o botão "Avaliar idade" é clicado
function verificarFase() {
    // Pega o valor digitado no campo de nome e remove espaços extras
    const nome = document.getElementById("nome").value.trim();

    // Pega o valor digitado no campo de idade 
    const idadeInput = document.getElementById("idade").value;

    // Converte a idade para número inteiro
    const idade = parseInt(idadeInput);

    let fase, classe; // Variáveis para armazenar a fase e a classe CSS

    // Se o nome estiver vazio, pede para digitar
    if (nome === "") {
        fase = "Digite seu nome";
        classe = "sem-valor";

    // Se idade não for preenchida ou não for número, dá aviso
    } else if (idadeInput === "" || isNaN(idade)) {
        fase = "digite um valor válido para idade";
        classe = "sem-valor";

    // Se idade entre 0 e 11 → Criança
    } else if (idade >= 0 && idade <= 11) {
        fase = "Criança";
        classe = "infancia";

    // Se idade entre 12 e 17 → Adolescente
    } else if (idade >= 12 && idade <= 17) {
        fase = "Adolescente";
        classe = "adolescencia";

    // Se idade entre 18 e 64 → Adulto
    } else if (idade >= 18 && idade <= 64) {
        fase = "Adulto";
        classe = "vida-adulta";

    // Se idade entre 65 e 110 → Idoso
    } else if (idade >= 65 && idade <= 110) {
        fase = "Idoso";
        classe = "terceira-idade";

    // Se idade entre 111 e 200 → Rainha Elizabeth
    } else if (idade >= 111 && idade <= 200) {
        fase = "Nível Rainha Elizabeth";
        classe = "nivel-rainha";

    // Se idade entre 201 e 1999 →  Jabuti
    } else if (idade >= 201 && idade <= 1999) {
        fase = "Você é um Jabuti?";
        classe = "jabuti";

    // Se idade entre 2000 e 2025 →  Discípulo de Jesus
    } else if (idade >= 2000 && idade <= 2025) {
        fase = "Você foi discípulo de Jesus?";
        classe = "nivel-deus";
        

    // Qualquer outro valor → Fora do intervalo esperado
    } else {
        fase = "Idade fora do esperado, digite um valor válido";
        classe = "fora-do-intervalo";
    }

    // Seleciona a div de resultado
    const resultadoDiv = document.getElementById("resultado");

    // Insere o nome e a fase calculada dentro da div
    resultadoDiv.innerHTML = `${nome} é ${fase}.`;

    // Adiciona uma classe CSS para estilizar conforme a fase
    resultadoDiv.className = classe;
}
