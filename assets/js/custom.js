document.addEventListener("DOMContentLoaded", function () {
    const video = document.createElement("video");
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 120
    canvas.height = 160

    navigator.getUserMedia({ video: true },
        () => video.src = window.URL.createObjectURL(stream),
        e => { });

    function draw() {
        if (video.paused || video.ended) return false;
        context.drawImage(v, 0, 0, w, h);
        // map rgb data to palette
        //
        // convert canvas to pxt image
        //
        // send image to pxt
    }

    // draw at 50fps
    setInterval(draw, 20);
})