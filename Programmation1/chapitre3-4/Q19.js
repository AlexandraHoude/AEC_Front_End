/* Faites afficher 2 4 6 8 10 sur 30 lignes */

for (var y = 0; y <=30; y++) {
    for(var i = 2; i <= 10; i+=2) {
        document.write(i + " ");
    }
    document.write("<br>")
}
