var b = prompt("Digite a base: ");
var e = prompt("Digite o expoente: ");
var r = 1;
if (e == 0) {
    r = 1;
    alert("O resultado da potência é: " + r);
}
do {
    r = r * b;
    e = e - 1;
} while (e > 0);
alert("O resultado da potência é: " + r);