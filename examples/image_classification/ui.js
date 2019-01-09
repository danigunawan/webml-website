if (!location.search) {
  const strsearch = '?prefer=none&b=WASM&m=mobilenet_v1&t=tflite&s=image&d=0';
  const path = location.href;
  location.href = path + strsearch;
} 

let searchParams = new URLSearchParams(location.search);
let up = searchParams.get('prefer');
let ub = searchParams.get('b');
let um = searchParams.get('m');
let ut = searchParams.get('t');
let us = searchParams.get('s');
let ud = searchParams.get('d');
let currenttab = us;

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

$(document).ready(function () {

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
    let currentprefertext;
    if (up == 'none' || !up) {
      $('#ictitle').html('Image Classfication ' + ' / ' + ub + ' / ' + um + ' (' + ut + ')');
    } else {
      if (up == 'fast') {
        currentprefertext = 'FAST_SINGLE_ANSWER';
      } else if (up == 'sustained') {
        currentprefertext = 'SUSTAINED_SPEED';
      } else if (up == 'low') {
        currentprefertext = 'LOW_POWER';
      }
      $('#ictitle').html('Image Classfication ' + ' / ' + ub + ' / ' + currentprefertext + ' / ' + um + ' (' + ut + ')');
    }
  }
  updateTitle(ub);

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

    let strsearch = '?prefer=' + currentPrefer + '&b=' + currentBackend + '&m=' + um + '&t=' + ut + '&s=image&d=' + ud;
    window.history.pushState(null, null, strsearch);

    updateTitle(currentBackend);

    if (currenttab == 'camera') {
      updateScenario(true, currentBackend, currentPrefer);
    } else {
      updateScenario(false, currentBackend, currentPrefer);
    }
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
});

$(document).ready(function () {
  $('#img').click(function () {
    $('.alert').hide();
    $('ul.nav-pills li').removeClass('active');
    $('ul.nav-pills #img').addClass('active');
    $('#imagetab').addClass('active');
    $('#cameratab').removeClass('active');
    let strsearch = '?prefer=' + up + '&b=' + ub + '&m=' + um + '&t=' + ut + '&s=image&d=' + ud;
    window.history.pushState(null, null, strsearch)
    currenttab = 'image';
    updateScenario(false, currentBackend, currentPrefer);
  });

  $('#cam').click(function () {
    $('.alert').hide();
    $('ul.nav-pills li').removeClass('active');
    $('ul.nav-pills #cam').addClass('active');
    $('#cameratab').addClass('active');
    $('#imagetab').removeClass('active');
    let strsearch = '?prefer=' + up + '&b=' + ub + '&m=' + um + '&t=' + ut + '&s=camera&d=' + ud;
    window.history.pushState(null, null, strsearch)
    currenttab = 'camera';
    updateScenario(true, currentBackend, currentPrefer);
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
            for (model of imageClassificationModels) {
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
  if (us == 'camera') {
    main(true);
  } else {
    main();
  }
})