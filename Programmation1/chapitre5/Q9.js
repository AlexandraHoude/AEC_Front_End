/* Lire 10 nombres quelconques et les placer dans un tableau. Par la suite, trouver le plus petit et le plus grand de ces nombres.*/

var tabNb = [];
var min = 0;
var max = 0;

for (var i = 0; i < 10; i++) {
    tabNb[i] = Number(prompt("Veuillez entrer un nombre: "));
}


for (var y = 0; y < tabNb.length; y++) {
    if (tabNb[y] > max) {
        max = tabNb[y];
    }
}

min = max;

for (var y = 0; y < tabNb.length; y++) {
    if (tabNb[y] < min) {
        min = tabNb[y];
    }
}

document.write("le nombre le plus petit est " + min + "<br>");
document.write("le nombre le plus grand est " + max);
console.log(tabNb);
