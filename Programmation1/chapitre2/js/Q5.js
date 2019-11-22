//Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid». Sinon, écrire « Enfin une belle journée! ».

var temperature = Number(prompt("Entrez la temperature: "));

if (temperature > -40 && temperature < -10) {
    console.log("HAAAAAA! il fait froid");
} else {
    console.log("Enfin une belle journée!");
}