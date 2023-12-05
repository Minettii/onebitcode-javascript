let nome = prompt("Qual seu nome?")
let sobrenome = prompt("Qual seu sobrenome?")
let campoEstudo = prompt("Qual seu campo de estudo?")
let anoNasc = parseFloat(prompt("Qual seu ano de nascimento?"))

document.getElementById("nome").textContent += " "+nome
document.getElementById("sobrenome").textContent += " "+sobrenome
document.getElementById("campoEstudo").textContent += " "+campoEstudo
document.getElementById("anoNasc").textContent += " "+anoNasc
document.getElementById("idade").textContent += " "+((new Date().getFullYear())-anoNasc)