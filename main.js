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
    /*slider*/
    $(".next").on("click", function(){
       var currentImage = $(".img.curry"),
            currentImageIndex = $(".img.curry").index(),
           nextImageIndex = currentImageIndex +1;
       var nextImage = $(".img").eq(nextImageIndex);
       currentImage.fadeOut(1000);
       currentImage.removeClass("curry");
       if(nextImageIndex == ($(".img:last").index()+1)){
           $(".img").eq(0).fadeIn(1000);
           $(".img").eq(0).addClass("curry");
       }else{
           nextImage.fadeIn(1000);
           nextImage.addClass("curry");
       }
    });
    $(".prev").on("click", function(){
        var currentImage = $(".img.curry"),
            currentImageIndex = $(".img.curry").index(),
            prevImageIndex = currentImageIndex - 1;
        var prevImage = $(".img").eq(prevImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass("curry");
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    });
});