window.onload = function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var image = new Image();
    image.src = 'cat.jpg'; // ensure that 'hoge.png' is in the correct path
    image.onload = function() {
        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Draw a circle over the image
        context.beginPath();
        context.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI, false);
        context.fillStyle = 'rgba(0, 0, 255, 0.5)';
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();
    };
};