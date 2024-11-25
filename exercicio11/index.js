let escalacao = document.getElementById("escalacao");

function escalarJogador() {
  if (
    confirm(
      "Deseja escalar o jogador " +
        document.getElementById("addNome").value +
        " como " +
        document.getElementById("addPosicao").value +
        ", camisa " +
        document.getElementById("addCamisa").value +
        "?"
    )
  ) {
    let newLi = document.createElement("li");
    newLi.id = document.getElementById("addCamisa").value;
    newLi.innerHTML =
      document.getElementById("addNome").value +
      ", " +
      document.getElementById("addPosicao").value +
      ", camisa " +
      document.getElementById("addCamisa").value;
    escalacao.appendChild(newLi);
    document.getElementById("addPosicao").value = "";
    document.getElementById("addNome").value = "";
    document.getElementById("addCamisa").value = "";
  }
}

function removerJogador() {
  let jogador = document.getElementById(
    document.getElementById("removeCamisa").value
  );
  if (confirm("Deseja remover o jogador " + jogador.innerHTML + "?")) {
    escalacao.removeChild(jogador);
    alert("Jogador removido com sucesso.");
    document.getElementById("removeCamisa").value = "";
  }
}
