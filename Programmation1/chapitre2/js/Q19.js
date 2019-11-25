// Lire le montant de vente et afficher le montant d’escompte correspondant sachant que le taux d’escompte est de 12% et n’est calculé que sur les montants supérieurs ou égaux à $500.00.

var montantVente = Number(prompt("Veuillez entrer le montant de vos achat svp : "));
var reduction = (montantVente * .12);
var totalReduction;
var affichage;


if (montantVente >= 500) {
    totalReduction = (montantVente - reduction);
    affichage = "le montant de votre achat après réduction est de " + totalReduction;

} else {
    affichage = "La réduction ne s'applique pas a ce montant d'achat";
}
document.write(affichage);