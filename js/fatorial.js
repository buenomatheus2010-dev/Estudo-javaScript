var fa = prompt("Digite um número: ");
fa = parseInt(fa);
var i = fa-1;
var total = fa;
do {
    total = total * i;
    i = i-1;
} while (i > 1);
alert("O fatorial do número digitado é: " + total);