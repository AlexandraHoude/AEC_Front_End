/* question 1 - 2*/

let personne3 = {
    prenom : "Alexandra",
    nom : "Houde",
    age : 27
};

document.write(personne3.prenom + " " + personne3.nom + " " + personne3.age);

/* question 3-4 */

let personne4 = {};

personne2.prenom = "Emilie";
personne2.nom = "Dumont";
personne2.age = 27;

document.write(personne4);

/* question 5-6 */

let cartePokemon1 = {
    nom : "Pikachu",
    type : "electrique",
    hp : 50,
    nomAttaque1 : "agility",
    nomAttaque2 : "thundershock",
    degatsAttaque1 : 0,
    degatsAttaque2 : 20
};

let cartePokemon2 = {};

cartePokemon2.nom = "Greninja";
cartePokemon2.type = "water";
cartePokemon2.hp = 230;
cartePokemon2.nomAttaque1 = "shuriken flurry";
cartePokemon2.nomAttaque2 = "shadowy hunter";
cartePokemon2.degatsAttaque1 = 0;
cartePokemon2.degatsAttaque2 = 110;

/* question 7 */

class pokemon{

    constructor(nom,type,hp,nomAttaque1,nomAttaque2,degatsAttaque1.degatsAttaque2) {
        this.nom = nom;
        this.type = type;
        this.hp = hp;
        this.nomAttaque1 = nomAttaque1;
        this.nomAttaque2 = nomAttaque2;
        this.degatsAttaque1 = degatsAttaque1;
        this.degatsAttaque2 = degatsAttaque2;
    }

}


let Pikachu  = new pokemon("Pikachu", "electrique" , 50,  "Agility", "thundershock",  0, 20);
let Greninja  = new pokemon("Greninja", "water" , 230, "Shuriken",  "shadowy hunter", 0,  110);
