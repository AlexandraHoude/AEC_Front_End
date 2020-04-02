let aleatoryNumber = "";
$(".img-fluid").click(function() {
    aleatoryNumber = Math.floor((Math.random() * 9) + 1);
    $(this).attr("src", "images/" + aleatoryNumber + ".jpg");
});

$(".img-fluid").hover(function () {
    $(this).css('cursor', 'pointer');
});

