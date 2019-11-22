// Un marchand décide d’accorder une réduction de 15% à tout acheteur, si le montant total de ses achats est plus grand que 200.00$.
// Écrire un algorithme qui permet de calculer et d’afficher la réduction que chaque acheteur a droit, connaissant le montant total des achats.

var montantAchat = Number(prompt("Veuillez entrer le montant de vos achat svp : "));
var reduction = (montantAchat * .15);
var totalReduction;


 if (montantAchat >= 200) {
     totalReduction = (montantAchat - reduction);
     console.log("le montant de votre réduction est de " + totalReduction);

 } else {
     console.log("La réduction ne s'applique pas");
 }