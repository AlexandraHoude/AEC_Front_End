// Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

var couleur = Number(prompt("Quel couleur souhaitez vous avoir, faite un choix: 1- Rouge et jaune 2- Bleu et vert 3- Gris et Mauve"));
var affichage;

if (couleur === 1) {
    affichage = "<h1 id='1'>Rouge et jaune</h1>";
} else if (couleur === 2) {
    affichage = "<h1 id='2'>Bleu et Vert</h1>";
} else if (couleur === 3) {
    affichage = "<h1 id='3'>Gris et Mauve</h1>";
}

document.write(affichage);

if (couleur === 1) {
    document.getElementById('1').style.color = "red";
    document.getElementById('1').style.backgroundColor = "yellow";
} else if (couleur === 2) {
    document.getElementById('2').style.color = "blue";
    document.getElementById('2').style.backgroundColor = "green";
} else if (couleur === 3) {
    document.getElementById('3').style.color = "purple";
    document.getElementById('3').style.backgroundColor =  "grey";
}
