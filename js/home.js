function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function initBt2() {
  var bt = document.querySelectorAll('#b')[0];
  var filter = document.querySelectorAll('#f-b feGaussianBlur')[0];

  if (bt) {
    var particleCount = 12;
    var colors = ['#DE8AA0', '#8AAEDE', '#FFB300', '#60C7DA']

    bt.addEventListener('click', function () {
      var particles = [];
      var tl = new TimelineLite({
        onUpdate: function () {
          filter.setAttribute('x', 0);
        }
      });

      tl.to(bt.querySelectorAll('.b_bg'), 0.6, { scaleX: 1.05 });
      tl.to(bt.querySelectorAll('.b_bg'), 0.9, { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) }, 0.6);

      for (var i = 0; i < particleCount; i++) {
        particles.push(document.createElement('span'));
        bt.appendChild(particles[i]);

        particles[i].classList.add(i % 2 ? 'left' : 'right');

        var dir = i % 2 ? '-' : '+';
        var r = i % 2 ? getRandom(-1, 1) * i / 2 : getRandom(-1, 1) * i;
        var size = i < 2 ? 1 : getRandom(0.4, 0.8);
        var tl = new TimelineLite({
          onComplete: function (i) {
            particles[i].parentNode.removeChild(particles[i]);
            this.kill();
          }, onCompleteParams: [i]
        });

        tl.set(particles[i], { scale: size });
        tl.to(particles[i], 0.6, { x: dir + 20, scaleX: 3, ease: SlowMo.ease.config(0.1, 0.7, false) });
        tl.to(particles[i], 0.1, { scale: size, x: dir + '=25' }, '-=0.1');
        if (i >= 2) tl.set(particles[i], { backgroundColor: colors[Math.round(getRandom(0, 3))] });
        tl.to(particles[i], 0.6, { x: dir + getRandom(60, 100), y: r * 10, scale: 0.1, ease: Power3.easeOut });
        tl.to(particles[i], 0.2, { opacity: 0, ease: Power3.easeOut }, '-=0.2');
      }
    });
  }
}

initBt2();

$(document).ready(function () {
  // Smooth scrolling
  $(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 2000, 'easeInOutExpo');

          if ($(this).parents('.nav-menu').length) {
            $('.nav-menu .menu-active').removeClass('menu-active');
            $(this).closest('li').addClass('menu-active');
          }

          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').fadeOut();
          }
          return false;
        }
      }
    });
  });

  $('.nav-menu').superfish({
    animation: { opacity: 'show' },
    speed: 400
  });

  if ($('#nav-container').length) {
    var $mobile_nav = $('#nav-container').clone().prop({ id: 'mobile-nav' });
    $mobile_nav.find('> ul').attr({ 'class': '', 'id': '' });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
    $('body').append('<div id="mobile-body-overly"></div>');
    $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

    $(document).on('click', '.menu-has-children i', function (e) {
      $(this).next().toggleClass('menu-item-active');
      $(this).nextAll('ul').eq(0).slideToggle();
      $(this).toggleClass("fa-chevron-up fa-chevron-down");
    });

    $(document).on('click', '#mobile-nav-toggle', function (e) {
      $('body').toggleClass('mobile-nav-active');
      $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
      $('#mobile-body-overly').toggle();
    });

    $(document).click(function (e) {
      var container = $("#mobile-nav, #mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
      }
    });
  } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
    $("#mobile-nav, #mobile-nav-toggle").hide();
  }

  $("#header").sticky({ topSpacing: 0, zIndex: '50' });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.scrolltop').fadeIn();
    } else {
      $('.scrolltop').fadeOut();
    }
  });

  $('.scrolltop, #logo a').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000, 'easeInOutExpo');
    return false;
  });

});

$(document).ready(function () {
  var e = { responsive: !0 };
  $('[data-toggle="parallax-bg"], [data-toggle="parallax-element"]').each(function () {
    var e = $(this), t = e.data("toggle"), n = e.data("bg-img") || null, r = e.data("settings") || null;
    if (t === "parallax-bg") {
      e.css("backgroundImage", "url(" + n + ")").addClass("block-bg-img");
      e.attr("data-stellar-background-ratio")
    } else if (t === "parallax-element") {
      e.attr("data-stellar-ratio"); e.addClass("parallax-element")
    }
    $.each(r, function (t, n) {
      e.attr("data-" + t, n)
    })
  });
  $.stellar.positionProperty.parallaxPosition = {
    setTop: function (e, t, n) {
      var r = e.data("vpos") || null; r !== null ? e.css(r) : e.css("top", t)
    }, setLeft: function (e, t, n) {
      var r = e.data("hpos") || null;
      r !== null ? $.each(r, function (t, n) {
        e.css(t, n)
      }) : e.css("left", t)
    }
  };
  e.positionProperty = "parallaxPosition"; $.stellar(e)
});