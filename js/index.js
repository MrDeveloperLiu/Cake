document.addEventListener("readystatechange", function (e) {
   if (e.target.readyState === 'complete') {
       onLoadComplete();
   }
})


function onLoadComplete() {
    /*
    var url = 'config/config.json';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        if (xmlhttp.status == 200) {
            buildLists(JSON.parse(xmlhttp.responseText));
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
     */
    
    buildLists(BDMenuList);
}

function buildLists(buffer) {
    
    var ulView = document.getElementById("ul-list");
    
    for (var i = 0; i < buffer.length; i++) {
        var list = buffer[i];
        var itemHeader = document.createElement("p");
        itemHeader.setAttribute("class", "p-header");
        itemHeader.innerText = list.name;
        ulView.appendChild(itemHeader);

        for (var j = 0; j < list.items.length; j++) {
            var item = list.items[j];
            var innerView = createInnerCellView(item, j);
            ulView.appendChild(innerView);
        }
    }
    /*
    //bind event
    ulView.addEventListener("click", function(item){

        if (item.target.getAttribute("class") == "li-items") {
            console.log(item.target);
            var index = item.target.getAttribute("idx");
            console.log(index);
        }
        
    });
     */
}

function createInnerCellView(item, idx) {
    var innerView = document.createElement("li");
    innerView.setAttribute("class", "li-items");
    innerView.setAttribute("idx", idx);

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
    infoPrice.innerText = item.price / 100 + "元";
    infoDiv.appendChild(infoPrice);

//    console.log(innerView);
    return innerView;
}
