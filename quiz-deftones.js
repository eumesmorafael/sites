function corrigirQuiz() {
    let pontos = 0;

    for (let i = 1; i <= 10; i++) {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);

        if (resposta && resposta.value === "certo") {
            pontos++;
        }
    }

    document.getElementById("resultado").innerHTML =
        `Você acertou ${pontos} de 10 perguntas!`;
}
function explorar() {
    window.location.href = "explore-portugues.html";
}