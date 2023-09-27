jQuery(document).ready(function($) {
    "use strict";
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 250) {
            $('.navbar-fixed').addClass('sticky fade_down_effect');
        } else {
            $('.navbar-fixed').removeClass('sticky fade_down_effect');
        }
    });
    if ($('.navbar').length > 0) {
        $('.menu-item-has-children').each(function() {
            $(this).append('<span class="dropdown-menu-toggle"></span>');
        })
        $('.dropdown-menu-toggle').on('click', function(e) {
            var dropdown = $(this).parent('.dropdown');
            dropdown.find('>.dropdown-menu').slideToggle('show');
            $(this).toggleClass('opened');
            return true;
        });
        $('.dropdown-toggle').on('click', function() {
            var location = $(this).attr('href');
            window.location.href = location;
            return true;
        });
    }
    $('.nav-search').on('click', function() {
        $('.search-block').fadeIn(350);
        $('.nav-search').addClass('hide');
    });
    $('.search-close').on('click', function() {
        $('.search-block').fadeOut(350);
        $('.nav-search').removeClass('hide');
    });
    $(document).on('mouseup', function(e) {
        var container = $(".nav-search-area");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.search-block').fadeOut(350);
            $('.nav-search').removeClass('hide');
        }
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height()) {
            $(".BackTo").fadeIn('slow');
        } else {
            $(".BackTo").fadeOut('slow');
        }
    });
    $("body, html").on("click", ".BackTo", function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });
    $('.scroll a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 70
        }, 1000);
        return false;
    });
    if ($('.box-style').length > 0) {
        $('.box-style').each(function() {
            if ($(this).find('.elementor-row').length > 0) {
                $(this).find('.elementor-row').append('<div class="indicator"></div>')
            }
        })
    }
    if ($('.video-btn').length > 0) {
        $('.video-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }
    if ($('.gallery-popup').length > 0) {
        $('.gallery-popup').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }
    $(window).on('load', function() {
        setTimeout(()=>{
            $('#preloader').addClass('loaded');
        }
        , 1000);
    });
    $('.preloader-cancel-btn').on('click', function(e) {
        e.preventDefault();
        if (!($('#preloader').hasClass('loaded'))) {
            $('#preloader').addClass('loaded');
        }
    });
    const loadScripts_PreloadTimer = setTimeout(triggerScriptLoader_Preload, 8e3)
      , userInteractionEvents_Preload = ["mouseover", "keydown", "touchstart", "touchmove", "wheel"];
    function triggerScriptLoader_Preload() {
        document.querySelector("html").classList.add("is-active-page"),
        clearTimeout(loadScripts_PreloadTimer)
    }
    userInteractionEvents_Preload.forEach(function(e) {
        window.addEventListener(e, triggerScriptLoader_Preload, {
            passive: !0
        })
    });
    if (fontList) {
        const observeFontList = fontList.map((fontName)=>{
            const observer = new FontFaceObserver(fontName);
            return observer.load();
        }
        );
        Promise.all(observeFontList).then(function() {
            document.documentElement.className += " fonts-loaded";
        });
    } else {
        const barlowObserver = new FontFaceObserver('Raleway');
        const robotoObserver = new FontFaceObserver('Roboto');
        Promise.all([barlowObserver.load(), robotoObserver.load()]).then(function() {
            document.documentElement.className += " fonts-loaded";
        });
    }
});
