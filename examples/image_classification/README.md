WebML Image Classification URL Parameters
==

Example
-----------
https://127.0.0.1/examples/image_classification/index.html?prefer=none&b=WASM&m=mobilenet_v1&t=tflite&s=image&d=0

Description
-----------
| Parameter | Value | Description | Note |
|----|------|------|-----------|
| prefer | sustained, fast, low | Preferred backend for WebML backend<br>sustained == GPU<br>fast == CPU<br>low == Low Power |Only work for WebML backend, useless when backend is WASM or WebGL |
| b | WASM, WebGL, WebML | Backend | Case sensitive |
| m | // for tflite format <br>mobilenet_v1, mobilenet_v2, squeezenet, inception_v3, inception_v4, inception_resnet_v2 <br><br>// for onnx format <br>mobilenet_v2, squeezenet, resnet_v1, resnet_v2, inception_v2, densenet| Model and it's version ||
| t | tfile<br>onnx| Model format  | |
| s | image <br>camera | Show image or camera tab directly | |
| d | 0, 1  | Display model<br>// full view <br>0<br>// compact view<br>1  | |


Note
-----------
For getting better performance, checking radio button for backend and switching "image" and "camera" tabs will not update URL parameters in browser address box.