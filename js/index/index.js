//main
function onLoadComplete() {
    var lazyLoad = new imageLazyLoader("cls-lazy-img");
    lazyLoad.start();
    //act
    var actView = document.getElementById("ul-act");
    buildActivityLists(actView, BDActList);
    //new
    var newView = document.getElementById("ul-new");
    buildNewProductLists(newView, BDNewProductList, turnToDetail);
    //product
    var ulView = document.getElementById("ul-list");
    buildProductLists(ulView, BDMenuList, turnToDetail);
    //link
    var linkView = document.getElementById("ul-info");
    buildProductLinkLists(linkView, BDProductLinkList, turnToProfile);
    //qr
    var qrView = document.getElementById("img-qrcode");
    qrView.src="img/qrcode/IMG_1222.JPG";
    //life
    listenPageLife();
}

function turnToDetail(it) {
    var toURL = BDURLParser.buildURL("product-detail.html", it);
    window.location.href = toURL;
}

function turnToProfile(it) {
    window.location.href = it;
}

var IsPageHide = false;
function listenPageLife() {
    window.addEventListener('pageshow', function () {
        if (IsPageHide) {
            window.location.reload();
            IsPageHide = false;
        }
        console.log("pageshow");
    });
    window.addEventListener('pagehide', function () {
        IsPageHide = true;
        console.log("pagehide");
    });
}

onLoadComplete();
