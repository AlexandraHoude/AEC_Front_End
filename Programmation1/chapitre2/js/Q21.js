// Calculer et afficher l’impôt provincial à charger selon le revenu imposable :
// revenu > 0 et $7000.00 inclus : 16% du revenu imposable
// > 7000 et $14000.00 inclus : $1120 + 19.5% du reste
// >14000 et $23000.00 inclus : $2485 + 21.5% du reste
// >23000 et $50000.00 inclus : $4420 + 24.5% du reste
// >50000 et + $11035 + 26% du reste.

var salaire = Number(prompt("Entrez votre salaire:" ));
var braquette1 = salaire * 0.16;
var braquette2 = (salaire * 0.195) + 1120;
var braquette3 = (salaire * 0.215) + 2485;
var braquette4 = (salaire * 0.245) + 4420;
var braquette5 = (salaire * 0.26) + 11035;
var affichage;


if (salaire <= 7000){
    affichage = braquette1;
} else if (salaire > 7000 &&  salaire <= 14000) {
    affichage = braquette2;
} else if (salaire > 14000 && salaire <= 23000) {
    affichage = braquette3;
} else if (salaire > 23000 && salaire <= 50000) {
    affichage = braquette4;
} else if (salaire > 50000) {
    affichage = braquette5;
}
document.write(affichage);
