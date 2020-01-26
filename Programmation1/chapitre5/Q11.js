/* C’est le temps du recensement. Nous aimerions connaître le nombre d’enfants que chaque famille possède et par la suite
afficher un tableau de statistiques comme suit : Le nombre d’enfants est l’indice du tableau. */

var tabEnfant = [0,0,0,0,0,0,0,0,0,0,0,0];
var nbEnfant = 0;

while (nbEnfant !== 666) {
    nbEnfant = Number(prompt("Veuillez entrez un nombre d'enfant svp, pour quitter le sondage entrez 666"));
    if (nbEnfant >= 0 && nbEnfant <= 10) {
        tabEnfant[nbEnfant]++;
    } else if (nbEnfant > 10) {
        tabEnfant[11]++
    }
    console.log(tabEnfant)
}

for (var i = 0; i < tabEnfant.length; i++) {
    if (i <= 10) {
        document.write("nombre de famille ayant " + i + " enfant(s) : " + tabEnfant[i] + "<br>");
    } else if (i > 10) {
        document.write("nombre de famille ayant plus de 10 enfants : " + tabEnfant[i] + "<br>");
    }

}