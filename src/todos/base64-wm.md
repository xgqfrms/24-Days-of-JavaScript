# base64 image


```html
<!DOCTYPE html>
<html>
<head>
  <title>text too base64 image</title>
</head>
<body>
  <canvas id="canvas" width="200" height="100" style="border:1px solid #d3d3d3;">
    Your browser does not support the canvas element.
  </canvas>
  <script>
    // text too base64 image
    const canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    ctx.font = "30px Arial";
    ctx.fillText("xgqfrms", 50, 50);
    const dataURL = canvas.toDataURL();
    console.log(`dataURL =`, dataURL);
  </script>
</body>
</html>

```
