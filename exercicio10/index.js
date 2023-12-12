let vagas = []

function executar (){
    let situacao = ""

    do {
        situacao = exibirMenu()

        switch (situacao) {
            case "1":
                listarVagas(vagas)
            break
            case "2":
                vaga = {nome: prompt("Informe um nome para a vaga"),
                descricao: prompt("Informe uma descrição para a vaga"),
                dataLimite: prompt("Informe uma data limite a vaga")}
                if (confirm("")) {criarVaga(vaga)}
                alert("Vaga criada com sucesso.")
            break
            case "3":
                vizualizarVaga(prompt("Informe o indíce da vaga que deseja visualizar:"))
            break
            case "4":
                inscreverCandidato()
            break
            case "5":
                excluirVaga(prompt("Informe o indíce da vaga que deseja excluir:"))
            break
            case "6":
                alert("Finalizando o programa.")
            break
            default:
                alert("Opção inválida.")

        }
    }while(situacao!== "6")
}

function exibirMenu() {
    return prompt(
      "Escolha uma opção: \n" +
      "1. Listar vagas disponíveis\n" +
      "2. Criar um nova vaga\n" +
      "3. Visualizar uma vaga\n" +
      "4. Inscrever um candidato em uma vaga\n" +
      "5. Excluir uma vaga\n" +
      "6. Sair\n"
    )
  }

  function listarVagas(vagas) {

  }

  function criarVaga(vaga){

  }

  function vizualizarVaga(ind){

  }

  function inscreverCandidato () {
    let ind = prompt("Informe o indíce da vaga na qual será feita a inscrição")
    let candidato = prompt("Informe o nome do candidato")
        if (confirm("")) {}
  }

  function excluirVaga(ind){

  }

  executar()