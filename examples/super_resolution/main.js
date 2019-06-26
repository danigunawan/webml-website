const inputCanvas = document.getElementById('inputCanvas');
const outputCanvas = document.getElementById('outputCanvas');

let front = false;

let utils = new Utils();
utils.updateProgress = updateProgress;

function changeCanvasSize(newModel) {
  const inputSize = newModel.inputSize;
  const outputSize = newModel.outputSize;
  inputCanvas.width = inputSize[1];
  inputCanvas.height = inputSize[0];
  outputCanvas.width = outputSize[1];
  outputCanvas.height = outputSize[0];
}


const updateResult = (result) => {
  try {
    console.log(`Inference time: ${result.time} ms`);
    let inferenceTimeElement = document.getElementById('inferenceTime');
    inferenceTimeElement.innerHTML = `inference time: <span class='ir'>${result.time} ms</span>`;
  } catch (e) {
    console.log(e);
  }
}

const utilsPredict = async (source, backend, prefer) => {
  await showProgress('done', 'done', 'current', true);
  let result = await utils.predict(source);
  updateResult(result);
  let start = performance.now();
  utils.drawInput(inputCanvas, source);
  utils.drawOutput(outputCanvas, source);
  let elapsed = performance.now() - start;
  console.log(`draw time: ${elapsed.toFixed(2)} ms`);
  await showProgress('done', 'done', 'done', true);
  showResults();
}

const updateScenario = async (camera = false) => {
  // for camera tab when needed
}

const updateBackend = async (camera = false, force = false) => {
  if (force) {
    utils.initialized = false;
  }
  try { utils.deleteAll(); } catch (e) { }
  logConfig();
  await showProgress('done', 'current', 'pending', !camera);
  try {
    getOffloadOps(currentBackend, currentPrefer);
    await utils.init(currentBackend, currentPrefer);
    showSubGraphsSummary(utils.getSubgraphsSummary());
    utilsPredict(imageElement, currentBackend, currentPrefer);
  }
  catch (e) {
    errorHandler(e);
  }
}

const main = async (camera = false) => {
  if (currentModel === 'none_none') {
    errorHandler('No model selected');
    return;
  }
  console.log(currentModel)
  streaming = false;
  try { utils.deleteAll(); } catch (e) { }
  logConfig();
  await showProgress('current', 'pending', 'pending', !camera);
  try {
    let model = getModelById(currentModel);
    await utils.loadModel(model);
    changeCanvasSize(model);
    getOffloadOps(currentBackend, currentPrefer);
    await showProgress('done', 'current', 'pending', !camera);
    await utils.init(currentBackend, currentPrefer);
    showSubGraphsSummary(utils.getSubgraphsSummary());
    utilsPredict(imageElement, currentBackend, currentPrefer);
  } catch (e) {
    errorHandler(e);
  }
}
