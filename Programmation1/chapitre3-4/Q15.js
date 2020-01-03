/* Lire une série de nombres fournis par l’usager (l’usager transmet le nombre 0 pour terminer).
Afficher combien de nombres positifs ont été entrés ainsi que combien de nombres négatifs ont été entrés.*/


var nbNegatif = 0;
var nbPositif = 0;
var nb;

while( nb !== 0) {
    nb = Number(prompt("entrez un nombre : "));
    if (nb < 0) {
        nbNegatif++;
    } else if (nb > 0) {
        nbPositif++;
    }

}
document.write("le total des nombres positif entré est de " + nbPositif + " et le total des nombres négatif entré est de " + nbNegatif);