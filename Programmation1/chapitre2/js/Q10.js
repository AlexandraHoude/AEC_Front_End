//  Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond pas à un mois, affichez le message suivant : « Mois invalide ».

var moisNumerique =  Number(prompt("Entrez le mois en nombre: "));

if (moisNumerique === 1) {
    document.write("Janvier");
} else if (moisNumerique === 2) {
    document.write("Février");
} else if (moisNumerique === 3) {
    document.write("Mars");
}else if (moisNumerique === 4) {
    document.write("Avril");
}else if (moisNumerique === 5) {
    document.write("Mai");
}else if (moisNumerique === 6) {
    document.write("Juin");
}else if (moisNumerique === 7) {
    document.write("Juillet");
}else if (moisNumerique === 8) {
    document.write("Aout");
}else if (moisNumerique === 9) {
    document.write("Septembre");
}else if (moisNumerique === 10) {
    document.write("Octobre");
}else if (moisNumerique === 11) {
    document.write("Novembre");
}else if (moisNumerique === 12) {
    document.write("Décembre");
} else {
    document.write("mois invalide");
}

/* Ou de cette façon: */
/*
var moisNumerique =  Number(prompt("Entrez le mois en nombre: "));
var affichage;

if (moisNumerique === 1) {
    affichage = "Janvier";
} else if (moisNumerique === 2) {
    affichage = "Février";
} else if (moisNumerique === 3) {
    affichage = "Mars";
}else if (moisNumerique === 4) {
    affichage = "Avril";
}else if (moisNumerique === 5) {
    affichage = "Mai";
}else if (moisNumerique === 6) {
    affichage = "Juin";
}else if (moisNumerique === 7) {
    affichage = "Juillet";
}else if (moisNumerique === 8) {
    affichage = "Aout";
}else if (moisNumerique === 9) {
    affichage = "Septembre";
}else if (moisNumerique === 10) {
    affichage = "Octobre";
}else if (moisNumerique === 11) {
    affichage = "Novembre";
}else if (moisNumerique === 12) {
    affichage = "Décembre";
} else {
    affichage = "mois invalide";
}
document.write(affichage);

 */