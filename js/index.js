document.addEventListener("readystatechange", function (e) {
   if (e.target.readyState === 'complete') {
//       onLoadComplete();
       test();
   } else {
       
   }
})

var bakedList = []

function onLoadComplete() {
    var url = 'config/config.json';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        if (xmlhttp.status == 200) {
            var json = JSON.parse(xmlhttp.responseText);
            buildLists(json);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

function buildLists(json) {
    var html = "";
    for (var i = 0; i < json.length; i++) {
        var list = json[i];
        var itemHeader = "<p class=\"p-header\">" + list.name + "</p>";
        var items = buildItems(list);
        var inner = itemHeader + items;
        html += inner;
    }
    var ulView = document.getElementById("ul-list");
    ulView.innerHTML = html;
    ulView.addEventListener("click", function(item){
        console.log(item);
    });
}


function buildItems(list) {
    var html = "";
    for (var i = 0; i < list.items.length; i++) {
        var item = list.items[i];
        var inner = "<li class=\"li-items\">" + item.name + "</li>";
        html += inner;
    }
    return html;
}


function test() {
    var json = [
        {
            "id" : 1001,
            "name" : "曲奇系列",
            "items" : [
                {
                    "id" : 10011,
                    "name" : "双重Coco坚果",
                    "unit" : "一盒(6块)",
                    "price" : 5800,
                    "img" : "img/quqi/IMG_1182.JPG",
                },
                {
                    "id" : 10012,
                    "name" : "花生果酱",
                    "unit" : "一盒(6块)",
                    "price" : 5000,
                    "img" : "img/quqi/IMG_1186.JPG",
                },
                {
                    "id" : 10013,
                    "name" : "海盐焦糖太妃",
                    "unit" : "一盒(6块)",
                    "price" : 5800,
                    "img" : "img/quqi/IMG_1189.JPG",
                },
                {
                    "id" : 10014,
                    "name" : "柠檬蛋黄",
                    "unit" : "一盒(6块)",
                    "price" : 5000,
                    "img" : "img/quqi/IMG_1196.JPG",
                },

            ]
        },
        {
            "id" : 1002,
            "name" : "烧仙草系列",
            "items" : [
                {
                    "id" : 10021,
                    "name" : "手工芋圆烧仙草",
                    "unit" : "一盒(500ML)",
                    "price" : 2800,
                    "img" : "img/taro/IMG_1197.JPG",
                }
            ]
        },
        {
            "id" : 1003,
            "name" : "蛋糕系列",
            "items" : [
                {
                    "id" : 10031,
                    "name" : "日式豆乳奶盖蛋糕卷",
                    "unit" : "一盒",
                    "price" : 2200,
                    "img" : "img/cake/IMG_1184.JPG",
                },
                {
                    "id" : 10031,
                    "name" : "三拼毛巾卷（抹茶、可可、芒果）",
                    "unit" : "一盒(3块)",
                    "price" : 4500,
                    "img" : "img/cake/IMG_1198.JPG",
                }
            ]
        },
        {
            "id" : 1004,
            "name" : "盒子蛋糕系列",
            "items" : [
                {
                    "id" : 10041,
                    "name" : "草莓小单纯拉丝",
                    "unit" : "一盒(360ML)",
                    "price" : 4500,
                    "img" : "img/box_cake/IMG_1183.JPG",
                },
                {
                    "id" : 10042,
                    "name" : "海盐奶盖拉丝",
                    "unit" : "一盒(360ML)",
                    "price" : 4000,
                    "img" : "img/box_cake/IMG_1185.JPG",
                },
                {
                    "id" : 10043,
                    "name" : "榴莲乳酪拉丝",
                    "unit" : "一盒(360ML)",
                    "price" : 4500,
                    "img" : "img/box_cake/IMG_1195.JPG",
                },
                {
                    "id" : 10044,
                    "name" : "英式焦糖咖啡拉丝",
                    "unit" : "一盒(360ML)",
                    "price" : 4000,
                    "img" : "img/box_cake/IMG_1187.JPG",
                }
            ]
        }
    ]
    buildLists(json);
}
