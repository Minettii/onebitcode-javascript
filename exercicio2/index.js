function dano(){
    let nome1 = prompt("Qual o nome do primeiro personagem?")
    let atk =  parseFloat(prompt("Qual o poder de ataque do primeiro personagem?"))
    let nome2 = prompt("Qual o nome do segundo personagem?")
    let vida = parseFloat(prompt("Qual a quantidade de pontos de vida do segundo personagem?"))
    let defesa = parseFloat(prompt("Qual o poder de defesa do segundo personagem?"))
    let escudo = confirm("O segundo personagem possui um escudo?")
    if(atk>defesa){
        alert("O dano causado foi: " + (!escudo?atk-defesa:(atk-defesa)/2))
    }
    else{
        alert("O dano causado foi: 0")
            }
}

function velo(){
    let nome1 = prompt("Qual o nome do primeiro veículo?")
    let velo1 = parseFloat(prompt("Qual a velocidade do primeiro veículo?"))
    let nome2 = prompt("Qual o nome do segundo veículo?")
    let velo2 = parseFloat(prompt("Qual a velocidade do segundo veículo?"))
    if (velo1===velo2) {
        alert("Os dois veículos tem a mesma velocidade.")
    }else{
        alert(velo1>velo2?"O primeiro veículo é o mais rápido.":"O segundo veículo é o mais rápido.")
    }
}