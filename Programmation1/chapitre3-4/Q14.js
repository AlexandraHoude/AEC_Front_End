/* Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
Afficher la somme des nombres positifs ainsi que la somme des nombres négatifs. */

var nbNegatif = 0;
var nbPositif = 0;
var nb;

while( nb !== 0) {
    nb = Number(prompt("entrez un nombre : "));
    if (nb < 0) {
        nbNegatif += nb;
    } else if (nb > 0) {
        nbPositif += nb;
    }

}
document.write("la somme des nombre négatif est de " + nbNegatif + " et la somme des nombres positif est de " + nbPositif);
