/* Faites afficher 10 8 6 4 2 0 sur 12 lignes */

for (var y = 0; y <=12; y++) {
    for(var i = 10; i >= 0; i-=2) {
        document.write(i + " ");
    }
    document.write("<br>");
}