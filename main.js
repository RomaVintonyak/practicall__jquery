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
    $(".next").on("click", function () {
        var currentImage = $(".img.curry"),
            currentImageIndex = $(".img.curry").index(),
            nextImageIndex = currentImageIndex + 1;
        var nextImage = $(".img").eq(nextImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass("curry");
        if (nextImageIndex == ($(".img:last").index() + 1)) {
            $(".img").eq(0).fadeIn(1000);
            $(".img").eq(0).addClass("curry");
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass("curry");
        }
    });
    $(".prev").on("click", function () {
        var currentImage = $(".img.curry"),
            currentImageIndex = $(".img.curry").index(),
            prevImageIndex = currentImageIndex - 1;
        var prevImage = $(".img").eq(prevImageIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass("curry");
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    });
    /*scrooll top btn*/
    var scrollBtn = $(".btn-top");
    scrollBtn.hide();
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 100) {
            scrollBtn.fadeIn(1000);
        } else {
            scrollBtn.fadeOut(1000);
        }
    });
    scrollBtn.on("click", function (event) {
        event.preventDefault();
        $("body, html").animate({
            scrollTop: 0
        }, 1000);
    });
    /*counter jQuery*/
    $(".count").each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    /*to do aplication*/
    var $tasksList = $("#tasksList");
    var $taskInput = $("#taskInput");
    var $notification = $("#notification");

    var displayNotification = function () {
        if (!$tasksList.children().length) {
            $notification.fadeIn(300);
        } else {
            $notification.css("display", "none");
        }
    }
    $("#taskAdd").on("click", function () {
        if (!$taskInput.val()) {
            return false;
        }
        $tasksList.append("<li>" + $taskInput.val() + "<button class='delete'>&#10006</button></li> ");
        $taskInput.val("");
        displayNotification();
        $(".delete").on("click", function () {
            var $parent = $(this).parent();
            $parent.css("animation", "fadeOut .3s linear");
            setTimeout(function () {
                $parent.remove();
                displayNotification();
            }, 300);
        });
    });
    /*skillbar*/
    $(".skillbar").each(function () {
        $(this).find('.skillbar-bar').animate({
            width:$(this).attr('data-percent')
        }, 4000);
    });
});