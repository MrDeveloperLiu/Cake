function ut_loadImage(src, callback) {
    var image = new Image();
    image.onload = function() {
        callback(image);
    };
    image.src = src;
}

function ut_imageFitSizeAccordingScreen(image, edge) {
    var ratio = (image.height) / (image.width);
    var width = screen.width - (edge * 2);
    var height = ratio * width;
    return {
        width : width,
        height : height
    };
}

function ut_loadImageFitScreen(src, edge, callback) {
    var image = new Image();
    image.onload = function() {
        var size = ut_imageFitSizeAccordingScreen(image, edge);
        callback(image, size.width, size.height);
    };
    image.src = src;
}

function ut_price(p) {
    return p / 100.0;
}

function ut_formatPrice(p){
    return ut_price(p) + "元";
}