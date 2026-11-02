var n = prompt("Digite um número de termos: ");
n = parseInt(n);
var a = 1;
var b = 1;
alert("Sequência de Fibonacci:");
alert(a);
for (var i = 1; i <= n; i++) {
    alert(b);
    var r = a + b;
    a = b;
    b = r;
}
alert(r);