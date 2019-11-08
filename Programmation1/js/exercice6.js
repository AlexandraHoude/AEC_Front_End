//Lire le nom et l’âge d’un individu, puis convertir son âge en jours (approximatif). Imprimer un message incluant son nom pour l’informer du nombre de jours vécus.

//Trouver les variables
var age;
var nom;
var nbJourVecu;

// Demander les informations à l'usager
age = Number (prompt("Quel est votre age ? : "));
nom = (prompt("Quel est votre nom ? : "));

//Calculer le nombre de jour vécu
nbJourVecu = age * 365;
console.log("Bonjour " + nom + " Vous avez vécu jusqu'a présent " + nbJourVecu + " jours");
