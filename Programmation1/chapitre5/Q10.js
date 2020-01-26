 /*Le collège offre 6 options aux étudiants. Ces options sont :
INFORMATIQUE/ADMINISTRATION/HISTOIRE/GÉNIE/GEOGRAPHIE/BUREAUTIQUE
Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option. Vous lui répondez si OUI ou NON le collège offre cette option.*/


var cours  = ["INFORMATIQUE", "ADMINISTRATION", "HISTOIRE", "GÉNIE", "GEOGRAPHIE", "BUREAUTIQUE"];

var choixUsager = prompt("Entrez le cours que vous souhaitez prendre").toUpperCase();

var verification = false;

for (var i = 0; i < cours.length; i++) {
    if (choixUsager === cours[i]) {
        verification = true;
     }
}

if (verification) {
    document.write("Ce cours est disponible");
} else {
    document.write("Ce cours n'est pas disponible");
}


