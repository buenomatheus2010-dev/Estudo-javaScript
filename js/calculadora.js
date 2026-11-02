var n1 = prompt("Digite o primeiro número: ");
var op = prompt("Digite a operação: ");

if (op == "+") {
    var n2 = prompt("Digite o segundo número: ");
    var r = parseFloat(n1) + parseFloat(n2);
    alert(n1+" + " + n2+" = " + r);
} else if (op == "-") {
    var n2 = prompt("Digite o segundo número: ");
    var r = parseFloat(n1) - parseFloat(n2);
    alert(n1+" - " + n2+" = " + r);
} else if (op == "*") {
    var n2 = prompt("Digite o segundo número: ");
    var r = parseFloat(n1) * parseFloat(n2);
    alert(n1+" * " + n2+" = " + r);
} else if (op == "/") {
    var n2 = prompt("Digite o segundo número: ");
    var r = parseFloat(n1) / parseFloat(n2);
    alert(n1+" / " + n2+" = " + r);
} else if (op == "%") {
    var n2 = prompt("Digite a porcentagem: ");
    var r = parseFloat(n1) % parseFloat(n2);
    alert(n1+" % " + n2+" = " + r);
}else if (op == "x^y") { 
    var n2 = prompt("Digite o expoente: ");
    var r = Math.pow(parseFloat(n1), parseFloat(n2));
    alert(n1+"^" + n2+" = " + r);
}else if (op == "fatorial"||op == "!") {
    var fa = parseFloat(n1);
    fa = parseInt(fa);
    var i = fa-1;
    var total = fa;
    do {
    total = total * i;
    i = i-1;
    } while (i > 1);
    alert(fa+"! = " + total);
}else if (op == "raiz quadrada"||op == "√") {
    var r = Math.sqrt(parseFloat(n1));
    alert("√" + n1 + " = " + r);
}else if (op == "raiz cúbica"||op == "∛") {
    var r = Math.cbrt(parseFloat(n1));
    alert("∛" + n1 + " = " + r);
}else {
    alert("Operação inválida!");
}