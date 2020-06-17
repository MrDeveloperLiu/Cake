function installTypesView(datas) {
    if (datas.length <= 0) {
        return;
    }
    //种类
    var liProductFragment = $(document).$create();
    for (var j = 0; j < datas.length; j++) {
        var item = datas[j];
        
        var li = $(document).$create("li")
        .setter("class")("types")
        .setter("data-idx")(j)
        .setter("data-id")(item.id);
        
        var img = $(document).$create("img")
        .setter("class")("types");
        li.appendChild(img);
        //icon
        img.setImage(item.icon);
        
        var p = $(document).$create("p")
        .setter("alt")("")
        .setter("class")("types");
        p.innerText = item.title;
        li.appendChild(p);
        
        liProductFragment.appendChild(li);
    }
    $("ul-types").appendChild(liProductFragment);
    $("ul-types").clickAt("types", function(e){
        var id = e.getter("data-id");
        var items = BDMenuIdMap[id];
        if (!$isArray(items) || items.length <= 0) {
            return;
        }
        var param = {
            "id" : e.getter("data-id"),
            "title" : e.innerText,
        };
        var toURL = BDURLParser.buildURL("product-list.html", param);
        $goto(toURL);
    });

}

function installIntrosView(datas) {
    if (datas.length <= 0) {
        return;
    }
    //种类
    var liProductFragment = $(document).$create();
    for (var j = 0; j < datas.length; j++) {
        var item = datas[j];
        
        var li = $(document).$create("li")
        .setter("class")("intros")
        .setter("data-idx")(j)
        .setter("data-id")(item.id);
        
        var img = $(document).$create("img")
        .setter("class")("intros");
        li.appendChild(img);
        //icon
        img.setImage(item.icon);
        
        var p = $(document).$create("p")
        .setter("alt")("")
        .setter("class")("intros");
        p.innerText = item.title;
        li.appendChild(p);
        
        liProductFragment.appendChild(li);
    }
    $("ul-intros").appendChild(liProductFragment);
}
