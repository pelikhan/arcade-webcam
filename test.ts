// just paint background with image
webcam.onFrame(function() {
    const frame = webcam.currentFrame;
    if (frame)
        scene.setBackgroundImage(frame)
})