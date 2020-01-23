/* Lire les noms et notes d’examen d’une classe de 5 élèves. Afficher ceux (noms et notes) qui ont une note supérieure à la moyenne.*/

var tabNotes = [];
var note;
var nom;
var moyenne = 0;

for (var i = 0; i < 5; i++) {
    nom = prompt("Entrez votre nom");
    note = Number(prompt("Entrez votre note"));

    tabNotes[nom] = note;
    moyenne += note;
}

moyenne = moyenne /5
document.write("la moyenne est de " + moyenne + " <br>");

for (var key in tabNotes) {
    if (tabNotes[key] > moyenne) {
        document.write(key + " " + tabNotes[key] + "<br>");
    }
}


