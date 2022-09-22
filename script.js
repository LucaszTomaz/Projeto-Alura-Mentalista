var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Favor digitar um número entre 0 e 10";
  } else if (numeroSecreto > chute) {
    elementoResultado.innerHTML =
      "Você errou, o número secreto é maior do que o escolhido!";
  } else {
    elementoResultado.innerHTML =
      "Você errou, o número secreto é menor do que o escolhido!";
  }
}