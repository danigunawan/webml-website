let audioContext = new (window.AudioContext || window.webkitAudioContext)();

let utils = new Utils(audioContext);
utils.updateProgress = updateProgress;    //register updateProgress function if progressBar element exist
let front = false;

const updateResult = (result) => {
  try {
    console.log(`Inference time: ${result.time} ms`);
    let inferenceTimeElement = document.getElementById('inferenceTime');
    inferenceTimeElement.innerHTML = `inference time: <span class='ir'>${result.time} ms</span>`;
  } catch (e) {
    console.log(e);
  }
  try {
    console.log(`Classes: `);
    result.classes.forEach((c, i) => {
      console.log(`\tlabel: ${c.label}, probability: ${c.prob}%`);
      let labelElement = document.getElementById(`label${i}`);
      let probElement = document.getElementById(`prob${i}`);
      labelElement.innerHTML = `${c.label}`;
      probElement.innerHTML = `${c.prob}%`;
    });
    if (result.classes[0].prob > 50) {
      $('#speechcommands #scresult svg').removeClass('current');
      $(`#r${result.classes[0].label}`).addClass('current');
      $('#speechcommands #scresult #rtext').html(`${result.classes[0].label}`);
    } else {
      $('#speechcommands #scresult #rtext').html(`Unknown`);
    }
  }
  catch (e) {
    console.log(e);
  }
}

const startPredictMicrophone = async () => {
  if (streaming) {
    try {
      stats.begin();
      let ret = await utils.predict(recordElement);
      updateResult(ret);
      stats.end();
      // setTimeout(startPredictCamera, 0);
    } catch (e) {
      errorHandler(e);
    }
  }
}

const utilsPredict = async (audioElement, backend, prefer) => {
  streaming = false;
  // Stop webcam opened by navigator.getUserMedia if user visits 'LIVE CAMERA' tab before ？？？？？？
  if (track) {
    track.stop();
  }
  await showProgress('done', 'done', 'current');
  try {
    let ret = await utils.predict(audioElement);
    await showProgress('done', 'done', 'done');
    showResults();
    updateResult(ret);
  }
  catch (e) {
    errorHandler(e);
  }
}

const utilsPredictMicrophone = async (backend, prefer) => {
  streaming = true;
  await showProgress('done', 'done', 'current');
  try {
    let stream = await navigator.mediaDevices.getUserMedia({ audio: true});
    await recordAndPredict(stream);
    track = stream.getTracks()[0];
  }
  catch (e) {
    errorHandler(e);
  }
}

const recordAndPredict = async (stream) => {
  let audioRecorder = new MediaRecorder(stream, {audio:true});
  audioRecorder.ondataavailable = handleDataAvailable;
  audioRecorder.start();
  setTimeout(function() {
    audioRecorder.stop();
  }, 1100);
}

const handleDataAvailable = (e) => {
  let buffer = [];
  buffer.push(e.data);
  let blob = new Blob(buffer, {type: 'audio/wav'});
  recordElement.src = window.URL.createObjectURL(blob);
  startPredictMicrophone(recordElement);
  showProgress('done', 'done', 'done');
  showResults();
}

const predictPath = (microphone) => {
  (!microphone) ? utilsPredict(audioElement, currentBackend, currentPrefer) : utilsPredictMicrophone(currentBackend, currentPrefer);
}

const utilsInit = async (backend, prefer) => {
  // return immediately if model, backend, prefer are all unchanged
  let init = await utils.init(backend, prefer);
  if (init == 'NOT_LOADED') {
    return;
  }
}

const updateScenario = async (camera = false) => {
  streaming = false;
  logConfig();
  predictPath(camera);
}

const updateBackend = async (camera = false, force = false) => {
  if (force) {
    utils.initialized = false;
  }
  streaming = false;
  try { utils.deleteAll(); } catch (e) { }
  logConfig();
  await showProgress('done', 'current', 'pending');
  try {
    getOffloadOps(currentBackend, currentPrefer);
    await utilsInit(currentBackend, currentPrefer);
    showSubGraphsSummary(utils.getSubgraphsSummary());
    predictPath(camera);
  }
  catch (e) {
    errorHandler(e);
  }
}

const main = async (microphone = false) => {
  streaming = false;
  try { utils.deleteAll(); } catch (e) { }
  logConfig();
  await showProgress('current', 'pending', 'pending');
  try {
    let model = getModelById(currentModel);
    await utils.loadModel(model);
    getOffloadOps(currentBackend, currentPrefer);
    await showProgress('done', 'current', 'pending');
    await utilsInit(currentBackend, currentPrefer);
    showSubGraphsSummary(utils.getSubgraphsSummary());
  } catch (e) {
    errorHandler(e);
  }
  predictPath(microphone);
}

