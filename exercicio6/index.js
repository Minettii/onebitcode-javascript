let num = parseFloat(prompt("Insira um número para que seja calculada sua tabuada do 1 ao 20:"))
let txt ="Tabuado do 1 ao 20 do número: "+num+"\n"
for (let n=1; n<=20; n++) {
    txt += "\n"+n+"*"+num+" = "+(n*num)
}
alert(txt)