function reqListener() {
    console.log(this.responseText)
    const obj = JSON.parse(this.responseText);
    var discos = obj.discos;


    discos.forEach(function(discos) {

        document.body.innerHTML +=
            "<ul>" + "<div>" + "Artista: " + discos.artista + "</div>" +
            "<ul>" + "<div>" + "Albúm" + " : " + discos.titulo + "</div>" + "</ul>" +
            "<ul>" + "<div>" + "Ano" + " : " + discos.ano + "</div>" + "</ul>" +
            "<img " + "src=" + discos.capa + ">" +
            "</ul>" + "</br>" + "<hr>";
    });

};

var url = "https://raw.githubusercontent.com/pauloewerton/testes-json/main/discos.json";
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", url, true);
oReq.send();