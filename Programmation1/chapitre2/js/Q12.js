//Calculer le prix des assurances pour un véhicule.
// Pour un garçon entre 16 et 25 ans, le prix des assurances est de 5 % de la valeur du véhicule.
// S’il est plus vieux, le taux sera de 3 %.
// Pour une fille entre 16 et 25 ans, le taux est de 3 % et de 2% pour une fille plus âgée.

var sexe = prompt("Quel est votre sexe ? : ");
var age = Number(prompt("Quel est votre age ? : "));
var valeurVehicule = Number(prompt("Quel est la valeur de votre véhicule ? : "));
var montantAssurance;
var affichage;


if (sexe === "homme" &&  age > 16 && age < 25) {
    montantAssurance = (valeurVehicule * 0.05);
    affichage = "<h2 id='homme'> le montant de votre prime est de : " + montantAssurance + "</h2>"
} else if (sexe === "homme" && age >= 25) {
    montantAssurance = (valeurVehicule * 0.03);
    affichage = "<h2 id='homme'> le montant de votre prime est de : " + montantAssurance + "</h2>"
} else if (sexe === "femme" &&  age > 16 && age < 25) {
    montantAssurance = (valeurVehicule * 0.05);
    affichage = "<h2 id='femme'> le montant de votre prime est de : " + montantAssurance + "</h2>"
} else if (sexe === "femme" && age >= 25) {
    montantAssurance = (valeurVehicule * 0.03);
    affichage = "<h2 id='femme'> le montant de votre prime est de : " + montantAssurance + "</h2>"
}else {
    affichage = "Vous avez entré une valeur invalide, recommencez svp"
}

document.write(affichage);

if (sexe === "homme"){
    document.getElementById("homme").style.color = "green";
} else if (sexe === "femme") {
    document.getElementById("femme").style.color = "magenta";
}
