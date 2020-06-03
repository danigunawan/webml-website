const example = new FacialLandmarkDetectionExample({facialLandmarkDetection: facialLandmarkDetectionModels,
                                                    faceDetection: faceDetectionModels});
// use front facing camera
example.useFrontFacingCamera(true);

$(document).ready(() => {
  example.UI();
});

$(window).load(() => {
  // Execute inference
  example.main();
});
