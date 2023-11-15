const setLocationForMenu = (type)=> {

    var boxed = "";
    if (jQuery(".page-wrapper").hasClass("box-layout")) {
        boxed = "box-layout";
    }
    switch (type) {
        case 'compact-sidebar': {
            jQuery(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + boxed);
            jQuery(this).addClass("active");
            localStorage.setItem('page-wrapper', 'compact-wrapper');
            break;
        }
        case 'normal-sidebar': {
            jQuery(".page-wrapper").attr("class", "page-wrapper horizontal-wrapper " + boxed);
            jQuery(".logo-wrapper").find('img').attr('src', '/assets/images/logo/logo.png');
            localStorage.setItem('page-wrapper', 'horizontal-wrapper');
            break;
        }
        case 'default-body': {
            jQuery(".page-wrapper").attr("class", "page-wrapper  only-body" + boxed);
            localStorage.setItem('page-wrapper', 'only-body');
            break;
        }
        case 'dark-sidebar': {
            jQuery(".page-wrapper").attr("class", "page-wrapper compact-wrapper dark-sidebar" + boxed);
            localStorage.setItem('page-wrapper', 'compact-wrapper dark-sidebar');
            break;
        }
        case 'compact-wrap': {
            jQuery(".page-wrapper").attr("class", "page-wrapper compact-sidebar" + boxed);
            localStorage.setItem('page-wrapper', 'compact-sidebar');
            break;
        }
        case 'box-layout': {
            jQuery(".page-wrapper").attr("class", "page-wrapper compact-wrapper box-layout " + boxed);
            localStorage.setItem('page-wrapper', 'compact-wrapper box-layout');
            break;
        }
        default: {
            jQuery(".page-wrapper").attr("class", "page-wrapper compact-wrapper " + boxed);
            localStorage.setItem('page-wrapper', 'compact-wrapper');
            break;
        }
    }
    if(feather){
        feather.replace();
    }

};

const onReadyCustomizer = () => {

    if (localStorage.getItem("color"))
        jQuery("#color").attr("href", "/assets/css/" + localStorage.getItem("color") + ".css");
    if (localStorage.getItem("dark"))
        jQuery("body").attr("class", "dark-only");

    //jQuery('<div class="customizer-links"> <div class="nav flex-column nac-pills" id="c-pills-tab" role="tablist" aria-orientation="vertical"> <a class="nav-link" id="c-pills-layouts-tab" data-bs-toggle="pill" href="#c-pills-layouts" role="tab" aria-controls="c-pills-layouts" aria-selected="true" data-original-title="" title=""> <div class="settings"><i class="icon-paint-bucket"></i></div></a> <a class="nav-link" id="c-pills-home-tab" data-bs-toggle="pill" href="#c-pills-home" role="tab" aria-controls="c-pills-home" aria-selected="true" data-original-title="" title=""> <div class="settings"><i class="icon-settings"></i></div></a> </div></div><div class="customizer-contain"> <div class="tab-content" id="c-pills-tabContent"> <div class="customizer-header"> <i class="icofont-close icon-close"></i> <h5>Preview Settings</h5> <p class="mb-0">Try It Real Time <i class="fa fa-thumbs-o-up txt-primary"></i></p></div><div class="customizer-body custom-scrollbar"> <div class="tab-pane fade show active" id="c-pills-home" role="tabpanel" aria-labelledby="c-pills-home-tab"> <h6>Layout Type</h6> <ul class="main-layout layout-grid"> <li data-attr="ltr" class="active"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">LTR</span></li></ul> </div></li><li data-attr="rtl"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light body"><span class="badge badge-primary">RTL</span></li><li class="bg-light sidebar"></li></ul> </div></li><li data-attr="ltr" class="box-layout px-3"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"><span class="badge badge-primary">Box</span></li></ul> </div></li></ul> <h6 class="">Sidebar Type</h6> <ul class="sidebar-type layout-grid"> <li data-attr="normal-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul> </div></li><li data-attr="compact-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar compact"></li><li class="bg-light body"></li></ul> </div></li></ul> </div><div class="tab-pane fade" id="c-pills-layouts" role="tabpanel" aria-labelledby="c-pills-layouts-tab"> <h6 class="">Unlimited Color</h6> <ul class="layout-grid unlimited-color-layout"> <input id="ColorPicker1" type="color" value="#3e5fce" name="Background"/> <input id="ColorPicker2" type="color" value="#ffce00" name="Background"/> <button type="button" class="color-apply-btn btn btn-primary color-apply-btn">Apply</button> </ul> <h6>Light layout</h6> <ul class="layout-grid customizer-color"> <li class="color-layout" data-attr="color-1" data-primary="#6362e7" data-secondary="#ffc500"> <div></div></li><li class="color-layout" data-attr="color-2" data-primary="#2A364E" data-secondary="#ec9a71"> <div></div></li><li class="color-layout" data-attr="color-3" data-primary="#2c5f2d" data-secondary="#90b757"> <div></div></li><li class="color-layout" data-attr="color-4" data-primary="#0E7C7B" data-secondary="#dbb98f"> <div></div></li><li class="color-layout" data-attr="color-5" data-primary="#5f4b8b" data-secondary="#e69a8d"> <div></div></li><li class="color-layout" data-attr="color-6" data-primary="#c38c81" data-secondary="#89d4df"> <div></div></li></ul> <h6 class="">Dark Layout</h6> <ul class="layout-grid customizer-color dark"> <li class="color-layout" data-attr="color-1" data-primary="#3e5fce" data-secondary="#ffce00"> <div></div></li><li class="color-layout" data-attr="color-2" data-primary="#603f83" data-secondary="#c7d3d4"> <div></div></li><li class="color-layout" data-attr="color-3" data-primary="#262223" data-secondary="#ddc6b6"> <div></div></li><li class="color-layout" data-attr="color-4" data-primary="#234e70" data-secondary="#fbf8bf"> <div></div></li><li class="color-layout" data-attr="color-5" data-primary="#317773" data-secondary="#dbb98f"> <div></div></li><li class="color-layout" data-attr="color-6" data-primary="#755139" data-secondary="#f2edd7"> <div></div></li></ul> <h6 class="">Mix Layout</h6> <ul class="layout-grid customizer-mix"> <li class="color-layout active" data-attr="light-only"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-light sidebar"></li><li class="bg-light body"></li></ul> </div></li><li class="color-layout" data-attr="dark-sidebar"> <div class="header bg-light"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-light body"></li></ul> </div></li><li class="color-layout" data-attr="dark-only"> <div class="header bg-dark"> <ul> <li></li><li></li><li></li></ul> </div><div class="body"> <ul> <li class="bg-dark sidebar"></li><li class="bg-dark body"></li></ul> </div></li></ul> </div></div></div></div>').appendTo(jQuery('body'));

    //live customizer js
    jQuery(document).ready(function () {
        jQuery(".customizer-color li").on('click', function () {
            jQuery(".customizer-color li").removeClass('active');
            jQuery(this).addClass("active");
            var color = jQuery(this).attr("data-attr");
            var primary = jQuery(this).attr("data-primary");
            var secondary = jQuery(this).attr("data-secondary");
            localStorage.setItem("color", color);
            localStorage.setItem("primary", primary);
            localStorage.setItem("secondary", secondary);
            localStorage.removeItem("dark");
            jQuery("#color").attr("href", "/assets/css/" + color + ".css");
            jQuery(".dark-only").removeClass('dark-only');
            location.reload(true);
        });

        jQuery(".customizer-color.dark li").on('click', function () {
            jQuery(".customizer-color.dark li").removeClass('active');
            jQuery(this).addClass("active");
            jQuery("body").attr("class", "dark-only");
            localStorage.setItem("dark", "dark-only");
        });

        if (localStorage.getItem("primary") != null) {
            document.documentElement.style.setProperty('--theme-deafult', localStorage.getItem("primary"));
        }
        if (localStorage.getItem("secondary") != null) {
            document.documentElement.style.setProperty('--theme-secondary', localStorage.getItem("secondary"));
        }
        jQuery(".customizer-links #c-pills-home-tab, .customizer-links #c-pills-layouts-tab").click(function () {
            jQuery(".customizer-contain").addClass("open");
            jQuery(".customizer-links").addClass("open");
        });

        jQuery(".close-customizer-btn").on('click', function () {
            jQuery(".floated-customizer-panel").removeClass("active");
        });

        jQuery(".customizer-contain .icon-close").on('click', function () {
            jQuery(".customizer-contain").removeClass("open");
            jQuery(".customizer-links").removeClass("open");
        });

        jQuery(".color-apply-btn").click(function () {
            location.reload(true);
        });

        /*
        var primary = document.getElementById("ColorPicker1").value;
        document.getElementById("ColorPicker1").onchange = function () {
            primary = this.value;
            localStorage.setItem("primary", primary);
            document.documentElement.style.setProperty('--theme-primary', primary);
        };

        var secondary = document.getElementById("ColorPicker2").value;
        document.getElementById("ColorPicker2").onchange = function () {
            secondary = this.value;
            localStorage.setItem("secondary", secondary);
            document.documentElement.style.setProperty('--theme-secondary', secondary);
        };
*/

        jQuery(".customizer-color.dark li").on('click', function () {
            jQuery(".customizer-color.dark li").removeClass('active');
            jQuery(this).addClass("active");
            jQuery("body").attr("class", "dark-only");
            localStorage.setItem("dark", "dark-only");
        });


        jQuery(".customizer-mix li").on('click', function () {
            jQuery(".customizer-mix li").removeClass('active');
            jQuery(this).addClass("active");
            var mixLayout = jQuery(this).attr("data-attr");
            jQuery("body").attr("class", mixLayout);
        });


        jQuery('.sidebar-setting li').on('click', function () {
            jQuery(".sidebar-setting li").removeClass('active');
            jQuery(this).addClass("active");
            var sidebar = jQuery(this).attr("data-attr");
            jQuery(".sidebar-wrapper").attr("sidebar-layout", sidebar);
        });

        jQuery('.sidebar-main-bg-setting li').on('click', function () {
            jQuery(".sidebar-main-bg-setting li").removeClass('active')
            jQuery(this).addClass("active")
            var bg = jQuery(this).attr("data-attr");
            jQuery(".sidebar-wrapper").attr("class", "sidebar-wrapper " + bg);
        });

        jQuery('.sidebar-type li').on('click', function () {

            jQuery("body").append('');
            var type = jQuery(this).attr("data-attr");

            setLocationForMenu(type);

            // jQuery(this).addClass("active");
            location.reload(true);
        });

        jQuery('.main-layout li').on('click', function () {
            jQuery(".main-layout li").removeClass('active');
            jQuery(this).addClass("active");
            var layout = jQuery(this).attr("data-attr");
            jQuery("body").attr("class", layout);
            jQuery("html").attr("dir", layout);
        });

        jQuery('.main-layout .box-layout').on('click', function () {
            jQuery(".main-layout .box-layout").removeClass('active');
            jQuery(this).addClass("active");
            var layout = jQuery(this).attr("data-attr");
            jQuery("body").attr("class", "box-layout");
            jQuery("html").attr("dir", layout);
        });

    });

}