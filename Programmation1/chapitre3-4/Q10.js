/* Afficher le montant et la taxe de 9% pour les montants de $5.00 à $100.00 par tranche de $5.00. */

var montant;

for(var i = 5; i <= 100; i += 5) {
    montant = (i * 0.09) + i;
}
document.write("le montant est de " + montant);
