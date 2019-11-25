// Lire 2 nombres A et B différents. Trouver et afficher le plus petit et le plus grand.
// Si les deux nombres sont identiques, affichez un message d'erreur à l'utilisateur.

var nbA = Number(prompt("entrez un premier nombre: "));
var nbB = Number(prompt("entrez un deuxième nombre: "));
var affichage;

if (nbA > nbB) {
    affichage = "Le premier nombre est plus grand que le deuxième";
} else if (nbA < nbB) {
    affichage = "Le deuxième nombre est plus grand que le premier";
} else if (nbA === nbB) {
    affichage = "Erreur, les deux nombres sont égaux"
}
document.write(affichage);