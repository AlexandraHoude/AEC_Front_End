/* Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant (Masculin ou Féminin).
Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F.
De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.*/


var sexeF = 0;
var sexeM = 0;
var sexeUsager;
while (sexeUsager === "M" || sexeUsager === "F" || sexeUsager === undefined) {
    sexeUsager = prompt("Veuillez entrez votre sexe ici, M ou F ? : ").toUpperCase();
        if (sexeUsager === "F") {
            console.log("Feminin");
        sexeF++
        } else if (sexeUsager === "M") {
            console.log("Masculin");
            sexeM++
        }
}
document.write("le nombre de M entré est de : " + sexeM + " et le nombre de F entré est de " + sexeF);