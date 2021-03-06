function WKWheel(datas, interval, callback) {
    var callback = callback;
    var interval = interval;
    
    var prev = -1;
    var index = 0;
    var total = datas.length;
    var timer = null;
    
    function onTimer() {
        var lastFrame = total - 1;
        prev = index;
        if (index >= lastFrame) {//ff
            index = 0;
        }else{//nf
            index ++;
        }
        setFrameByIndex();
    }
    
    function setFrameByIndex(){
        callback(index, total, prev);
    }
    
    return {
        start: function() {
            setFrameByIndex();
            this.stop();
            if (datas.length > 1) {
                timer = setInterval(onTimer, interval);
            }
        },
        
        stop: function() {
            clearInterval(timer);
            timer = null;
        },
        
        current: function() {
            return index;
        },
        
        changeAtIndex: function(idx) {
            var lastFrame = total - 1;
            if (idx < 0 || idx > lastFrame) {
                return;
            }
            prev = index;
            index = idx;
            this.start();
        }
    };
}

function installWheelIndexView(datas){
    if (datas.length <= 1) {
        return;
    }
    //点点
    var liIndexFragment = $(document).$create();
    for (var j = 0; j < datas.length; j++) {
        var it = datas[j];
        //index
        var liId = "li-index-" + j;
        var liIndex = $(document).$create("li")
        .setter("class")("index")
        .setter("id")(liId)
        .setter("data-idx")(j)
        .setter("data-id")(it.id);
        liIndex.innerText = (j + 1);
        liIndexFragment.appendChild(liIndex);
    }
    //渲染
    $("ol-index").appendChild(liIndexFragment);
}


function installWheelView(datas) {
    if (datas.length <= 0) {
        return;
    }
    //推荐
    var realDatas = [];
    for (var i = 0; i < datas.length; i++) {
        var itemId = datas[i];
        var item = BDProductInfoDict[itemId];
        realDatas.push(item);
    }

    installWheelIndexView(realDatas);
    //轮子
    var wheel = new WKWheel(realDatas, 8000, function(idx, total, prev){
//        console.log("idx", idx, "total", total, "prev", prev);
        //change img
        var it = realDatas[idx];
        $("img-wheel").setImage(it.thumb);

        if (total <= 1) {
            return;
        }
        //
        if (prev != -1) {
            //clear selected
            var prevId = "li-index-" + prev;
            $(prevId).style.background = "lightgray";
        }
        //set selected
        var currentId = "li-index-" + idx;
        $(currentId).style.background = "lightpink";
    });
    wheel.start();
    
    //change by user
    $("ol-index").clickAt("index", function(it){
        var idx = it.getter("data-idx");
        wheel.changeAtIndex(idx);
    });
    
    //点击图片跳转详情
    $("img-wheel").onclick = function(){
        var it = realDatas[wheel.current()];
        var toURL = BDURLParser.buildURL("product-detail.html", it);
        $goto(toURL);
    };
}

