var m = prompt("digite meses");
var eo = prompt("digite valor do emprestimo");

var juros = eo

for (var i=1; i<=m; i++){
    var t = parseFloat(juros)+parseFloat(juros)*2.5/100;
    juros = t;
}
alert("O valor total do emprestimo é: "+juros.toFixed(2).replace(".",","));
var vt = juros-eo;
alert("O valor total de juros é: "+vt.toFixed(2).replace(".",","));
var parcela = juros/m;
alert("O valor da parcela é: "+parcela.toFixed(2).replace(".",","));
