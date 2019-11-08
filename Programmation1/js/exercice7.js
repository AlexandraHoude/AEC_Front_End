// Faites un programme qui lit le nom d’un article et son prix de détail.Votre programme doit afficher le prix de gros (66% du prix de détail) ainsi que le profit attendu.

// Trouver les variables

var nomArticle;
var prixDetail;
var prixGros;
var profit;

// Demander les informations à l'usager
nomArticle = prompt("Quel est le nom de l'article ? : ");
prixDetail = prompt("Quel est le prix de l'article ? : ");

// Calculer le prix du gros de l'article ainsi que le profit attendu

prixGros = prixDetail * 0.66;
profit = prixDetail - prixGros;

console.log("Pour l'article " + nomArticle + " le prix de gros est : " + prixGros + " et le profit attendu est de : " + profit +  " $ ");
