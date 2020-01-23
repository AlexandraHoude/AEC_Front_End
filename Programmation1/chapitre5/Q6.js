/* Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random) et affichez ces valeurs à l’aide d’une boucle Pour.*/

var piece = ["pile", "face","face", "face","pile", "face","pile", "pile","pile", "face"];

for(var i = 0; i < piece.length - 1; i++){
    document.write(piece[i] + "<br>");
}