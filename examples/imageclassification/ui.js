if (!location.search) {
  const strsearch = '?prefer=none&b=WASM&m=mobilenet_v1&t=tflite&s=image&d=0';
  const path = location.href;
  location.href = path + strsearch;
} 

function isWebML() {
  if (navigator.ml && navigator.ml.getNeuralNetworkContext()) {
    if (!navigator.ml.isPolyfill) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function componentToggle() {
  $('#header-sticky-wrapper').attr('style', 'display:block');
  $('#query').slideToggle(300);
  // $('#ictitle').slideToggle(300);
  $('.nav-pills').slideToggle(200);
  // $('#progressContainer').slideToggle(200);
  $('.github-corner').slideToggle(100);
  $('#mobile-nav-toggle').slideToggle(100);
  $('#mobile-nav-toggle i').slideToggle(100);
  $('footer').slideToggle(500);

  if ($('#extraspan').hasClass('fa-angle-up')) {
    $('#extraspan').removeClass('fa-angle-up').addClass('fa-angle-down');
  } else {
    $('#extraspan').removeClass('fa-angle-down').addClass('fa-angle-up');
  }
}

function getHash() {
  return location.hash.replace('#', '');
}

$(document).ready(function () {
  let searchParams = new URLSearchParams(location.search);
  let up = searchParams.get('prefer');
  let ub = searchParams.get('b');
  let um = searchParams.get('m');
  let ut = searchParams.get('t');
  let us = searchParams.get('s');
  let ud = searchParams.get('d');

  if (us == 'camera') {
    $('.nav-pills li').removeClass('active');
    $('.nav-pills #cam').addClass('active');
    $('#imagetab').removeClass('active');
    $('#cameratab').addClass('active');
  } else {
    $('.nav-pills li').removeClass('active');
    $('.nav-pills #img').addClass('active');
    $('#cameratab').removeClass('active');
    $('#imagetab').addClass('active');
  }

  if (!isWebML()) {
    $('#WebML').addClass('dnone');
    $('#l-WebML').addClass('dnone');
    $('#webmlstatus').addClass('webml-status-false').html('not supported');
  } else {
    $('#WebML').removeClass('dnone');
    $('#l-WebML').removeClass('dnone');
    $('#webmlstatus').addClass('webml-status-true').html('supported');
  }

  if (searchParams.has('b')) {
    $('.backend input').removeAttr('checked');
    $('.backend label').removeClass('cked');
    $('#' + searchParams.get('b')).attr('checked', 'checked');
    $('#l-' + searchParams.get('b')).addClass('cked');
  }

  if (searchParams.has('m') && searchParams.has('t')) {
    $('.model input').removeAttr('checked');
    $('.model label').removeClass('cked');
    let m_t = searchParams.get('m') + '_' + searchParams.get('t');
    $('#' + m_t).attr('checked', 'checked');
    $('#l-' + m_t).addClass('cked');
  }

  if (searchParams.has('prefer')) {
    $('.prefer input').removeAttr('checked');
    $('.prefer label').removeClass('cked');
    $('#' + searchParams.get('prefer')).attr('checked', 'checked');
    $('#l-' + searchParams.get('prefer')).addClass('cked');

    if(ub == 'WASM' || ub == 'WebGL') {
      $('.ml').removeAttr('checked');
      $('.lml').removeClass('cked');
    }
  }

  function updateTitle(ub) {
    if (up == 'none' || !up) {
      $('#ictitle').html('Image Classfication ' + ' / ' + ub + ' / ' + um + ' (' + ut + ')');
    } else {
      if (up == 'fast') {
        currentPrefer = 'CPU';
      } else if (up == 'sustained') {
        currentPrefer = 'GPU';
      } else if (up == 'low') {
        currentPrefer = 'Low Power';
      }
      $('#ictitle').html('Image Classfication ' + ' / ' + ub + ' / ' + currentPrefer + ' / ' + um + ' (' + ut + ')');
    }
  }

  updateTitle(ub);

  $('input:radio[name=p]').click(function () {
    let rid = $("input:radio[name='p']:checked").attr('id');
    let strsearch = '?prefer=' + rid + '&b=' + ub + '&m=' + um + '&t=' + ut + '&s=' + us + '&d=' + ud;
    location.href = strsearch;
  });

  $('input:radio[name=b]').click(function () {
    $('.alert').hide();
    let rid = $("input:radio[name='b']:checked").attr('id');
    $('.backend input').removeAttr('checked');
    $('.backend label').removeClass('cked');
    $('#' + rid).attr('checked', 'checked');
    $('#l-' + rid).addClass('cked');

    if(rid == 'WASM' || rid == 'WebGL') {
      $('.ml').removeAttr('checked');
      $('.lml').removeClass('cked');
    }

    if(rid == 'WASM' || rid == 'WebGL') {
      currentBackend = rid;
      currentPrefer = 'none';
    } else if (rid == 'fast' || rid == 'sustained' || rid == 'low') {
      currentBackend = 'WebML';
      currentPrefer = rid;
    }

    if(currentPrefer != 'none') {
      updateTitle(currentBackend + ' / ' + $('#l-' + currentPrefer).text());
    } else {
      updateTitle(currentBackend);
    }

    if (us == 'camera') {
      updateBackendAndScenario(true, currentBackend, currentPrefer);
    } else {
      updateBackendAndScenario(false, currentBackend, currentPrefer);
    }

    // let strsearch = '?prefer=' + up + '&b=' + rid +  '&m=' + um + '&t=' + ut + '&s=' + us + '&d=' + ud;
    // location.href = strsearch;
  });

  $('input:radio[name=m]').click(function () {
    let rid = $("input:radio[name='m']:checked").attr('id');
    if (rid.indexOf('_onnx') > -1) {
      um = rid.replace('_onnx', '');
      ut = 'onnx';
    }
    if (rid.indexOf('_tflite') > -1) {
      um = rid.replace('_tflite', '');
      ut = 'tflite';
    }
    let strsearch = '?prefer=' + up + '&b=' + ub + '&m=' + um + '&t=' + ut + '&s=' + us + '&d=' + ud;
    location.href = strsearch;
  });

  $('#extra').click(function () {
    $('#header-sticky-wrapper').slideToggle(200);
    componentToggle();
  });

  // $('#xclose').click(function () {
  //   $('#intro').slideUp();
  // });
});

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

$(document).ready(function () {
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
    if ($(this).scrollTop() > 10) {
      $("#header").fadeOut();
      $('.scrolltop').fadeIn();
    } else {
      $("#header").fadeIn();
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
  $('#img').click(function () {
    $('.alert').hide();
    $('ul.nav-pills li').removeClass('active');
    $('ul.nav-pills #img').addClass('active');
    $('#imagetab').addClass('active');
    $('#cameratab').removeClass('active');
    updateBackendAndScenario(false, currentBackend);
  });

  $('#cam').click(function () {
    $('.alert').hide();
    $('ul.nav-pills li').removeClass('active');
    $('ul.nav-pills #cam').addClass('active');
    $('#cameratab').addClass('active');
    $('#imagetab').removeClass('active');
    updateBackendAndScenario(true, currentBackend);
  });

});

$(document).ready(function () {
  $('.model label').each(function () {
    let timeoutObj = null;
    $(this).on("mouseenter mouseleave touchstart touchcancel touchend", function (e) {
      let _this = this;
      if (e.type == "mouseenter" || e.type == "touchstart") {
        //鼠标进入
        (function () {
          timeoutObj = setTimeout(function () {
            let modelid = _this.id.replace('l-', '');
            for (model of availableModels) {
              if (modelid == model.modelName) {
                $('#intro').slideDown();
                if (model.intro) {
                  $('#introdescription').html(model.intro);
                  $('#introdescription').removeClass('dnone');
                } else {
                  $('#introdescription').addClass('dnone');
                }

                if (model.introUrl) {
                  $('#introurl').html('Paper');
                  $('#introurl').attr('href', model.introUrl);
                  $('#introurl').removeClass('dnone');
                } else {
                  $('#introurl').addClass('dnone');
                }

                if (model.netronUrl) {
                  $('#netronurl').html(model.modelName + ' Model Viewer');
                  $('#netronurl').attr('href', model.netronUrl);
                  $('#netronurl').removeClass('dnone');
                } else {
                  $('#netronurl').addClass('dnone');
                }
              }
            }
          }, 2000);
        }(this));
      } else if (e.type == "mouseleave" || e.type == "touchcancel" || e.type == "touchend") {
        if (timeoutObj != null) {
          clearTimeout(timeoutObj);
          $('#intro').delay(3000).slideUp();
        }
      }
    });
  })
});

$(window).load(function () {
  let searchParams = new URLSearchParams(location.search);
  let up = searchParams.get('prefer');
  let ub = searchParams.get('b');
  let um = searchParams.get('m');
  let ut = searchParams.get('t');
  let us = searchParams.get('s');
  let ud = searchParams.get('d');
  if (ud != '0') {
    $('#header-sticky-wrapper').slideToggle();
    componentToggle();
  }
});

function showProgress() {
  $('#progressmodel').fadeIn();
  $('.shoulddisplay').hide();
  $('.icdisplay').hide();
  $('#resulterror').hide();
}

function showResults() {
  $('#progressmodel').hide();
  $('.icdisplay').fadeIn();
  $('.shoulddisplay').fadeIn();
  $('#resulterror').hide();
}

function showError() {
  $('#progressmodel').hide();
  $('.icdisplay').hide();
  $('.shoulddisplay').hide();
  $('#resulterror').fadeIn();
}

function updateLoading(c) {
  $(".loading-page .counter h1").html(c + "%");
  // $(".loading-page .counter hr").css("width", c + "%");
}

$(window).load(function () {
  let searchParams = new URLSearchParams(location.search);
  let us = searchParams.get('s');
  if (us == 'camera') {
    main(true);
  } else {
    main();
  }
})