// Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nb = Number(prompt("entrez votre nombre: "));

if (nb > 0) {
    console.log("Positif");
} else if (nb < 0) {
    console.log("Negatif");
} else {
    console.log("zéro");
}