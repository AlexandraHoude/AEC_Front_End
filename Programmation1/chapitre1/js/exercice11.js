// Faire l’algorithme qui permet de calculer la facture d’un client. Cette facture contient la date,
// le montant de chacun des 3 articles achetés, les taxes de vente et le grand total de la facture.
// Vous demandez à l'usager la date et le montant de chacun des 3 articles achetés.
// Le montant de TPS est de 5% et la TVQ est de 9.975%. Vous affichez la date, les 2 montants de taxes et le grand total

// Trouver les variables
var date;
var article1;
var article2;
var article3;
var tps;
var tvq;
var prixTotal;
var prixTotalAvantTaxe;

// Demander les informations a l'usager
date = prompt("Quel est la date ? : ");
article1 = Number(prompt("Quel est le prix du premier article ? : "));
article2 = Number(prompt("Quel est le prix du deuxième article ? : "));
article3 = Number(prompt("Quel est le prix du troisième article ? : "));

// Calculer les prix
prixTotalAvantTaxe = (article1 + article2 + article3);
tps = (prixTotalAvantTaxe * 5) / 100;
tvq = (prixTotalAvantTaxe * 9.975) / 100;
prixTotal = prixTotalAvantTaxe + tps + tvq;

// Renvoyer les informations de facture
console.log ("Date :" + date);
console.log ("TPS : " + tps);
console.log ("TVQ : " + tvq);
console.log (" Prix total de la facture : " + prixTotal);
