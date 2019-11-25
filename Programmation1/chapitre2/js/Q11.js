//Lire une lettre au clavier.
// Si la lettre est 'w', écrire Avancer.
// Si la lettre est 'a', écrire Gauche.
// Ajouter 's' et 'd'.
// Si c'est autre chose, écrire un message d'erreur.

var mouvement = prompt("Entrez la touche souhaité ici: ");
var affichage;

if (mouvement === "w" ) {
    affichage = "Avancer";
} else if (mouvement === "a") {
    affichage = "Gauche";
} else if (mouvement === "s") {
    affichage = "Coucher";
} else if (mouvement === "d") {
    affichage = "Droite";
} else {
    affichage = "La lettre est invalide";
}
document.write(affichage);