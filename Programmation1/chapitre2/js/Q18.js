// Lire une note d’examen et afficher « Échec » si la note est inférieure à 60 et « Bravo » si la note est supérieure ou égale à 60.

var note = Number(prompt("Entrez votre note ici: "));
var affichage;

if (note > 60) {
    affichage = "Bravo";
} else if (note < 60) {
    affichage = "Échec";
}
document.write(affichage);