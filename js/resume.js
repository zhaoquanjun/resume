

//->音频的自动播放
~function () {
    
    audioAutoPlay('audioPlayer')
    function audioAutoPlay(id){
        var audioPlayer = document.getElementById(id);
        var play = function(){
            audioPlayer.play();
            document.removeEventListener("touchstart",play, false);
        };
        audioPlayer.play();
        document.addEventListener("WeixinJSBridgeReady", function () {
            play();
        }, false);
        document.addEventListener('YixinJSBridgeReady', function() {
            play();
        }, false);
        document.addEventListener("touchstart",play, false);
    }
}();
