// Lire 2 nombres au clavier.
// Si ces 2 nombres sont :
// supérieurs ou égaux à 10, affichez leur somme
// inférieurs à 10, affichez leur produit
// Si l'un des deux nombres est supérieur ou égal à 10 et l'autre inférieur à 10, affichez la différence entre les deux nombres.

var nb1 = Number(prompt("Entrez le premier nombre: "));
var nb2 = Number(prompt("Entrez le deuxième nombre: "));
var affichage;
var somme = nb1 + nb2;
var produit = nb1 * nb2;
var difference;


if (nb1 >= 10 && nb2 >= 10) {
 affichage = "voici le résultat " + somme;
} else if (nb1 < 10 && nb2 < 10) {
    affichage = "voici le résultat " + produit;
} else if (nb1 >= 10 && nb2 < 10) {
    difference = nb1 - nb2;
    affichage = "voici le résultat " + difference;
} else if (nb2 >= 10 && nb1 < 10) {
    difference = nb2 - nb1;
    affichage = "voici le résultat " + difference;
}
document.write(affichage);