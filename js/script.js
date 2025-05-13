function mostrarDica() {
  document.getElementById("dica").innerText = "Use batata asterix e pré-cozinhe antes de fritar!";
}

function validarQuiz() {
  const respostas = document.forms["quiz-form"];
  let acertos = 0;

  if (respostas.q1.value === "certo") acertos++;
  if (respostas.q2.value === "certo") acertos++;
  if (respostas.q3.value === "verdadeiro") acertos++;

  document.getElementById("resultado").innerText = `Você acertou ${acertos} de 3 questões.`;
  return false;
}

function entrarCurso() {
  const intro = document.getElementById("intro-screen");
  intro.classList.add("fade-out");

  setTimeout(() => {
    intro.style.display = "none";
    document.body.classList.remove("intro-active");
  }, 600); // mesmo tempo que a animação CSS
}
