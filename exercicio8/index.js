let situacao = ""
let listaImoveis = []

situacao = parseFloat(prompt('Olá, escolha uma das opções abaixo: '+ '\n1 - Salvar um imóvel\n2 - Mostrar todos os imóveis salvos\n3 - Encerrar programa'))
while(situacao!=3) {
    switch (situacao) {
        case 1:
            let imovel = {}
            imovel["nomeProp"] = prompt("Insira o nome do proprietário do imóvel:")
            imovel["qtdQuartos"] = prompt("Insira a quantidade de quartos do imóvel:")
            imovel["qtdBanheiros"] = prompt("Insira a quantidade de banheiros do imóvel:")
            imovel["possuiGaragem"] = confirm("O imóvel possui garagem?")
            listaImoveis.push(imovel)
alert("Imóvel salvo com sucesso.")
        break
        case 2:
            let textoImoveis = ""
            if (listaImoveis.length===0) {
                textoImoveis = "Não há nenhum imóvel cadastrado."
            }
            else{
                textoImoveis = "Os seguintes imóveis estão salvos: "
                for (let i=0; i<listaImoveis.length;i++) {
                    textoImoveis += "\n\nImóvel "+(i+1)+":\nNome do Proprietário: "+listaImoveis[i].nomeProp+"\nQuantidade de Quartos: "+listaImoveis[i].qtdQuartos+"\nQuantidade de Banheiros: "+listaImoveis[i].qtdBanheiros+"\nPossui Garagem? " +(listaImoveis[i].possuiGaragem ? "Sim" : "Não")
                }
            }
            alert(textoImoveis)
        break
        default:
            alert('Opção inválida')
    }
    situacao = parseFloat(prompt('Olá, escolha uma das opções abaixo: '+ '\n1 - Salvar um imóvel\n2 - Mostrar todos os imóveis salvos\n3 - Encerrar programa'))
}
alert("Saindo do programa.")