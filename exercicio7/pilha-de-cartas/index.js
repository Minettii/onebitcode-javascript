const list = []
let prompiti = parseFloat(prompt('Olá, seja bem-vindo ao sistema de baralho virtual.' + (list.length === 0 ? '\nNo momento não há nenhuma carta no baralho.' : '\nNo momento há ' + list.length +  ' cartas no baralho.') + '\n1 - Adicionar uma carta.\n2 - Puxar uma carta\n3 - Sair'))
while (prompiti !== 3) {
     switch (prompiti) {
         case 1:
             list.unshift(prompt('Insira o nome da carta a ser adicionada.'))
             break
         case 2:
             if (list.length <= 0) {alert('Nenhuma carta no baralho.'); break}
             alert('A carta ' + list.shift() + ' foi puxada.')
             break
         default:
             alert('Opção inválida')
             break
     }
     prompiti = parseFloat(prompt('Olá, seja bem-vindo ao sistema de baralho virtual.' + (list.length === 0 ? '\nNo momento não há nenhuma carta no baralho.' : '\nNo momento há ' + list.length +  ' cartas no baralho.') + '\n1 - Adicionar uma carta.\n2 - Puxar uma carta\n3 - Sair'))
}

alert('Encerrando o programa...')