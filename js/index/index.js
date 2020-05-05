document.addEventListener("readystatechange", function (e) {
   if (e.target.readyState === 'complete') {
       onLoadComplete();
   }
})
//main
function onLoadComplete() {
    //act
    var actView = document.getElementById("ul-act");
    buildActivityLists(actView, BDActList);
    //new
    var newView = document.getElementById("ul-new");
    buildNewProductLists(newView, BDNewProductList, turnToDetail);
    //product
    var ulView = document.getElementById("ul-list");
    buildProductLists(ulView, BDMenuList, turnToDetail);
}

function turnToDetail(it) {
    var toURL = BDURLParser.buildURL("product-detail.html", it);
    window.location.href = toURL;
}
