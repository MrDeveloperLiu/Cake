document.addEventListener("readystatechange", function (e) {
   if (e.target.readyState === 'complete') {
       onLoadComplete();
   }
})

//main
function onLoadComplete() {    
    //act
    var listView = document.getElementById("ul-birthday");
    buildProductBirthdayCakeLists(listView, BDBirthdayCakeList, loadImageView);

}

function loadImageView(imageView, item) {
    imageView.height = 300;
    
    ut_loadImageFitScreen(item.img, 0, function(image, w, h){
        imageView.src = item.img;
        imageView.width = w;
        imageView.height = h;
    });
}

