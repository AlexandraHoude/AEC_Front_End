// Lire 3 nombres A, B et C différents. Trouver et afficher le plus petit et le plus grand.

var nbA = Number(prompt("entrez un premier nombre: "));
var nbB = Number(prompt("entrez un deuxième nombre: "));
var nbC = Number(prompt("entrez un troisième nombre: "));
var affichage;

if (nbA > nbB && nbA > nbC) {
    affichage = "Le premier nombre est plus grand que le deuxième et que le troisième";
} else if (nbA < nbB && nbB > nbC) {
    affichage = "Le deuxième nombre est plus grand que le premier et que le troisième";
} else if (nbC > nbA && nbC > nbB) {
    affichage = "Le troisième nombre est plus grand que le premier et que le deuxième";
} else if (nbA === nbB === nbC) {
    affichage = "Erreur, les trois nombres sont égaux"
}
document.write(affichage);