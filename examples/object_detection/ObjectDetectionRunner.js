class ObjectDetectionRunner extends WebNNRunner {
  constructor() {
    super();
    this._outputBoxTensor = [];
    this._outputClassScoresTensor = [];
    this._deQuantizedOutputBoxTensor = [];
    this._deQuantizedOutputClassScoresTensor = [];
  }

  /** @override */
  _initOutputTensor = () => {
    if (this._currentModelInfo.category === 'SSD') {
      // SSD models
      const totalBoxes = this._currentModelInfo.numBoxes.reduce((a, b) => a + b);
      const boxTensorLen = totalBoxes * this._currentModelInfo.boxSize;
      const classTensorLen = totalBoxes * this._currentModelInfo.numClasses;
      let typedArray;
      if (this._currentModelInfo.isQuantized) {
        typedArray = Uint8Array;
        this._deQuantizedOutputBoxTensor = new Float32Array(boxTensorLen);
        this._deQuantizedOutputClassScoresTensor = new Float32Array(classTensorLen);
      } else {
        typedArray = Float32Array;
      }
      this._outputBoxTensor = new typedArray(boxTensorLen);
      this._outputClassScoresTensor = new typedArray(classTensorLen);
      const options = {
        numBoxes: this._currentModelInfo.numBoxes,
        boxSize: this._currentModelInfo.boxSize,
        numClasses: this._currentModelInfo.numClasses,
      };
      this._outputTensor = prepareOutputTensorSSD(this._outputBoxTensor, this._outputClassScoresTensor, options);
    } else {
      // YOLO models
      this._outputTensor = [new Float32Array(this._currentModelInfo.outputSize)];
    }
  };

  /** @override */
  _getOutputTensor = () => {
    let outputTensor = {};

    if (this._currentModelInfo.category === 'SSD') {
      outputTensor.outputBoxTensor = this._outputBoxTensor;
      outputTensor.outputClassScoresTensor = this._outputClassScoresTensor;
      if (this._currentModelInfo.isQuantized) {
        outputTensor.deQuantizedOutputBoxTensor = this._deQuantizedOutputBoxTensor;
        outputTensor.deQuantizedOutputClassScoresTensor = this._deQuantizedOutputClassScoresTensor;
      }
    } else {
      // YOLO models
      outputTensor = this._outputTensor[0];
    }

    return outputTensor;
  };
}