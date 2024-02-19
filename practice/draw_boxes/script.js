
window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.src = 'cat.jpg';

    image.onload = function () {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        // Draw a box over the image
        var jsonPath = "boxes2.json"
        fetchJson(jsonPath).then(data => {
            console.log(data.boxes)
            data.boxes.map((x) => drawBox(context, x))
        }).catch(error => console.error('Error:', error));
        //drawBox(context, box);
    };

    //image.onload = draw_box(context);
};

async function fetchJson(jsonPath) {
    const response = await fetch(jsonPath);
    return await response.json();
}


function drawBox(context, box) {
    console.log(box)
    context.beginPath();
    context.rect(box.left_top[0], box.left_top[1], box.right_bottom[0] - box.left_top[0], box.right_bottom[1] - box.left_top[1]);
    console.log(box.importance)
    context.fillStyle = 'rgba(0, 0, 255,{})'.format(box.importance);
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = '#003300';
    context.stroke();

};

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
  };