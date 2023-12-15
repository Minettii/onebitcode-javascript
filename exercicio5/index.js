let situacao
do {
    situacao = prompt("Escolha uma opção:\n1) Opção 1\n2) Opção 2\n3) Opção 3\n4) Opção 4\n5) Encerrar")
    switch (situacao) {
        case "1":
        alert("Opção 1 escolhida.")
        break
        case "2":
        alert("Opção 2 escolhida.")
        break
        case "3":
        alert("Opção 3 escolhida.")
        break
        case "4":
        alert("Opção 4 escolhida.")
        break
        case "5":
        alert("Programa encerrado.")
        break
        default:
        alert("Opção inválida.")
    }
}
while(situacao !== "5")
