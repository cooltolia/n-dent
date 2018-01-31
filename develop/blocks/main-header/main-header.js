;(function(){

    var $form = $('.main-header__search-form'),
        $button = $('.main-header__search-btn');

    $button.on('click', function(e) {
        e.preventDefault();
        $form.toggleClass('active');
    })
})();
