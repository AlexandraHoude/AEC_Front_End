//Lire deux nombres, si les deux nombres sont plus grands que 9 écrire le mot « BONJOUR » et si tel n’est pas le cas écrire « BONSOIR ».

var nb1 = Number(prompt("Entrez la valeur du premier nombre: "));
var nb2 = Number(prompt("Entrez la valeur du deuxième nombre: "));

if (nb1 > 9 && nb2 > 9) {
    console.log("Bonjour");
} else {
    console.log("bonsoir");
}


