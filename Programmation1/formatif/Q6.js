/*
L’usager doit sélectionner le contrôleur
55$ pour un RaspBerry Pi
15$ pour un Raspberry Pi Zero

L’usager doit décider du nombre de moteurs entre 2 et 24.
Un moteur coûte 5$

L’usager décide s’il veut une caméra USB ou non
La caméra coûte 35$

L’usager décide s’il veut une matrice de LEDS pour les yeux
La matrice coûte 10$ pour les deux yeux.

Il faut ensuite ajouter 20$ pour le filament 3D.
Il faut ajouter 15$ pour la batterie USB.


RasPiBot aimerait que votre programme affiche

un résumé de l’achat
ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
le prix
le prix avec la livraison de 15%.
*/

var raspberryPi = prompt("Choisir entre 1- Raspberry Pi ou 2- Respberry Pi Zero : ");
var moteur = Number(prompt("Entrez le nombre de moteur désiré minimum 2 et maximum 24 :"));
var matrice = prompt("souhaitez vous avoir une matrice de leds pour la somme de 10$ ? : ");
var camera = prompt("souhaitez vous avoir une caméras USB pour la somme de 35$ ? : ");

var prixRP = 0;
var prixMoteur = 0;
var prixCamera = 0;
var prixMatrice = 0;
var prix;
var prixFinal;

var fraisSupp = 35;

var affichageCamera;
var affichageMatrice;
var affichageRP;


if (raspberryPi === "1") {
    prixRP = 55;
    affichageRP = "RaspBerry Pi";
} else if (raspberryPi === "2") {
    prixRP = 15;
    affichageRP = "RaspBerry Pi Zero";
}

if (moteur >= 2 && moteur <= 24) {
    prixMoteur = moteur * 5;
}

if (camera === "oui") {
    prixCamera = 35;
    affichageCamera = "avec caméra ";
} else if (camera === "non") {
    prixCamera = 0;
    affichageCamera = "sans caméra ";
}

if (matrice === "oui") {
    prixMatrice = 10;
    affichageMatrice = " et avec matrice de leds ";
} else if (matrice === "non") {
    prixMatrice = 0;
    affichageMatrice = "sans matrice de leds ";
}

prix = prixRP + prixMatrice + prixCamera + prixMoteur + fraisSupp;
prixFinal = prix + (prix * 0.15);

document.write("Robot avec " + affichageRP + " " + moteur + " moteurs" + " " + affichageCamera + " " + affichageMatrice + "<br>");
document.write("prix final: " + prix + "$" +"<br>");
document.write("prix avec livraison: " + prixFinal + "$");