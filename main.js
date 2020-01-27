jQuery(document).ready(function () {
    /*nav menu*/
    $(".icon").on("click", function () {
       $(this).closest(".menu").toggleClass("menu-open");
    });
    /*nav with flex box*/
    $('.mobile-tab').hide();
    $('#burg').on("click", function () {
        $('.mobile-tab').slideToggle(1000);
    });
});