/* Faire un programme qui boucle 10 fois. À toutes les itérations, votre programme génère un nombre aléatoire entre 0 et 1 et
vous demande aussi de choisir un nombre entre 0 et 1. Si le nombre est identique, vous gagnez, perdez sinon. Vous affichez le pointage à la fin des 10 itérations. */

var nbAleatoire;
var nbUtilisateur;
var nbGagnant = 0;
var nbPerdant = 0;

for (var i = 1; i <=10; i++) {
    nbUtilisateur = Number(prompt("Veuillez entrer un nombre entre 0 et 1 : "));
    nbAleatoire = Math.round(Math.random() );
    console.log(nbAleatoire);
        if (nbAleatoire === nbUtilisateur) {
            nbGagnant++
        } else if (nbUtilisateur !== nbAleatoire) {
            nbPerdant++
        }
}
document.write("Vous avez Gagnez " + nbGagnant + " fois et vous avez perdu " + nbPerdant + " fois");