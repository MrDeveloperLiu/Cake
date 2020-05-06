// prorducts

function createInnerProrductsListView(item, itemId, callback) {
    var innerView = document.createElement("li");
    innerView.setAttribute("class", "li-items");
    innerView.setAttribute("data-id", itemId);
    innerView.setAttribute("onclick", "onclickTheListView(this)");
    innerView.callback = callback;
    
    var imageView = document.createElement("img");
    imageView.setAttribute("class", "cell-img");
    imageView.setAttribute("src", item.img);
    innerView.appendChild(imageView);
    
    var infoDiv = document.createElement("div");
    infoDiv.setAttribute("class", "cell-div");
    innerView.appendChild(infoDiv);
    
    var infoTitle = document.createElement("p");
    infoTitle.innerText = item.name;
    infoTitle.setAttribute("class", "cell-p-name");
    infoDiv.appendChild(infoTitle);

    var infoUnit = document.createElement("p");
    infoUnit.setAttribute("class", "cell-p");
    infoUnit.innerText = item.unit;
    infoDiv.appendChild(infoUnit);

    var infoPrice = document.createElement("p");
    infoPrice.setAttribute("class", "cell-p-price");
    infoPrice.innerText = ut_formatPrice(item.price);
    infoDiv.appendChild(infoPrice);

    return innerView;
}

function onclickTheListView(v) {
    var itemId = v.getAttribute("data-id");
    var item = BDProductInfoDict[itemId];
    v.callback(item);
    console.log(itemId);
}

function buildProductLists(ulView, buffer, callback) {
    for (var i = 0; i < buffer.length; i++) {
        var list = buffer[i];
        var itemHeader = document.createElement("p");
        itemHeader.setAttribute("class", "p-header");
        itemHeader.innerText = list.name;
        ulView.appendChild(itemHeader);

        for (var j = 0; j < list.items.length; j++) {
            var itemId = list.items[j];
            var item = BDProductInfoDict[itemId];
            var innerView = createInnerProrductsListView(item, itemId, callback);
            ulView.appendChild(innerView);
        }
    }
}

// activity

function createInnerActivityListView(item, idx) {
    var innerView = document.createElement("li");
    innerView.setAttribute("class", "li-activity");
    innerView.setAttribute("idx", idx);
    
    var infoTitle = document.createElement("p");
    infoTitle.innerText = item.title;
    infoTitle.setAttribute("class", "cell-activity-title");
    innerView.appendChild(infoTitle);
    
    var infoView = document.createElement("p");
    infoView.setAttribute("class", "cell-activity-info");
    infoView.innerText = item.info;
    innerView.appendChild(infoView);

    if (item.link) {
        var infoBtn = document.createElement("p");
        infoBtn.innerText = "查看详情";
        infoBtn.setAttribute("class", "cell-activity-detail");
        innerView.appendChild(infoBtn);
    }

    return innerView;
}


function buildActivityLists(ulView, buffer) {
    var actCnt = buffer.items.length;
    if (actCnt <= 0) {
        return;
    }

    var itemHeader = document.createElement("p");
    itemHeader.setAttribute("class", "p-header");
    itemHeader.innerText = buffer.name;
    ulView.appendChild(itemHeader);

    for (var i = 0; i < actCnt; i++) {
        var item = buffer.items[i];
        var innerView = createInnerActivityListView(item, i);
        ulView.appendChild(innerView);
    }
}

//new products

function buildNewProductLists(ulView, buffer, callback) {
    var actCnt = buffer.items.length;
    if (actCnt <= 0) {
        return;
    }

    var itemHeader = document.createElement("p");
    itemHeader.setAttribute("class", "p-header");
    itemHeader.innerText = buffer.name;
    ulView.appendChild(itemHeader);

    for (var i = 0; i < actCnt; i++) {
        var itemId = buffer.items[i];
        var item = BDProductInfoDict[itemId];
        var innerView = createInnerProrductsListView(item, itemId, callback);
        ulView.appendChild(innerView);
    }
}


//links
function createInnerLinkListView(item, itemId, callback) {
    var innerView = document.createElement("li");
    innerView.setAttribute("data-id", itemId);
    innerView.setAttribute("onclick", "onclickTheLinkListView(this)");
    innerView.innerText = item.name;
    innerView.callback = callback;
    return innerView;
}

function onclickTheLinkListView(v){
    var itemURL = v.getAttribute("data-id");
    v.callback(itemURL);
    console.log(itemURL);
}

function buildProductLinkLists(ulView, buffer, callback) {
    var count = buffer.length;
    if (count <= 0) {
        return;
    }

    var itemHeader = document.createElement("p");
    itemHeader.setAttribute("class", "p-header");
    itemHeader.innerText = "产品详情";
    ulView.appendChild(itemHeader);

    for (var i = 0; i < count; i++) {
        var item = buffer[i];
        var itemId = item.url;
        var innerView = createInnerLinkListView(item, itemId, callback);
        ulView.appendChild(innerView);
    }
}

//links
function createInnerBirthdayListView(item, callback) {
    var innerView = document.createElement("li");
    innerView.setAttribute("class", "li-cake");
    
    var imageView = document.createElement("img");
    imageView.setAttribute("class", "img-cake");
    innerView.appendChild(imageView);
    
    callback(imageView, item);

    return innerView;
}

function buildProductBirthdayCakeLists(ulView, buffer, callback) {
    var count = buffer.length;
    if (count <= 0) {
        return;
    }

    for (var i = 0; i < count; i++) {
        var item = buffer[i];
        var innerView = createInnerBirthdayListView(item, callback);
        ulView.appendChild(innerView);
    }
}

