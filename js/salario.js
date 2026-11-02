var salarioAnterior = prompt("Digite o salário anterior: ");
var salarioAtual = prompt("Digite o salário atual: ");

var i = 2;

var totalSalario = parseFloat(salarioAnterior) + parseFloat(salarioAtual);

if (parseFloat(salarioAtual) > parseFloat(salarioAnterior)) {
    var ms = parseFloat(salarioAtual);
    var menor = parseFloat(salarioAnterior);
}else {
    var ms = parseFloat(salarioAnterior);
    var menor = parseFloat(salarioAtual);
}

if (parseFloat(salarioAnterior) == menor) {
    var mesMenor = 1;
}else {
    var mesMenor = 2;
}

if (parseFloat(salarioAtual) == ms) {
    var mesMaior = 2;
}else {
    var mesMaior = 1;
}

while (i < 12) {
    salarioAnterior = parseFloat(salarioAtual);
    salarioAtual = prompt("Digite o próximo salário: ");
    totalSalario += parseFloat(salarioAtual);

    if (parseFloat(salarioAtual) > ms) {
        ms = parseFloat(salarioAtual);
        mesMaior = i+1;
    }

    if (parseFloat(salarioAtual) < menor) {
        menor = parseFloat(salarioAtual);
        mesMenor = i+1;
    }

    i++;
}

switch (mesMaior) {
    case 1:
        mesMaior = "janeiro";
        break;
    case 2:
        mesMaior = "fevereiro";
        break;
    case 3:
        mesMaior = "março";
        break;
    case 4:
        mesMaior = "abril";
        break;
    case 5:
        mesMaior = "maio";
        break;
    case 6:
        mesMaior = "junho";
        break;
    case 7:
        mesMaior = "julho";
        break;
        case 8:
            mesMaior = "agosto";
            break;
    case 9:
        mesMaior = "setembro";
        break;
    case 10:
        mesMaior = "outubro";
        break;
    case 11:
        mesMaior = "novembro";
        break;
    case 12:
        mesMaior = "dezembro";
        break;
    default:
        mesMaior = "mês inválido";
        break;
}

switch (mesMenor) {
    case 1:
        mesMenor = "janeiro";
        break;
    case 2:
        mesMenor = "fevereiro";
        break;
    case 3:
        mesMenor = "março";
        break; 
    case 4:
        mesMenor = "abril";
        break;
    case 5:
        mesMenor = "maio";
        break;
    case 6:
        mesMenor = "junho";
        break;
    case 7:
        mesMenor = "julho";
        break;
    case 8:
        mesMenor = "agosto";
        break;
    case 9:
        mesMenor = "setembro";
        break;
    case 10:
        mesMenor = "outubro";
        break;
    case 11:
        mesMenor = "novembro";
        break;
    case 12:
        mesMenor = "dezembro";
        break;
    default:
        mesMenor = "mês inválido";
        break;
}

alert("O maior salário é: " + ms.toFixed(2).replace(".",",") + " e foi no mês de " + mesMaior);

alert("O menor salário é: " + menor.toFixed(2).replace(".",",") + " e foi no mês de " + mesMenor);

alert("A soma total dos salários é: " + totalSalario.toFixed(2).replace(".",","));
var media = totalSalario / 12;

alert("A média dos salários é: " + media.toFixed(2).replace(".",","));