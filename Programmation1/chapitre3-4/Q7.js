/* Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
Comptez et affichez le nombre de mots entrés avant le mot patate.
 */

var nbMot = 0;
var mot;

while (mot !== "patate") {
    mot = prompt("entrez un mot svp: ");
    nbMot++
}
document.write( nbMot + " mots ont été entré avant le mot patate");
