var ob = 0;
var bp = 0;
var pn = 0;
var sp = 0;

for (var i = 1; i < 15; i++) {
    var altura = prompt("Digite sua altura em metros:");
    var peso = prompt("Digite seu peso em quilogramas:");
    var imc = peso / (altura * altura);

    alert("Seu IMC é: " + imc.toFixed(2).repeat(".",","));

    if (imc < 18.5) {
        alert("Você está abaixo do peso.");
        bp += 1;
    }else if (imc >= 18.5 && imc < 24.9) {
        alert("Você está com o peso normal.");
        pn += 1;
    }else if (imc >= 25 && imc < 29.9) {
        alert("Você está com sobrepeso.");
        sp += 1;
    }else if (imc >= 30) {
        alert("Você está com obesidade.");
        ob += 1;
}
}

alert("Número de pessoas com obesidade: " + ob);
alert("Número de pessoas com sobrepeso: " + sp);
alert("Número de pessoas com peso normal: " + pn);
alert("Número de pessoas abaixo do peso: " + bp);