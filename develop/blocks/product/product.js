$(".product__photo-slider").slick({
    autoplay: false,
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a class="slider__dots"><img src="'+thumb+'"></a>';
    }, 
});
