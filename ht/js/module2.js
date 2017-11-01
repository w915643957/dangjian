$(window).on("resize", function () {
    var height = $(window).height();
    $(".left_nav").height(height);
    $(".child_page").height(height);
})
$(function () {
    var height = $(window).height();
    $(".left_nav").height(height);
    $(".child_page").height(height);

//        左侧菜单单击事件
    $('.left_nav').find('li>a').on('click', function () {
        event.preventDefault();
        var address = $(this).attr("href");
        $('.left_nav').find('li>a').removeClass("act");
        $(this).addClass("act");
        $("iframe").attr("src", "");
        $("iframe").attr("src", address);
    });
    $(".first_nav").find('li>a').on('click', function () {
        event.preventDefault();
        var address = $(this).attr("href");
        $(".first_nav").find('li>a').removeClass("act");
        $(this).addClass("act");
        $(".second_iframe").attr("src", "");
        $(".second_iframe").attr("src", address);
    });
    $(".J_menuItem").on('click', function (event) {
        event.preventDefault();
        var address = $(this).attr("href");
        $("iframe").attr("src", "");
        $("iframe").attr("src", address);
    })
});

