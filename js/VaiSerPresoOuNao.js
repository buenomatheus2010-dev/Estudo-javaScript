var ANasc = prompt("Digite o ano de nascimento: ");
var AnoAtual = prompt("Digite o ano atual: ");
var Id = AnoAtual - ANasc;
var nome = prompt("Digite seu nome: ");

if (Id < 18) {
    alert(nome+", você é menor de idade ");
}else {
    alert(nome+", você é maior de idade ");
}