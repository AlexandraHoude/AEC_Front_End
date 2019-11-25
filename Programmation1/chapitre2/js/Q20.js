// Lire l’âge d’un individu et afficher le mot :
// « Adulte » si l’âge est >= 18 ans
// « Adolescent » si l’âge est compris entre 12 et 17 ans inclusivement
// « Enfant » si l’âge est < 12 ans.

var age = Number(prompt("Entrez votre age: "));
var affichage;

if (age >= 18) {
    affichage = "Adulte";
} else if (age < 12) {
    affichage = "Enfant";
} else if (age >= 12 && age <= 17) {
    affichage = "Adolescent";
}

document.write(affichage);