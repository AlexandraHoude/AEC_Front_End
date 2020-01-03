/* Afficher les nombres de 1 à 10 avec le carré et le cube de chacun de ces nombres. */

var carre;
var cube;

for (var i = 1; i <= 10; i++) {
    carre = i * i;
    cube = i * i * i;
    document.write("le carré est " + carre + " et le cube est " + cube + "<br>");
}