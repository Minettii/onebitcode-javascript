let nomeTurista = prompt("Qual seu nome?");
let situacao = confirm("Você já visitou alguma cidade?");
let cidades = [];
let cidade = "";
while (situacao) {
  cidade = prompt("Qual o nome da cidade?");
  cidades.push(cidade);
  situacao = confirm("Você já visitou alguma outra cidade?");
}
let txt =
  "Seu nome é: " +
  nomeTurista +
  "\nVocê já visitou " +
  cidades.length +
  " cidades.";
if (cidades.length !== 0) {
  txt += "\nAs cidades que você já visitou são:";
  for (let i = 0; i < cidades.length; i++) {
    txt += "\n" + cidades[i];
  }
}
alert(txt);
