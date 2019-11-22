//Lire deux nombres et afficher le plus grand des deux

var nb1;
var nb2;

nb1 = Number(prompt("Veuillez entrer un nombre svp : "));
nb2 = Number(prompt("Veuillez entrer un nombre svp : "));

if (nb1 > nb2) {
    console.log("Le nombre le plus grand est " + nb1);
}
else {
    console.log("Le nombre le plus grand est " + nb2);
}