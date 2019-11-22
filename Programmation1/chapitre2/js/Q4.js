// Lire deux nombres. Vous devez diviser le premier nombre par le deuxième seulement si le deuxième nombre est différent de zéro.
//Par contre si ce nombre est zéro inscrivez le message suivant :‘Division par zéro interdite.’, si ce nombre n’est pas zéro vous devez imprimer le résultat.

var nb1 = Number(prompt("Entrez le nombre 1: "));
var nb2 = Number(prompt("Entrez le nombre 2: "));
var resultat;

if (nb2 !== 0) {
    resultat = nb1 / nb2;
    document.write("le résultat est: " + resultat);
} else {
    document.write("Divison par zéro interdite");
}