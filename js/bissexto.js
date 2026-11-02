var ai = prompt("digite o ano inicial: ");
var af = prompt("digite o ano final: ");
let cA = 0

for (var i = ai; i <= af; i++) {
    if (i % 4 == 0) {
        alert("O ano " + i + " é bissexto.");
        cA++;
    }
}
alert("Total de anos bissextos: " + cA);