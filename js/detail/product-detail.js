//main
function onLoadComplete() {
    
    var json = BDURLParser.parse(self.location.search);
    
    //title
    var head = document.getElementsByTagName("head")[0];
    var title = head.getElementsByTagName("title")[0];
    title.innerText = json.name;

    //image
    var imageView = $("icon");
    imageView.height = 300;
    
    ut_loadImageFitScreen(json.img, 0, function(image, w, h){
        imageView.src = json.img;
        imageView.width = w;
        imageView.height = h;
    });
    //title
    $("title").innerText = json.name;
    //price
    $("price").innerHTML = ut_formatPriceWithDiscount(json.price, json.discount);
    //unit
    $("unit").innerText = json.unit;
}

onLoadComplete();
