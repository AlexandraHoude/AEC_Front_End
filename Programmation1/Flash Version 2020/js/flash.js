// déplacer droite

$("#boutonDroite").click(function() {
    $("#flashID").css("left","200px");
});

// déplacer gauche

$("#boutonGauche").click(function() {
    $("#flashID").css("left","50px");
});

// changer image

$("#boutonChangerImage").click(function() {
    $("#flashID").attr("src", "img/Flash2.png");
});

// enlever image

$("#boutonEnleverImage").click(function() {
    $("#flashID").remove();
});

// ajouter image

$("#boutonAjouterImage").click(function() {
    if ($("#flashID").length === 0) {
        $("#imgFlash").append("<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>");
    }
});

// ajouter attribut

$("#boutonAjouterAttribut").click(function() {
    $("#flashID").attr("alt", "photo de flash");
});

// ajouter titre
$("#boutonAjouterTitre").click(function() {
    $('#title').html("Justice League");
});


// dupliquer

$("#boutonDupliquer").click(function() {
    $("#imgFlash").append("<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>");
});

// ralentir

$("#boutonRalentir").click(function() {
    $("#flashID").remove();
});

// téléportation

$("#boutonTeleport").click(function() {
    $("#flashID").remove();
    $("#telepo").append("<img id=\"flashID\" class=\"flashClass\" src=\"img/Flash1.png\" width=\"200px\"/>");
});

// vitesse supreme

let vitesseSup;

$("#boutonVitesseSupreme").click(function() {
    vitesseSup = setInterval(function() {
        $("#flashID").fadeOut(500);
        $("#flashID").fadeIn(500);
    }, 1000);
});

// vitesse normale

$("#boutonFinVitesseSupreme").click(function() {
    clearInterval(vitesseSup);
});

// Nuke

$("#boutonNuke").click(function() {
    $(".centralCity").css("background-image", "url(img/nuke.jpg)");
    $("#flashID").remove();
    $("#title").remove();
    $('button').remove();

});

// perso 1 = retirer le bouton

$("#boutonPerso1").click(function() {
    $("#boutonPerso1").remove();
});

// perso 2 changer la couleur des boutons

$("#boutonPerso2").click(function() {
    $('button').attr("class","btn btn-success")
});

