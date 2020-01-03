/* Lire une string, écrire le mot à l'envers. Patate devient etataP
            Indice :  mot[0] donne 'P'
            Indice : mot.length donne 6
*/
var mot = prompt("entrez un mot ici: ");

for(var i = mot.length - 1; i >= 0; i--){
    document.write(mot[i] + "<br>");
}