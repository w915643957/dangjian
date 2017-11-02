$(window).on("resize", function () {
    var height = $(window).height();
    $(".left_nav").height(height - 147);
    $(".child_page").height(height - 147);
})
$(function () {
    var height = $(window).height();
    $(".left_nav").height(height - 147);
    $(".child_page").height(height - 147);

//        左侧菜单单击事件
    $('.left_nav').find('li>a').on('click', function () {
        var i = $(this).find(".fa").eq(1);
        i.toggleClass("fa fa-angle-up").toggleClass("fa fa-angle-down");
        var ul = $(this).next('.nav-second-level');
        if (ul.is(':hidden')) {
            $('.nav-second-level').slideUp();
            ul.slideDown();
        } else {
            ul.slideUp();
        }
    });
    $(".first_nav").find('li>a').on('click', function () {
        event.preventDefault();
        var address = $(this).attr("href");
        $(".first_nav").find('li>a').removeClass("act2");
        $(this).addClass("act2");
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

