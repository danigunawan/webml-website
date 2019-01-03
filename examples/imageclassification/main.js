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
  intro: 'Inception architecture that has been shown to achieve very good performance at relatively low computational cost. Loading Inception-v4 model trained by ImageNet in TensorFlow Lite format, constructs and inferences it by WebML API.',
  introUrl: 'https://arxiv.org/abs/1602.07261',
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
  intro: 'A light-weight CNN providing Alexnet level accuracy with 50X fewer parameters. Loading SqueezeNet model trained by ImageNet in TensorFlow Lite format, constructs and inferences it by WebML API.',
  introUrl: 'https://arxiv.org/abs/1602.07360',
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
  intro: 'Inception architecture that has been shown to achieve very good performance at relatively low computational cost, and training with residual connections accelerates the training of Inception networks significantly. There is also some evidence of residual Inception networks outperforming similarly expensive Inception networks without residual connections.',
  introUrl: 'https://arxiv.org/abs/1602.07261',
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
  intro: 'MobileNetV2 improves the state of the art performance of mobile models. Loading MobileNet model v2.0 in ONNX format, constructs and inferences it by WebML API.',
  introUrl: 'https://arxiv.org/abs/1801.04381',
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
  intro: 'A residual learning framework to ease the training of networks that are substantially deeper than those used previously. This result won the 1st place on the ILSVRC 2015 classification task.',
  introUrl: 'https://arxiv.org/abs/1512.03385',
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
  intro: 'Deep residual networks have emerged as a family of extremely deep architectures showing compelling accuracy and nice convergence behaviors. It reports improved results using a 1001-layer ResNet on CIFAR-10 (4.62% error) and CIFAR-100, and a 200-layer ResNet on ImageNet.',
  introUrl: 'https://arxiv.org/abs/1603.05027',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/resnet50v2.onnx'
};
const inception_v2_onnx = {
  modelName: 'inception_v2_onnx',
  modelFile: './model/inception_v2.onnx',
  labelsFile: './model/ilsvrc2012labels.txt',
  inputSize: [224, 224, 3],
  outputSize: 1000,
  intro: 'Inception-v2 is trained for the ImageNet Large Visual Recognition Challenge. Loading Inception-v2 model trained by ImageNet in ONNX format, constructs and inferences it by WebML API.',
  introUrl: 'https://arxiv.org/abs/1512.00567',
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
  intro: 'Dense Convolutional Network (DenseNet) connects each layer to every other layer in a feed-forward fashion.  DenseNets have several compelling advantages: they alleviate the vanishing-gradient problem, strengthen feature propagation, encourage feature reuse, and substantially reduce the number of parameters. ',
  introUrl: 'https://arxiv.org/abs/1608.06993',
  netronUrl: 'https://lutzroeder.github.io/netron/?url=https://ibelem.github.io/webml-website/examples/imageclassification/model/densenet121.onnx'
};

function getURLSearchParams_prefer() {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.has('prefer') ? searchParams.get('prefer') : '';
}

function getURLSearchParams_backend() {
  let searchParams = new URLSearchParams(location.search);
  return searchParams.has('b') ? searchParams.get('b') : '';
}

function getURLSearchParams_model() {
  let searchParams = new URLSearchParams(location.search);
  if (searchParams.has('m') && searchParams.has('t')) {
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
  // div.setAttribute('id', 'backendAlert');
  div.setAttribute('class', 'backendAlert alert alert-warning alert-dismissible fade show');
  div.setAttribute('role', 'alert');
  div.innerHTML = `<strong>Failed to setup ${backend} backend.</strong>`;
  div.innerHTML += `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
  let container = document.getElementById('container');
  container.insertBefore(div, container.firstElementChild);
}

function showPreferAlert() {
  let div = document.createElement('div');
  // div.setAttribute('id', 'preferAlert');
  div.setAttribute('class', 'preferAlert alert alert-danger alert-dismissible fade show');
  div.setAttribute('role', 'alert');
  div.innerHTML = `<strong>Invalid prefer, prefer should be 'fast' or 'sustained'.</strong>`;
  div.innerHTML += `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
  let container = document.getElementById('container');
  container.insertBefore(div, container.firstElementChild);
}

function updateProgress(ev) {
  if (ev.lengthComputable) {
    let percentComplete = ev.loaded / ev.total * 100;
    percentComplete = percentComplete.toFixed(0);
    progressBar.style = `width: ${percentComplete}%`;
    progressBar.innerHTML = `Loading Model: ${percentComplete}%`;
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
  if (currentModel == model.modelName) {
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

function startPredict() {
  if (streaming) {
    let stats = new Stats();
    stats.begin();
    utils.predict(videoElement).then(ret => updateResult(ret)).then(() => {
      stats.end();
      setTimeout(startPredict, 0);
    });
  }
}

function updateBackendAndScenario(camera, backend) {
  streaming = false;
  // utils.deleteAll();
  setTimeout(() => {
    utils.init(backend, currentPrefer).then(() => {
      if (!camera) {
        utils.predict(imageElement).then(ret => updateResult(ret));
      } else {
        streaming = true;
        startPredict();
      }
    }).catch((e) => {
      console.warn(`Failed to change backend ${backend}`);
      console.log(e);
      showAlert(backend);
    });
  }, 10);
}

function main(camera) {
  // image or camera
  if (!camera) {
    inputElement.addEventListener('change', (e) => {
      let files = e.target.files;
      if (files.length > 0) {
        imageElement.src = URL.createObjectURL(files[0]);
      }
    }, false);

    imageElement.onload = function () {
      utils.predict(imageElement).then(ret => updateResult(ret));
    }
    console.log(currentBackend)
    console.log(currentPrefer)
    //utils.changeModelParam(currentModel);
    // utils.changeModelParam(mobilenet_v1_tflite);
    utils.init(currentBackend, currentPrefer).then(() => {
      utils.predict(imageElement).then(ret => updateResult(ret));
    }).catch((e) => {
      console.warn(`Failed to init ${utils.model._backend}`);
      console.error(e);
      showAlert(utils.model._backend);
    });
    // utils.deleteAll();
  } else {
    let stats = new Stats();
    navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "environment" } }).then((stream) => {
      video.srcObject = stream;
      utils.init(currentBackend, currentPrefer).then(() => {
        streaming = true;
        startPredict();
      }).catch((e) => {
        console.warn(`Failed to init ${utils.model._backend}`);
        console.error(e);
        showAlert(utils.model._backend);
      });
    }).catch((error) => {
      console.log('getUserMedia error: ' + error.name, error);
    });
  }
}
