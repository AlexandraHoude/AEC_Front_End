let motUsager = '';
let imgChemin = '';
let imageCarouselChemin = '';
let bootstrapCol = '';
let bootstrapCol1 = 'col-lg-1';
let bootstrapCol2 = 'col-lg-2';
let bootstrapCol3 = 'col-lg-3';
let bootstrapCol4 = 'col-lg-4';

/**
 * empêcher le formulaire de reloader la page à la submission
 */
$(".form1").on("submit", function(e) {
    e.preventDefault();
});

/**
 * A la soumission, validation du nombre de caractère et des accents et ajout des colonnes bootstrap prévu
 */
$('.btn-step-1').on("click", function () {
    motUsager = $('#motUsager').val();
    motUsager = motUsager.toUpperCase();

    /* validation du nombre de caractère et des accents */
    if (motUsager.length < 3 || motUsager.length > 12) {
        alert("Votre mot doit contenir entre 3 et 12 caractères inclusivement");
    } else {
        $(".lettreImg").empty();

        for (let i = 0; i < motUsager.length; i++) {
            if (motUsager[i] === "*") {
                imgChemin = 'Letters/CS/CS1.jpg';
            } else {
                motUsager = motUsager.replace("é", "e");
                motUsager = motUsager.replace("ë", "e");
                motUsager = motUsager.replace("ê", "e");
                motUsager = motUsager.replace("è", "e");
                motUsager = motUsager.replace("à", "a");
                motUsager = motUsager.replace("ù", "u");

                imgChemin = 'Letters/' + motUsager[i] + '/' + motUsager[i] + '1.jpg';
            }

            /* Ajout des colonnes bootstrap */
            if (motUsager.length === 3) {
                bootstrapCol = bootstrapCol4;
            } else if (motUsager.length === 4) {
                bootstrapCol = bootstrapCol3;
            } else if (motUsager.length === 5 || motUsager.length === 6) {
                bootstrapCol = bootstrapCol2;
            } else {
                bootstrapCol = bootstrapCol1;
            }

            $(".lettreImg").append("<img id=\"" + motUsager[i] + "\" class=\"imageLettre " + bootstrapCol + "\" src=\"" + imgChemin + "\" onclick=\"showImage(this.id, " + i + ")\" />");
        }

    }
});

/**
 * actions des flèches
 */
$(".arrow-next1").on("click", function () {
    $("#etape-1").hide();
    $("#etape-2").show();
});

$(".arrow-back2").on("click", function () {
    $("#etape-2").hide();
    $("#etape-1").show();
});

$(".arrow-next2").on("click", function () {
    $("#etape-2").hide();
    $("#etape-3").show();
});

$(".arrow-back3").on("click", function () {
    $("#etape-3").hide();
    $("#etape-2").show();
});

/**
 * action du bouton close de la modal
 */
$(".close").on('click', function() {
    $('.lettre-modal').hide();
});

/**
 * actions de l'affichage des images
 * @param lettreCourante
 * @param position
 */
function showImage(lettreCourante, position) {

    $(".carousel-item").empty();

    if (lettreCourante === "*") {
        imageCarouselChemin = 'Letters/CS/CS';
    } else {
        imageCarouselChemin = 'Letters/' + lettreCourante + '/' + lettreCourante;
    }

    $(".carousel-item.premier").append("<img src=\"" + imageCarouselChemin + "1.jpg\" onclick=\"selectImage(" + position + ", this.src)\" />");
    $(".carousel-item.premier").append("<img src=\"" + imageCarouselChemin + "2.jpg\" onclick=\"selectImage(" + position + ", this.src)\" />");
    $(".carousel-item.premier").append("<img src=\"" + imageCarouselChemin + "3.jpg\" onclick=\"selectImage(" + position + ", this.src)\" />");
    $(".carousel-item.deuxieme").append("<img src=\"" + imageCarouselChemin + "4.jpg\" onclick=\"selectImage(" + position + ", this.src)\" />");
    $(".carousel-item.deuxieme").append("<img src=\"" + imageCarouselChemin + "5.jpg\" onclick=\"selectImage(" + position + ", this.src)\" />");

    $(".lettre-modal").show();
}

/**
 * actions du changement des images
 * @param position
 * @param source
 */
function selectImage(position, source) {
    $(".lettreImg").children().eq(position).attr("src", source);
}

/**
 * action du changement de couleur de background
 */
$(".color-box").on("click", function () {
    let idCouleur = this.id;
    $('.lettreImg').css('background-image', "url(\"background/" + idCouleur + ".jpg\")")
});





