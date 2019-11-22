// Calculer la surface d'un rectangle dont la longueur et la largeur sont lues a l'écran

// trouver les variables
var surface;
var largeur;
var longueur;

// demander les données à l'usager
largeur = Number(prompt("Veuillez entrer la largeur : "));
longueur = Number (prompt("Veuillez entrer la longueur : "));

// Calculer la surface du rectangle
surface = largeur * longueur ;

// afficher le resultat
console.log("le résultat est " + surface);