document.addEventListener("readystatechange", function (e) {
   if (e.target.readyState === 'complete') {
       onLoadComplete();
   } else {
       
   }
})

function onLoadComplete() {
    var url = 'config/config.json';
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            document.getElementById("agent").innerHTML = xmlhttp.responseText;
      }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send(null);
}

/**
 if (request.status == 200) {
     var json = JSON.parse(request.responseText);
     document.getElementById("agent").innerText = json;
 }
 */
