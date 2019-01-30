function getModelName(modelname) {
  return modelname.replace('_tflite', '').replace('_onnx', '').replace('_', ' ').replace('_', ' ');
}

function isTFLite(modelname){
  return (modelname.toLowerCase().indexOf('_tflite') > -1)? true:false;
}

function isONNX(modelname){
  return (modelname.toLowerCase().indexOf('_onnx') > -1)? true:false;
}

function showModel(div, modelcategory) {
  let rowstring, row;
  for (model of modelcategory) {
    row = '<tr>';
    let name = '<td scope=\'col\' class=\'name\'>' + getModelName(model.modelName) + '</td>';
    row += name;

    let modeltype;
    if(isTFLite(model.modelName)) {
      modeltype = '<td scope=\'col\'>' + 'TFLite' + '';
    } else if(isONNX(model.modelName)) {
      modeltype = '<td scope=\'col\'>' + 'ONNX' + '';
    } else {
      modeltype = '<td scope=\'col\'></td>';
    }
    row += modeltype;

    if (model.paperUrl) {
      row += `<td scope=\'col\'><a title='View paper' href='${model.paperUrl}'>paper</a></td>`;
    } else {
      row += '<td scope=\'col\'></td>';
    }

    let modelUrl = new URL(model.modelFile.replace('../', '../examples/'), location.href);

    if(location.hostname.indexOf('.github.io') >-1) {
      let user = location.replace('.github.io', '');
      let path = location.pathname.split('/')[1];
      let newlocation = `https://${user}.github.io/${path}/raw/master`;
      modelUrl = new URL(model.modelFile.replace('../', '../examples/'), newlocation);
    }

    let netronUrl = `https://lutzroeder.github.io/netron/?url=${modelUrl}`;
    row += `<td scope=\'col\'><a title='View visualized model by Netron' href='${netronUrl}'>netron</a></td>`;

    if (model.intro) {
      row += `<td scope=\'col\' class='des'>${model.intro}</td>`;
    } else {
      row += '<td scope=\'col\'></td>';
    }

    row = row + '</tr>';
    rowstring += row;
  }
  $(div).html(rowstring);
}

$(document).ready(function () {
  showModel('#modelcv-ic tbody', imageClassificationModels)
  showModel('#modelcv-hpe tbody', humanPoseEstimationModels)
  showModel('#modelcv-ss tbody', semanticSegmentationModels)
});