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

    // Add click event listener to the canvas
    canvas.addEventListener('click', function (event) {
        var x = event.offsetX;
        var y = event.offsetY;
        var clickedBox = findClickedBox(x, y);
        if (clickedBox) {
            removeBox(clickedBox);
        }
    });

    function findClickedBox(x, y) {
        var boxes = data.boxes; // Assuming data is accessible here
        for (var i = 0; i < boxes.length; i++) {
            var box = boxes[i];
            if (x >= box.left_top[0] && x <= box.right_bottom[0] && y >= box.left_top[1] && y <= box.right_bottom[1]) {
                return box;
            }
        }
        return null;
    }

    function removeBox(box) {
        // Remove the box from the data
        var index = data.boxes.indexOf(box);
        if (index > -1) {
            data.boxes.splice(index, 1);
        }
        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Redraw the image
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        // Redraw the remaining boxes
        data.boxes.map((x) => drawBox(context, x));
    }
};

async function fetchJson(jsonPath) {
    const response = await fetch(jsonPath, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
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
}

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
        return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};