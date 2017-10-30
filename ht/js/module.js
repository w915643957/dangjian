$(window).on("resize", function () {
    var height = $(window).height();
    $(".left_nav").height(height - 92);
    $(".child_page").height(height - 92);
})
$(function () {
    var height = $(window).height();
    $(".left_nav").height(height - 92);
    $(".child_page").height(height - 92);

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

    $(".J_menuItem").on('click', function (event) {
        event.preventDefault();
        var address = $(this).attr("href");
        $("iframe").attr("src", "");
        $("iframe").attr("src", address);
    })
});

