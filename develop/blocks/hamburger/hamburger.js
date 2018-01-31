;(function () {

    var $hiddenNav = $('.mobile-nav__list--bottom');

    $(".hamburger").click(function () {
        $(this).toggleClass('active');
        $hiddenNav.toggleClass('active')
    });

})();
