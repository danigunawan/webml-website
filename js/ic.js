if(!location.search){
  let strsearch;
  if(getOS() == 'Mac OS') {
    strsearch = '?prefer=fast&b=WASM&m=mobilenet_v1&t=tflite&s=image&d=0';
  } else {
    strsearch = '?prefer=none&b=WASM&m=mobilenet_v1&t=tflite&s=image&d=0';
  }
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
  $('#query').slideToggle(300);
  // $('#ictitle').slideToggle(300);
  $('.nav-pills').slideToggle(200);
  // $('#progressContainer').slideToggle(200);
  $('.github-corner').slideToggle(100);
  $('#mobile-nav-toggle').slideToggle(100);
  $('#mobile-nav-toggle i').slideToggle(100);
  $('footer').slideToggle(500);

  if($('#extraspan').hasClass('fa-angle-up')){
    $('#extraspan').removeClass('fa-angle-up').addClass('fa-angle-down');
  } else {
    $('#extraspan').removeClass('fa-angle-down').addClass('fa-angle-up');
  }
}


$(document).ready(function () {
  let searchParams = new URLSearchParams(location.search);
  let up = searchParams.get('prefer');
  let ub = searchParams.get('b');
  let um = searchParams.get('m');
  let ut = searchParams.get('t');
  let us = searchParams.get('s');
  let ud = searchParams.get('d');

  if(ud !='0') {
    componentToggle();
  }

  $('#img').click(function() {
    if(us !='image'){
      let strsearch = '?prefer=' + up + '&b=' + ub +  '&m=' + um + '&t=' + ut + '&s=' + 'image' + '&d=' + ud;
      location.href = strsearch;
    }
  });

  $('#cam').click(function() {
    if(us !='camera'){
      let strsearch = '?prefer=' + up + '&b=' + ub +  '&m=' + um + '&t=' + ut + '&s=' + 'camera' + '&d=' + ud;
      location.href = strsearch;
    }
  });
  
  if (us == 'camera'){
    $('.nav-pills li').removeClass('active');
    $('.nav-pills #cam').addClass('active');
    $('#1a').removeClass('active'); 
    $('#2a').addClass('active');  
  } else {
    $('.nav-pills li').removeClass('active');
    $('.nav-pills #img').addClass('active');  
    $('#2a').removeClass('active'); 
    $('#1a').addClass('active');  
  }

  if(getOS() !== 'Mac OS') {
    // $('.prefer').addClass('dnone');
  }

  if(!isWebML()){
    $('#WebML').addClass('dnone');
    $('#l-WebML').addClass('dnone');
    $('#webmlstatus').addClass('webml-status-false').html('not supported');
  } else {
    $('#WebML').removeClass('dnone');
    $('#l-WebML').removeClass('dnone');
    $('#webmlstatus').addClass('webml-status-true').html('supported');
  }
 
  if(searchParams.has('b')){
    $('.backend input').removeAttr('checked');
    $('.backend label').removeClass('cked');
    $('#' + searchParams.get('b')).attr('checked', 'checked');
    $('#l-'+searchParams.get('b')).addClass('cked');
  }

  if(searchParams.has('m') && searchParams.has('t')){
    $('.model input').removeAttr('checked');
    $('.model label').removeClass('cked');
    let m_t = searchParams.get('m') + '_' + searchParams.get('t');
    $('#' + m_t).attr('checked', 'checked');
    $('#l-'+ m_t).addClass('cked');
  }

  if(searchParams.has('prefer')){
    $('.prefer input').removeAttr('checked');
    $('.prefer label').removeClass('cked');
    $('#' + searchParams.get('prefer')).attr('checked', 'checked');
    $('#l-' + searchParams.get('prefer')).addClass('cked');
  }

  if(up == 'none' || !up) {
    $('#ictitle').html('Image Classfication ' + ' / '  + ub + ' / ' + um + ' (' + ut + ')');
  } else {
    let macmap;
    if(up == 'fast') {
      macmap = 'BNNS'
    } else if (up == 'sustained'){
      macmap = 'MPS'
    }
    $('#ictitle').html('Image Classfication ' + ' / '  + ub + ' / ' + um + ' (' + ut + ') / ' + macmap);
  }
 

  $('input:radio[name=p]').click(function(){
    var rid = $("input:radio[name='p']:checked").attr('id');
    let strsearch = '?prefer=' + rid + '&b=' + ub +  '&m=' + um + '&t=' + ut + '&s=' + us + '&d=' + ud;
    location.href = strsearch;
  });

  $('input:radio[name=b]').click(function(){
    var rid = $("input:radio[name='b']:checked").attr('id');
    let strsearch = '?prefer=' + up + '&b=' + rid +  '&m=' + um + '&t=' + ut + '&s=' + us + '&d=' + ud;
    location.href = strsearch;
  });

  $('input:radio[name=m]').click(function(){
    var rid = $("input:radio[name='m']:checked").attr('id');
    if(rid.indexOf('_onnx')>-1) {
      um = rid.replace('_onnx', '');
      ut = 'onnx';
    }
    if(rid.indexOf('_tflite')>-1) {
      um = rid.replace('_tflite', '');
      ut = 'tflite';
    }
    let strsearch = '?prefer=' + up + '&b=' + ub +  '&m=' + um + '&t=' + ut + '&s=' + us + '&d=' + ud;
    location.href = strsearch;
  });

  $('#extra').click(function(){
    $('#header-sticky-wrapper').slideToggle(400);
    componentToggle();
  });

});

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

$(document).ready(function () {
  // Smooth scrolling
  // $(function () {
  //   $('a[href*="#"]:not([href="#"])').click(function () {
  //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

  //       if (target.length) {
  //         $('html, body').animate({
  //           scrollTop: target.offset().top
  //         }, 2000, 'easeInOutExpo');

  //         if ($(this).parents('.nav-menu').length) {
  //           $('.nav-menu .menu-active').removeClass('menu-active');
  //           $(this).closest('li').addClass('menu-active');
  //         }

  //         if ($('body').hasClass('mobile-nav-active')) {
  //           $('body').removeClass('mobile-nav-active');
  //           $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //           $('#mobile-body-overly').fadeOut();
  //         }
  //         return false;
  //       }
  //     }
  //   });
  // });

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
  $('ul.nav-pills #image').click(function() {
      $('ul.nav-pills li').removeClass('active');
      $('ul.nav-pills #image').addClass('active');
  })
  $('ul.nav-pills #camera').click(function() {
    $('ul.nav-pills li').removeClass('active');
    $('ul.nav-pills #camera').addClass('active');
})
});