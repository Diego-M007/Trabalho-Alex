function verificarFase() {
    const nome = document.getElementById("nome").value.trim();
    const idadeInput = document.getElementById("idade").value;
    const idade = parseInt(idadeInput);

    let fase, classe;

    if (nome === "") {
        fase = "Digite seu nome";
        classe = "sem-valor";
    } else if (idadeInput === "" || isNaN(idade)) {
        fase = "digite um valor válido para idade";
        classe = "sem-valor";
    } else if (idade >= 0 && idade <= 11) {
        fase = "Criança";
        classe = "infancia";
    } else if (idade >= 12 && idade <= 17) {
        fase = "Adolescente";
        classe = "adolescencia";
    } else if (idade >= 18 && idade <= 64) {
        fase = "Adulto";
        classe = "vida-adulta";
    } else if (idade >= 65 && idade <= 110) {
        fase = "Idoso";
        classe = "terceira-idade";
    } else if (idade >= 111 && idade <= 200) {
        fase = "Nível Rainha Elizabeth";
        classe = "nivel-rainha";
    } else if (idade >= 201 && idade <= 1999) {
        fase = "Você é um Jabuti?";
        classe = "jabuti";
    } else if (idade >= 2000 && idade <= 2025) {
        fase = "Você foi discípulo de Jesus?";
        classe = "nivel-deus";
    } else {
        fase = "Idade fora do esperado";
        classe = "fora-do-intervalo";
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `${nome} ${fase}.`;
    resultadoDiv.className = classe;
}
