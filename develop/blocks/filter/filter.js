;(function(){

    var title = $('.filter__title');

    var trigger,
        list;

    /** set initial height for lists with options */
    title.each(function(){
        var $this = $(this);
        trigger = $this.attr('data-target');
        list = $('#' + trigger);
        var listHeight = list.get(0).scrollHeight;
        list.height(listHeight);

        if ($(window).width() < 480) {
           list.removeClass('active');
           list.css('height', 0)
        }
    });

    title.on('click', function() {
        var $this = $(this);

        trigger = $this.attr('data-target');
        list = $('#' + trigger);

        if (list.hasClass('active')) {
            list.removeClass('active');
            list.css('height', 0)
        } else {
            list.addClass('active');
            var listHeight = list.get(0).scrollHeight;
            
            list.height(listHeight + 60);
        }
    })
    
    $(function () {

        var time1;
        var time2;

        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 100000,
            values: [5000, 30000],
            slide: function (event, ui) {
                $("#price").val(ui.values[0] + " – " + ui.values[1]);
                time1 = ui.values[0];
                time2 = ui.values[1]
                $('#price1').text(time1);
                $('#price2').text(time2);
            }
        });

        $("#price")
            .val($("#slider-range").slider("values", 0) + " - " + $("#slider-range").slider("values", 1));

    });

    

})();