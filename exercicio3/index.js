let medida = parseFloat(prompt("Insira um valor em metros:"))
let unidadeMedida = parseFloat(prompt("Escolha uma alternativa de unidade de medida para a qual o valor informado em metros deve ser convertido:\n1. (mm) Milímetro\n2. (cm) Centímetro\n3. (dm) Decímetro\n4. (dam) Decâmetro\n5. (hm) Hectômetro\n6. (km) Quilômetro"))

switch (unidadeMedida){
    case 1 :
        alert("O resultado é: "+medida*1000+"mm.")
        break
    case 2 :
        alert("O resultado é: "+medida*100+"cm.")
        break
    case 3 :
        alert("O resultado é: "+medida*10+"dm.")
        break
    case 4 :
        alert("O resultado é: "+medida/10+"dam.")
        break
    case 5 :
        alert("O resultado é: "+medida/100+"hm.")
        break
    case 6 :
        alert("O resultado é: "+medida/1000+"km.")
        break
    default :
        alert("Opção inválida: Uma opção diferente das disponíveis foi inserida.")
}