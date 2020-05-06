var $grid = $('.wrapper').imagesLoaded(function () {
    $grid.masonry({
        itemSelector: '.wrapper_item',
        percentPosition: true,
        columnWidth: 50,
        resize: true,
        gutter: 500,
        fitWidth: true
    });
});