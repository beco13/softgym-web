const onReadySideBar = function () {
    jQuery(".toggle-nav").click(function () {
        jQuery('#sidebar-links .nav-menu').css("left", "0px");
    });

    jQuery(".mobile-back").click(function () {
        jQuery('#sidebar-links .nav-menu').css("left", "-410px");
    });

    jQuery(".page-wrapper").attr("class", "page-wrapper " + localStorage.getItem('page-wrapper'));
    if (localStorage.getItem("page-wrapper") === null) {
        jQuery(".page-wrapper").addClass("compact-wrapper");
    }

    // left sidebar and vertical menu
    if (jQuery('#pageWrapper').hasClass('compact-wrapper')) {
        jQuery('.sidebar-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
        jQuery('.sidebar-title').click(function () {
            jQuery('.sidebar-title').removeClass('active').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            jQuery('.sidebar-submenu, .menu-content').slideUp('normal');
            jQuery('.menu-content').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                jQuery(this).next().slideDown('normal');
            } else {
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }
        });
        jQuery('.sidebar-submenu, .menu-content').hide();
        jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
        jQuery('.submenu-title').click(function () {
            jQuery('.submenu-title').removeClass('active').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            jQuery('.submenu-content').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                jQuery(this).next().slideDown('normal');
            } else {
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }
        });
        jQuery('.submenu-content').hide();
    } else if (jQuery('#pageWrapper').hasClass('horizontal-wrapper')) {
        jQuery(window).on('load', function () {
            jQuery(document).load(jQuery(window).bind("resize", checkPosition));
            function checkPosition() {
                if (window.matchMedia('(max-width: 991px)').matches) {
                    jQuery('#pageWrapper').removeClass('horizontal-wrapper').addClass('compact-wrapper');
                    jQuery('.page-body-wrapper').removeClass('horizontal-menu').addClass('sidebar-icon');
                    jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
                    jQuery('.submenu-title').click(function () {
                        jQuery('.submenu-title').removeClass('active');
                        jQuery('.submenu-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
                        jQuery('.submenu-content').slideUp('normal');
                        if (jQuery(this).next().is(':hidden') == true) {
                            jQuery(this).addClass('active');
                            jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                            jQuery(this).next().slideDown('normal');
                        } else {
                            jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
                        }
                    });
                    jQuery('.submenu-content').hide();

                    jQuery('.sidebar-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
                    jQuery('.sidebar-title').click(function () {
                        jQuery('.sidebar-title').removeClass('active');
                        jQuery('.sidebar-title').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
                        jQuery('.sidebar-submenu, .menu-content').slideUp('normal');
                        if (jQuery(this).next().is(':hidden') == true) {
                            jQuery(this).addClass('active');
                            jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                            jQuery(this).next().slideDown('normal');
                        } else {
                            jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
                        }
                    });
                    jQuery('.sidebar-submenu, .menu-content').hide();
                }
            }
        })

    } else if (jQuery('#pageWrapper').hasClass('compact-sidebar')) {

        var contentwidth = jQuery(window).width();
        if ((contentwidth) > 992) {
            jQuery('<div class="bg-overlay1"></div>').appendTo(jQuery('body'));
        }

        jQuery('.sidebar-title').click(function () {
            jQuery('.sidebar-title').removeClass('active');
            jQuery(".bg-overlay1").removeClass("active");
            jQuery('.sidebar-submenu').removeClass('close-submenu').slideUp('normal');
            jQuery('.sidebar-submenu, .menu-content').slideUp('normal');
            jQuery('.menu-content').slideUp('normal');

            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).next().slideDown('normal');
                jQuery(".bg-overlay1").addClass("active");

                jQuery(".bg-overlay1").on("click", function () {
                    jQuery('.sidebar-submenu, .menu-content').slideUp('normal');
                    jQuery(this).removeClass("active");
                });
            }
            if ((contentwidth) < '992') {
                jQuery(".bg-overlay").addClass("active");
            }

        });
        jQuery('.sidebar-submenu, .menu-content').hide();
        jQuery('.submenu-title').append('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
        jQuery('.submenu-title').click(function () {
            jQuery('.submenu-title').removeClass('active').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            jQuery('.submenu-content').slideUp('normal');
            if (jQuery(this).next().is(':hidden') == true) {
                jQuery(this).addClass('active');
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                jQuery(this).next().slideDown('normal');
            } else {
                jQuery(this).find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-right"></i></div>');
            }
        });
        jQuery('.submenu-content').hide();

        jQuery(".sidebar-wrapper nav").find("a").removeClass("active");
        jQuery(".sidebar-wrapper nav").find("li").removeClass("active");

        var current = window.location.pathname
        jQuery(".sidebar-wrapper nav ul>li a").filter(function () {

            var link = jQuery(this).attr("href");
            if (link) {
                if (current.indexOf(link) != -1) {
                    jQuery(this).parents().children('a').addClass('active');
                    jQuery(this).parents().parents().children('.nav-sub-childmenu').css('display', 'block');
                    jQuery(this).addClass('active');
                    jQuery(this).parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                    return false;
                }
            }
        });
    }

    // toggle sidebar
    $nav = jQuery('.sidebar-wrapper');
    $header = jQuery('.page-header');
    $toggle_nav_top = jQuery('.toggle-sidebar');
    $toggle_nav_top.click(function () {
        // $this = jQuery(this);
        // $nav = jQuery('.sidebar-wrapper');
        $nav.toggleClass('close_icon');
        $header.toggleClass('close_icon');
        jQuery(window).trigger('overlay');
    });

    // jQuery(window).resize(function () {
    //     $nav = jQuery('.sidebar-wrapper');
    //     $header = jQuery('.page-header');
    //     $toggle_nav_top = jQuery('.toggle-sidebar');
    //     $toggle_nav_top.click(function () {
    //         $this = jQuery(this);
    //         $nav = jQuery('.sidebar-wrapper');
    //         $nav.toggleClass('close_icon');
    //         $header.toggleClass('close_icon');
    //     });
    // });
    jQuery(window).on('overlay', function () {
        $bgOverlay = jQuery(".bg-overlay");
        $isHidden = $nav.hasClass('close_icon');
        if (jQuery(window).width() <= 991 && !$isHidden && $bgOverlay.length === 0) {
            jQuery('<div class="bg-overlay active"></div>').appendTo(jQuery('body'));
        }

        if ($isHidden && $bgOverlay.length > 0) {
            $bgOverlay.remove();
        }
    });

    jQuery('.sidebar-wrapper .back-btn').on('click', function (e) {
        jQuery(".page-header").toggleClass("close_icon");
        jQuery(".sidebar-wrapper").toggleClass("close_icon");
        jQuery(window).trigger('overlay');
    });

    jQuery("body").on("click", ".bg-overlay", function () {
        $header.addClass("close_icon");
        $nav.addClass("close_icon");
        jQuery(this).remove();
    });

    /////

    $body_part_side = jQuery('.body-part');
    $body_part_side.click(function () {
        $toggle_nav_top.attr('checked', false);
        $nav.addClass('close_icon');
        $header.addClass('close_icon');
    });

    //    responsive sidebar
    var $window = jQuery(window);
    var widthwindow = $window.width();
    (function ($) {
        "use strict";
        if (widthwindow <= 991) {
            $toggle_nav_top.attr('checked', false);
            $nav.addClass("close_icon");
            $header.addClass("close_icon");
        }
    })(jQuery);
    jQuery(window).resize(function () {
        var widthwindaw = $window.width();
        if (widthwindaw <= 991) {
            $toggle_nav_top.attr('checked', false);
            $nav.addClass("close_icon");
            $header.addClass("close_icon");
        } else {
            $toggle_nav_top.attr('checked', true);
            $nav.removeClass("close_icon");
            $header.removeClass("close_icon");
        }
    });

    // horizontal arrows
    var view = jQuery("#sidebar-menu");
    var move = "500px";
    var leftsideLimit = -500

    // var Windowwidth = jQuery(window).width();
    // get wrapper width
    var getMenuWrapperSize = function () {
        return jQuery('.sidebar-wrapper').innerWidth();
    }
    var menuWrapperSize = getMenuWrapperSize();

    if ((menuWrapperSize) >= '1660') {
        var sliderLimit = -3000

    } else if ((menuWrapperSize) >= '1440') {
        var sliderLimit = -3600
    } else {
        var sliderLimit = -4200
    }

    jQuery("#left-arrow").addClass("disabled");
    jQuery("#right-arrow").click(function () {
        var currentPosition = parseInt(view.css("marginLeft"));
        if (currentPosition >= sliderLimit) {
            jQuery("#left-arrow").removeClass("disabled");
            view.stop(false, true).animate({
                marginLeft: "-=" + move
            }, {
                duration: 400
            })
            if (currentPosition == sliderLimit) {
                jQuery(this).addClass("disabled");
                console.log("sliderLimit", sliderLimit);
            }
        }
    });

    jQuery("#left-arrow").click(function () {
        var currentPosition = parseInt(view.css("marginLeft"));
        if (currentPosition < 0) {
            view.stop(false, true).animate({
                marginLeft: "+=" + move
            }, {
                duration: 400
            })
            jQuery("#right-arrow").removeClass("disabled");
            jQuery("#left-arrow").removeClass("disabled");
            if (currentPosition >= leftsideLimit) {
                jQuery(this).addClass("disabled");
            }
        }

    });

    // page active
    if (jQuery('#pageWrapper').hasClass('compact-wrapper')) {
        jQuery(".sidebar-wrapper nav #sidebar-menu .simplebar-wrapper .simplebar-content-wrapper .simplebar-content").find("a").removeClass("active");
        jQuery(".sidebar-wrapper nav #sidebar-menu .simplebar-wrapper .simplebar-content-wrapper .simplebar-content").find("li").removeClass("active");

        var current = window.location.pathname
        jQuery(".sidebar-wrapper nav #sidebar-menu ul .simplebar-mask li a").filter(function () {

            var link = jQuery(this).attr("href");
            if (link) {
                if (current.indexOf(link) != -1) {
                    jQuery(this).parents().children('a').addClass('active');
                    jQuery(this).parents().parents().children('ul').css('display', 'block');
                    jQuery(this).addClass('active');
                    jQuery(this).parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                    jQuery(this).parent().parent().parent().parent().parent().children('a').find('div').replaceWith('<div class="according-menu"><i class="fa fa-angle-down"></i></div>');
                    return false;
                }
            }
        });
    }


    // jQuery('.docs-sidebar>nav>li>a').click(function () {
    //     jQuery('.docs-sidebar>nav>li').removeClass('active');
    //     jQuery(this).parent().addClass('active');
    //     });


    jQuery(document).click(function () {
        jQuery('.mega-menu-container').removeClass("show");
        jQuery('.header-level-menu').removeClass("show");
    });

    jQuery(window).scroll(function () {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 50) {
            jQuery('.mega-menu-container').removeClass('show');
            jQuery('.header-level-menu').removeClass('show');
        }
    });



    jQuery(document).ready(function () {
        jQuery(".outside").click(function () {
            jQuery(this).find(".menu-to-be-close").slideToggle("fast");
        });
    });
    jQuery(document).on("click", function (event) {
        var $trigger = jQuery(".outside");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            jQuery(".menu-to-be-close").slideUp("fast");
        }
    });




    // if (jQuery(window).width() <= 991) {
    //     jQuery('.sidebar-wrapper .back-btn').on('click', function (e) {
    //         jQuery(".page-header").toggleClass("close_icon");
    //         jQuery(".sidebar-wrapper").toggleClass("close_icon");
    //     });
    // }

    if (jQuery('#sidebar-menu .simplebar-content-wrapper').hasClass('a.sidebar-link.sidebar-title.active')) {
        jQuery('#sidebar-menu .simplebar-content-wrapper').animate({
            scrollTop: jQuery('a.sidebar-link.sidebar-title.active').offset().top - 500
        }, 1000);
    }

/*
    jQuery('.custom-scrollbar').animate({
        scrollTop: jQuery('a.sidebar-link.sidebar-title.active').offset().top - 500
    }, 1000);
*/

}