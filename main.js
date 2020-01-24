jQuery(document).ready(function () {
    /*nav menu*/
    $(".icon").on("click", function () {
       $(this).closest(".menu").toggleClass("menu-open");
    });
});