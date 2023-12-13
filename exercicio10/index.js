let vagas = [];

function executar() {
  let situacao = "";

  do {
    situacao = exibirMenu();

    switch (situacao) {
      case "1":
        listarVagas(vagas);
        break;
      case "2":
        criarVaga();
        break;
      case "3":
        vizualizarVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Finalizando o programa.");
        break;
      default:
        alert("Opção inválida.");
    }
  } while (situacao !== "6");
}

function exibirMenu() {
  return prompt(
    "Escolha uma opção: \n" +
      "1. Listar vagas disponíveis\n" +
      "2. Criar uma nova vaga\n" +
      "3. Visualizar uma vaga\n" +
      "4. Inscrever um candidato em uma vaga\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair\n"
  );
}

function listarVagas(vagas) {
  if (vagas.length === 0) {
    alert("Não há nenhuma vaga cadastrada.");
    return;
  }
  let txtVagas = "Vagas disponíveis:\n\n";
  for (let i = 0; i < vagas.length; i++) {
    txtVagas +=
      "Indíce da Vaga: " +
      i +
      "\nNome da vaga: " +
      vagas[i].nome +
      "\nQuantidade de candidatos inscritos: " +
      vagas[i].candidatos.length;
    if (i + 1 < vagas.length) {
      txtVagas += "\n\n";
    }
  }
  alert(txtVagas);
}

function criarVaga() {
  let vaga = {
    nome: prompt("Informe um nome para a vaga"),
    descricao: prompt("Informe uma descrição para a vaga"),
    dataLimite: prompt("Informe uma data limite a vaga"),
    candidatos: [],
  };
  if (
    confirm(
      "Deseja salvar a seguinte vaga?\n\nIndíce da Vaga: " +
        vagas.length +
        "\nNome da vaga: " +
        vaga.nome +
        "\nDescrição da vaga: " +
        vaga.descricao +
        "\nData limite da vaga: " +
        vaga.dataLimite
    )
  ) {
    vagas.push(vaga);
    alert("Vaga criada com sucesso.");
  }
}

function vizualizarVaga() {
  if (vagas.length === 0) {
    alert("Não há nenhuma vaga cadastrada.");
    return;
  }
  let txtVaga = "";
  let ind = prompt("Informe o indíce da vaga que deseja visualizar:");
  if (ind >= vagas.length) {
    alert("Indíce inválido.");
    return;
  } else {
    txtVaga =
      "Indíce da Vaga: " +
      ind +
      "\nNome da vaga: " +
      vagas[ind].nome +
      "\nDescrição da vaga: " +
      vagas[ind].descricao +
      "\nData limite da vaga: " +
      vagas[ind].dataLimite +
      "\nQuantidade de candidatos inscritos: " +
      vagas[ind].candidatos.length;

    if (vagas[ind].candidatos.length !== 0) {
      for (let i = 0; i < vagas[ind].candidatos.length; i++) {
        txtVaga += "\n Candidato " + (i + 1) + ". " + vagas[ind].candidatos[i];
      }
    }
  }
  alert(txtVaga);
}

function inscreverCandidato() {
  if (vagas.length === 0) {
    alert("Não há nenhuma vaga cadastrada.");
    return;
  }
  let ind = prompt("Informe o indíce da vaga na qual será feita a inscrição:");
  if (ind >= vagas.length) {
    alert("Indíce inválido.");
    return;
  }
  let candidato = prompt("Informe o nome do candidato:");
  if (
    confirm(
      "Deseja confirmar a inscrição do candidato " +
        candidato +
        " na seguinte vaga?\n\nIndíce da Vaga: " +
        ind +
        "\nNome da vaga: " +
        vagas[ind].nome +
        "\nDescrição da vaga: " +
        vagas[ind].descricao +
        "\nData limite da vaga: " +
        vagas[ind].dataLimite +
        "\nQuantidade de candidatos inscritos: " +
        vagas[ind].candidatos.length
    )
  ) {
    vagas[ind].candidatos.push(candidato);
  }
}

function excluirVaga() {
  if (vagas.length === 0) {
    alert("Não há nenhuma vaga cadastrada.");
    return;
  }
  let ind = prompt("Informe o indíce da vaga que deseja excluir:");
  if (ind >= vagas.length) {
    alert("Indíce inválido.");
    return;
  } else {
    if (
      confirm(
        "Deseja excluir a seguinte vaga?\n\nIndíce da Vaga: " +
          ind +
          "\nNome da vaga: " +
          vagas[ind].nome +
          "\nDescrição da vaga: " +
          vagas[ind].descricao +
          "\nData limite da vaga: " +
          vagas[ind].dataLimite +
          "\nQuantidade de candidatos inscritos: " +
          vagas[ind].candidatos.length
      )
    ) {
      vagas.splice(ind, 1);
      alert("Vaga excluída com sucesso.");
    }
  }
}

executar();
