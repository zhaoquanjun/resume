//->音频的自动播放
~ function () {
    // box ----  audio
    var audioBox = document.getElementById('audioBox');
    var audio = document.getElementById('audioPlayer');

    audio.addEventListener('canplaythrough', function () {
        audioBox.style.display = 'block';
    }, false)

    // 兼容ios自动播放
    audioAutoPlay(audio)

    // 点击播放、暂停
    audioBox.addEventListener('click', function () {
        var status = audio.paused;
        if (status) {
            _play()
            addClass(audioBox, 'audioMove')
        } else {
            audio.pause()
            removeClass(audioBox, 'audioMove')
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


    // 工具
    // 添加classname
    function addClass(curEle, className) {
        var ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
        for (var i = 0, len = ary.length; i < len; i++) {
            var curName = ary[i];
            if (!hasClass(curEle, curName)) {
                curEle.className += " " + curName;
            }
        }
    }
    // 删除classname
    function removeClass(curEle, className) {
        var ary = className.replace(/(^ +| +$)/g, "").split(/ +/g);
        for (var i = 0, len = ary.length; i < len; i++) {
            var curName = ary[i];
            if (hasClass(curEle, curName)) {
                var reg = new RegExp("(^| +)" + curName + "( +|$)", "g");
                curEle.className = curEle.className.replace(reg, " ");
            }
        }
    }
    //->hasClass:验证当前元素中是否包含className这个样式类名
    function hasClass(curEle, className) {
        var reg = new RegExp("(^| +)" + className + "( +|$)");
        return reg.test(curEle.className);
    }

}();