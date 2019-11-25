// Lire une lettre de l'alphabet. Afficher le mot voyelle (pour : a, e, i, o, u, y) ou le mot consonne (pour les autres) selon la lettre lue.
// Assurez-vous que l'utilisateur puisse entrer les lettres en minuscules ou en majuscules. b c d f g h j k l m n p q r s t v w x z

var lettre = prompt("entrez une lettre: ");
var affichage;


if (lettre ==="a" || lettre === "e" || lettre === "i" || lettre === "o" || lettre === "u" || lettre === "y") {
    affichage = "voyelle";
} else if (lettre ==="b" || lettre === "c" || lettre === "d" || lettre === "f" || lettre === "g" || lettre === "h" || lettre ==="j" || lettre === "k" || lettre === "l"
            || lettre === "m" || lettre === "n" || lettre === "p" || lettre ==="q" || lettre === "r" || lettre === "s" || lettre === "t" || lettre === "v" || lettre === "w" || lettre === "x" || lettre === "z") {
    affichage = "consonne";
}
document.write(affichage);