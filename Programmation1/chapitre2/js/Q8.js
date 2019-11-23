// Faire un programme qui lit le taux horaire et le nombre d’heures travaillées d’un employé. Affichez son salaire.
// (Attention, il est payé le double de son taux horaire pour toutes les heures supplémentaires travaillées. Une semaine de travail normale est de 40 heures.


var tauxHoraire = Number(prompt("Entrez votre taux horaire"));
var heureTravaille = Number(prompt("Entrez votre nombre d'heure Travaillé"));
var salaire;
var salaireSupp;
var heureEnReste = heureTravaille % 40;
var paieSupp = tauxHoraire * 2;

if (heureTravaille <= 40) {
    salaire = tauxHoraire * heureTravaille;
    console.log(salaire);
}
else if (heureTravaille > 40) {
    salaire = tauxHoraire * heureTravaille;
    salaireSupp = (heureEnReste * paieSupp) + salaire;
    console.log(salaireSupp);
}
