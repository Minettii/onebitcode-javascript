let listaPacientes = []
let situacao = 0
let listagem = ""

situacao = parseFloat(prompt('Olá, seja bem-vindo ao sistema de atendimento virtual.' + (listaPacientes.length === 0 ? '\nNo momento não há nenhum paciente.' : listagem) + '\n1 - Novo Paciente\n2 - Consultar paciente\n3 - Encerrar programa'))

while (situacao !== 3) {
    
    switch (situacao) {
        case 1:
            listaPacientes.push(prompt('Insira o nome do paciente à aguardar na fila.'))
            break
        case 2:
            if(listaPacientes.length===0) {
                alert("Não há pacientes na fila")
                break
            }
            alert(listaPacientes.shift())
            break
        default:
            alert('Opção inválida')
    }
    if (listaPacientes.length > 0) {
        listagem = ""
        for (let i = 0; i < listaPacientes.length; i++){
            listagem += i+1 + 'º - ' + listaPacientes[i] + '\n'
        }
    }
    situacao = parseFloat(prompt('Olá, seja bem-vindo ao sistema de atendimento virtual.' + (listaPacientes.length === 0 ? '\nNo momento não há nenhum paciente.' : '\n'+listagem) + '\n1 - Novo Paciente\n2 - Consultar paciente\n3 - Encerrar programa'))
   
}
alert('Encerrando o programa...')
