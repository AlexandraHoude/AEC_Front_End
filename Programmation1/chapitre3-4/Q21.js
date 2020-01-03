/* Faites afficher 1 3 5 7 9 11 sur 13 lignes */

for (var y = 0; y <=13; y++) {
    for(var i = 1; i <= 11; i+= 2) {
        document.write(i + " ");
    }
    document.write("<br>");
}