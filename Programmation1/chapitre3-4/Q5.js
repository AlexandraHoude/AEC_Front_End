/* Faire un programme qui affiche 100 nombres aléatoires 0 ou 1 et compter le nombre de 0 et de 1. */
/*
var nombreAleatoire = 0;

for(var i = 0; i <= 100; i++) {
    nombreAleatoire = Math.floor(Math.random() * 10);
    document.write(nombreAleatoire + "<br>");
}
*/
/*
var compteur = 0;
var nombreAleatoire = 0;

while (compteur !== 100) {
    nombreAleatoire = Math.floor(Math.random() * 10);
    compteur++;
    document.write(nombreAleatoire + "<br>");
}
*/

var nbDe0 = 0;
var nbDe1 = 0;
var nb = 0;

for(var i = 0; i < 100; i++) {
    nb = Math.floor(Math.random()* 2);
    document.write(nb + "<br>");
    if (nb === 0) {
        nbDe0++;
    } else if (nb === 1) {
        nbDe1++;
    }
}

document.write("il y a eu: " + nbDe0 + " zeros <br>");
document.write("il y a eu: " + nbDe1 + " uns <br>");