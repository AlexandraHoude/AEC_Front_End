// Calculer le salaire brut d'un employé. Il est payé a l'heure et les données concernant le taux horaire et le nombre d'heure sont fournies en entrée

// trouver les variables
var salaire;
var heures;
var salaireBrut;

// Demander les données à l'usager
salaire = Number (prompt("Quel est votre taux horaire ? : "));
heures = Number (prompt("Quel est le nombre d'heure travaillé ? : "));

// Calculer le salaire brut
salaireBrut = salaire * heures;
console.log ("Votre salaire brut est :" + salaireBrut);
