const mobilenet_v1_tflite = {
  modelName: 'mobilenet_v1_tflite',
  inputSize: [224, 224, 3],
  outputSize: 1001,
  modelFile: './model/mobilenet_v1_1.0_224.tflite',
  labelsFile: './model/labels1001.txt',
  preOptions: {
    mean: [127.5, 127.5, 127.5],
    std: [127.5, 127.5, 127.5],
  },
  intro: 'An efficient Convolutional Neural Networks for Mobile Vision Applications. Loading MobileNet model trained by ImageNet in TensorFlow Lite format, constructs and inferences it by WebML API.',
  introUrl: 'https://arxiv.org/pdf/1704.04861.pdf',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/mobilenet_v1_1.0_224.tflite'
};
const mobilenet_v2_tflite = {
  modelName: 'mobilenet_v2_tflite',
  inputSize: [224, 224, 3],
  outputSize: 1001,
  modelFile: './model/mobilenet_v2_1.0_224.tflite',
  labelsFile: './model/labels1001.txt',
  preOptions: {
    mean: [127.5, 127.5, 127.5],
    std: [127.5, 127.5, 127.5],
  },
  intro: 'MobileNetV2 improves the state of the art performance of mobile models. Loading MobileNet model v2.0 trained by ImageNet in TensorFlow Lite format, constructs and inferences it by WebML API.',
  introUrl: 'https://arxiv.org/abs/1801.04381',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/mobilenet_v2_1.0_224.tflite'
};
const inception_v3_tflite = {
  modelName: 'inception_v3_tflite',
  inputSize: [299, 299, 3],
  outputSize: 1001,
  modelFile: './model/inception_v3.tflite',
  labelsFile: './model/labels1001.txt',
  preOptions: {
    mean: [127.5, 127.5, 127.5],
    std: [127.5, 127.5, 127.5],
  },
  intro: 'Inception-v3 is trained for the ImageNet Large Visual Recognition Challenge. Loading Inception-v3 model trained by ImageNet in TensorFlow Lite format, constructs and inferences it by WebML API.',
  introUrl: 'http://arxiv.org/abs/1512.00567',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/inception_v3.tflite'
};
const inception_v4_tflite = {
  modelName: 'inception_v4_tflite',
  inputSize: [299, 299, 3],
  outputSize: 1001,
  modelFile: './model/inception_v4.tflite',
  labelsFile: './model/labels1001.txt',
  preOptions: {
    mean: [127.5, 127.5, 127.5],
    std: [127.5, 127.5, 127.5],
  },
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/inception_v4.tflite'
};
const squeezenet_tflite = {
  modelName: 'squeezenet_tflite',
  inputSize: [224, 224, 3],
  outputSize: 1001,
  modelFile: './model/squeezenet.tflite',
  labelsFile: './model/labels1001.txt',
  preOptions: {
    mean: [127.5, 127.5, 127.5],
    std: [127.5, 127.5, 127.5],
  },
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/squeezenet.tflite'
};
const inception_resnet_v2_tflite = {
  modelName: 'inception_resnet_v2_tflite',
  inputSize: [299, 299, 3],
  outputSize: 1001,
  modelFile: './model/inception_resnet_v2.tflite',
  labelsFile: './model/labels1001.txt',
  preOptions: {
    mean: [127.5, 127.5, 127.5],
    std: [127.5, 127.5, 127.5],
  },
  postOptions: {
    softmax: true,
  },
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/inception_resnet_v2.tflite'
};
const squeezenet_onnx = {
  modelName: 'squeezenet_onnx',
  modelFile: './model/squeezenet1.1.onnx',
  labelsFile: './model/labels1000.txt',
  inputSize: [224, 224, 3],
  outputSize: 1000,
  preOptions: {
    // https://github.com/onnx/models/tree/master/models/image_classification/squeezenet#preprocessing
    mean: [0.485, 0.456, 0.406],
    std: [0.229, 0.224, 0.225],
    norm: true
  },
  postOptions: {
    softmax: true,
  },
  intro: 'A light-weight CNN providing Alexnet level accuracy with 50X fewer parameters. Loading SqueezeNet model trained by ImageNet in ONNX format, constructs and inferences it by WebML API.',
  introUrl: 'https://arxiv.org/abs/1602.07360',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/squeezenet1.1.onnx'
};
const mobilenet_v2_onnx = {
  modelName: 'mobilenet_v2_onnx',
  modelFile: './model/mobilenetv2-1.0.onnx',
  labelsFile: './model/labels1000.txt',
  inputSize: [224, 224, 3],
  outputSize: 1000,
  preOptions: {
    // https://github.com/onnx/models/tree/master/models/image_classification/mobilenet#preprocessing
    mean: [0.485, 0.456, 0.406],
    std: [0.229, 0.224, 0.225],
    norm: true
  },
  postOptions: {
    softmax: true,
  },
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/mobilenetv2-1.0.onnx'
};
const resnet_v1_onnx = {
  modelName: 'resnet_v1_onnx',
  modelFile: './model/resnet50v1.onnx',
  labelsFile: './model/labels1000.txt',
  inputSize: [224, 224, 3],
  outputSize: 1000,
  preOptions: {
    // https://github.com/onnx/models/tree/master/models/image_classification/resnet#preprocessing
    mean: [0.485, 0.456, 0.406],
    std: [0.229, 0.224, 0.225],
    norm: true
  },
  postOptions: {
    softmax: true,
  },
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/resnet50v1.onnx'
};
const resnet_v2_onnx = {
  modelName: 'resnet_v2_onnx',
  modelFile: './model/resnet50v2.onnx',
  labelsFile: './model/labels1000.txt',
  inputSize: [224, 224, 3],
  outputSize: 1000,
  preOptions: {
    // https://github.com/onnx/models/tree/master/models/image_classification/resnet#preprocessing
    mean: [0.485, 0.456, 0.406],
    std: [0.229, 0.224, 0.225],
    norm: true
  },
  postOptions: {
    softmax: true,
  },
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/resnet50v2.onnx'
};
const inception_v2_onnx = {
  modelName: 'inception_v2_onnx',
  modelFile: './model/inception_v2.onnx',
  labelsFile: './model/ilsvrc2012labels.txt',
  inputSize: [224, 224, 3],
  outputSize: 1000,
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/inception_v2.onnx'
};
const densenet_onnx = {
  modelName: 'densenet_onnx',
  modelFile: './model/densenet121.onnx',
  labelsFile: './model/labels1000.txt',
  inputSize: [224, 224, 3],
  outputSize: 1000,
  preOptions: {
    // mean and std should also be in BGR order
    mean: [0.406, 0.456, 0.485],
    std: [0.225, 0.224, 0.229],
    norm: true,
    channelScheme: 'BGR',
  },
  postOptions: {
    softmax: true,
  },
  intro: '',
  introUrl: '',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/densenet121.onnx'
};

function getURLSearchParams_prefer(){
  let searchParams = new URLSearchParams(location.search);
  return searchParams.has('prefer')?searchParams.get('prefer'):'';
}

function getURLSearchParams_backend(){
  let searchParams = new URLSearchParams(location.search);
  return searchParams.has('b')?searchParams.get('b'):'';
}

function getURLSearchParams_model(){
  let searchParams = new URLSearchParams(location.search);
  if(searchParams.has('m') && searchParams.has('t')){
    return searchParams.get('m') + '_' + searchParams.get('t');
  } else {
    return '';
  }
}

const availableModels = [
  mobilenet_v1_tflite,
  mobilenet_v2_tflite,
  inception_v3_tflite,
  inception_v4_tflite,
  squeezenet_tflite,
  inception_resnet_v2_tflite,
  squeezenet_onnx,
  mobilenet_v2_onnx,
  resnet_v1_onnx,
  resnet_v2_onnx,
  inception_v2_onnx,
  densenet_onnx,
];

function main(camera) {
  const videoElement = document.getElementById('video');
  const imageElement = document.getElementById('image');
  const inputElement = document.getElementById('input');
  const canvasElement = document.getElementById('canvas');
  const progressBar = document.getElementById('progressBar');

  let currentBackend = getURLSearchParams_backend();
  let currentModel = getURLSearchParams_model();
  let currentPrefer = getURLSearchParams_prefer();
  let streaming = false;

  let utils = new Utils(canvasElement);
  utils.updateProgress = updateProgress;    //register updateProgress function if progressBar element exist

  function showAlert(backend) {
    let div = document.createElement('div');
    div.setAttribute('id', 'backendAlert');
    div.setAttribute('class', 'alert alert-warning alert-dismissible fade show');
    div.setAttribute('role', 'alert');
    div.innerHTML = `<strong>Failed to setup ${backend} backend.</strong>`;
    div.innerHTML += `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
    let container = document.getElementById('container');
    container.insertBefore(div, container.firstElementChild);
  }

  function showPreferAlert() {
    let div = document.createElement('div');
    div.setAttribute('id', 'preferAlert');
    div.setAttribute('class', 'alert alert-danger alert-dismissible fade show');
    div.setAttribute('role', 'alert');
    div.innerHTML = `<strong>Invalid prefer, prefer should be 'fast' or 'sustained'.</strong>`;
    div.innerHTML += `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
    let container = document.getElementById('container');
    container.insertBefore(div, container.firstElementChild);
  }

  function removeAlertElement() {
    let backendAlertElem =  document.getElementById('backendAlert');
    if (backendAlertElem !== null) {
      backendAlertElem.remove();
    }
    let preferAlertElem =  document.getElementById('preferAlert');
    if (preferAlertElem !== null) {
      preferAlertElem.remove();
    }
  }

  function updateProgress(ev) {
    if (ev.lengthComputable) {
      let percentComplete = ev.loaded / ev.total * 100;
      percentComplete = percentComplete.toFixed(0);
      progressBar.style = `width: ${percentComplete}%`;
      progressBar.innerHTML = `Loading Model: ${percentComplete}%`;
      // if (ev.loaded === ev.total) {
      //   progressBar.style = `width: 0%`;
      //   progressBar.innerHTML = `0%`;
      // }
    }
  }

  function updateResult(result) {
    console.log(`Inference time: ${result.time} ms`);
    let inferenceTimeElement = document.getElementById('inferenceTime');
    inferenceTimeElement.innerHTML = `inference time: <span class='ir'>${result.time} ms</span>`;
    console.log(`Classes: `);
    result.classes.forEach((c, i) => {
      console.log(`\tlabel: ${c.label}, probability: ${c.prob}%`);
      let labelElement = document.getElementById(`label${i}`);
      let probElement = document.getElementById(`prob${i}`);
      labelElement.innerHTML = `${c.label}`;
      probElement.innerHTML = `${c.prob}%`;
    });
  }

  if (currentBackend === '') {
    if (nnNative) {
      currentBackend = 'WebML';
    } else {
      currentBackend = 'WASM';
    }
  }

  // register models
  for (let model of availableModels) {
    if(currentModel == model.modelName) {
      utils.changeModelParam(model)
    }
  }

  // register prefers
  if (getOS() === 'Mac OS' && currentBackend === 'WebML') {
    console.log(currentPrefer)
    if (!currentPrefer) {
      currentPrefer = "sustained";
    }
  }

  // image or camera
  if (!camera) {
    inputElement.addEventListener('change', (e) => {
      let files = e.target.files;
      if (files.length > 0) {
        imageElement.src = URL.createObjectURL(files[0]);
      }
    }, false);

    imageElement.onload = function() {
      utils.predict(imageElement).then(ret => updateResult(ret));
    }
    console.log(currentBackend)
    console.log(currentPrefer)
    console.log(imageElement)
    //utils.changeModelParam(currentModel);
    // utils.changeModelParam(mobilenet_v1_tflite);
    utils.init(currentBackend, currentPrefer).then(() => {
      utils.predict(imageElement).then(ret => updateResult(ret));
    }).catch((e) => {
      console.warn(`Failed to init ${utils.model._backend}, try to use WASM`);
      console.error(e);
      showAlert(utils.model._backend);
    });
    // utils.deleteAll();
  } else {
    let stats = new Stats();
    stats.dom.style.cssText = 'position:fixed;top:60px;left:10px;cursor:pointer;opacity:0.9;z-index:10000';
    stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom);

    navigator.mediaDevices.getUserMedia({audio: false, video: {facingMode: "environment"}}).then((stream) => {
      video.srcObject = stream;
      utils.init(currentBackend, currentPrefer).then(() => {
        streaming = true;
        startPredict();
      }).catch((e) => {
        console.warn(`Failed to init ${utils.model._backend}, try to use WASM`);
        console.error(e);
        showAlert(utils.model._backend);
      });
    }).catch((error) => {
      console.log('getUserMedia error: ' + error.name, error);
    });

    function startPredict() {
      if (streaming) {
        stats.begin();
        utils.predict(videoElement).then(ret => updateResult(ret)).then(() => {
          stats.end();
          setTimeout(startPredict, 0);
        });
      }
    }
  }
}

let searchParams = new URLSearchParams(location.search);
let us = searchParams.get('s');
if(us =='camera') {
  document.addEventListener('load', main('camera'), false);
} else {
  document.addEventListener('load', main(), false);
}

$(document).ready(function () {
  $('.model label').each(function(){
    $(this).on('mouseover touchstart', function() {
      let modelid = this.id.replace('l-', '');
      for (model of availableModels) {
        if(modelid == model.modelName) {

          $('#intro').slideDown();
          
          if(model.intro) {
            $('#introdescription').html(model.intro);
            $('#introdescription').removeClass('dnone');
          } else {
            $('#introdescription').addClass('dnone');
          }

          if(model.introUrl) {
            $('#introurl').html('Paper');
            $('#introurl').attr('href', model.introUrl);
            $('#introurl').removeClass('dnone');
          } else {
            $('#introurl').addClass('dnone');
          }

          if(model.netronUrl) {
            $('#netronurl').html(model.modelName + ' Model Viewer');
            $('#netronurl').attr('href', model.netronUrl);
            $('#netronurl').removeClass('dnone');
          } else {
            $('#netronurl').addClass('dnone');
          }
        }
      }
      $('#intro').delay(5000).slideUp();
    })
  })
});
