/* Le premier jour de l'ouverture de votre compte, vous déposez .01 . À chaque jour pendant 10 jours, vous déposez le double de la veille.
Affichez pour chaque jour, le numéro du jour, le montant déposé et le solde de votre compte. */

var argent = 0;
var depot = .01;

for (i = 1; i <= 10; i++) {
    argent += depot;
    depot = depot * 2
    document.write("Jour " + i + " = " + depot + " $" + "<br>");
}
