// just paint background with image
webcam.onFrameReceived(function() {
    const frame = webcam.currentFrame;
    if (frame)
        scene.setBackgroundImage(frame)
})