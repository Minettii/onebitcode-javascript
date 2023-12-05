let num1 = parseFloat(prompt("Digite o primeiro número:"))
let num2 = parseFloat(prompt("Digite o segundo número:"))

document.getElementById("num1").textContent += " "+num1
document.getElementById("num2").textContent += " "+num2
document.getElementById("soma").textContent += " "+(num1+num2)
document.getElementById("sub").textContent += " "+(num1-num2)
document.getElementById("mult").textContent += " "+(num1*num2)
document.getElementById("div").textContent += " "+(num1/num2)