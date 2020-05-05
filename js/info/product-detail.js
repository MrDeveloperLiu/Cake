document.addEventListener("readystatechange", function (e) {
   if (e.target.readyState === 'complete') {
       onLoadComplete();
   }
})

//main
function onLoadComplete() {
    
    var json = BDURLParser.parse(self.location.search);
    
    //title
    var head = document.getElementsByTagName("head")[0];
    var title = head.getElementsByTagName("title")[0];
    title.innerText = json.name;

    //image
    var imageView = document.getElementById("icon");
    ut_loadImageFitScreen(json.img, 0, function(image, w, h){
        imageView.src = json.img;
        imageView.width = w;
        imageView.height = h;
    });
    //title
    var titleView = document.getElementById("title");
    titleView.innerText = json.name;
    
    var priceView = document.getElementById("price");
    priceView.innerText = ut_formatPrice(json.price);
    
    console.log("BDMaterialDict", BDMaterialDict);
    console.log("BDProductInfoDict", BDProductInfoDict);
}

