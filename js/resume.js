//->音频的自动播放
~ function () {
    // box ----  audio
    var audioBox = document.getElementById('audioBox');
    var audio = document.getElementById('audioPlayer');

    audio.addEventListener('canplaythrough', function () {
        alert(1)
    }, false)

    // 兼容ios自动播放
    audioAutoPlay(audio)

    // 点击播放、暂停
    audioBox.addEventListener('click', function () {
        var status = audio.paused;
        if (status) {
            _play()
        } else {
            audio.pause()
        }
    }, false)


    function _play() {
        audio.play();
        document.removeEventListener("touchstart", _play, false);
    };

    function audioAutoPlay(ele) {
        ele.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            _play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function () {
            _play();
        }, false);
        document.addEventListener("touchstart", _play, false);
    }


}();