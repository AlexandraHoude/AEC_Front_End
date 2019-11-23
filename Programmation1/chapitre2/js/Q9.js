//Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et le mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ».
// Si les informations ne sont pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou votre mot de passe est invalide »

var utilisateur = "admin";
var motDePasse = "12345";
var utilisateurPrompt = prompt("Veuillez entrer votre nom d'utilisateur svp: ");
var motDePassePrompt = prompt("Veuillez entrer votre mot de passe svp: ");

if (utilisateurPrompt === utilisateur && motDePassePrompt === motDePasse) {
    document.write("Bonjour " + utilisateur);
} else {
    document.write("Votre nom d’utilisateur ou votre mot de passe est invalide");

}

/* cette façon est également possible:

var utilisateurPrompt = prompt("Veuillez entrer votre nom d'utilisateur svp: ");
var motDePassePrompt = prompt("Veuillez entrer votre mot de passe svp: ");

if (utilisateurPrompt === "admin" && motDePassePrompt === "12345") {
    document.write("Bonjour" + utilisateur);
} else {
    document.write("Votre nom d’utilisateur ou votre mot de passe est invalide");

}

*/