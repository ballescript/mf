let products = [
  ["AGUACATE EXTRA", "KILO"],
  ["ALFALFA GERMINADA", "PIEZA"],
  ["APIO U.S.A.", "MAZO"],
  ["BETABEL", "KILO"],
  ["BROCOLI NACIONAL", "KILO"],
  ["CALABACITA ITALIANA", "KILO"],
  ["CALABACITA NEGRA", "KILO"],
  ["CEBOLLA BLANCA", "KILO"],
  ["CEBOLLA MORADA", "KILO"],
  ["CEBOLLITA CAMBRAY", "MAZO"],
  ["CHAMPIÑON 250 GR", "PIEZA"],
  ["CHAYOTE", "KILO"],
  ["CHILE CARIBE", "KILO"],
  ["CHILE HABANERO", "KILO"],
  ["CHILE JALAPEÑO", "KILO"],
  ["CHILE POBLANO", "KILO"],
  ["CHILE SERRANO", "KILO"],
  ["CHILE VERDE", "KILO"],
  ["CILANTRO", "MAZO"],
  ["CIRUELA ROJA", "KILO"],
  ["COL MORADA", "KILO"],
  ["COLIFLOR", "PIEZA"],
  ["DURAZNO", "KILO"],
  ["EJOTE VERDE", "KILO"],
  ["ELOTE BLANCO", "PIEZA"],
  ["ESPINACAS", "MAZO"],
  ["FRESA 450 GR", "PIEZA"],
  ["FRIJOLITO DE SOYA", "KILO"],
  ["GUAYABA", "KILO"],
  ["HUEVO BLANCO", "KILO"],
  ["JICAMA", "KILO"],
  ["KIWI", "KILO"],
  ["LECHUGA BOLA", "PIEZA"],
  ["LECHUGA ESCAROLA", "PIEZA"],
  ["LECHUGA OREJONA", "PIEZA"],
  ["LECHUGA ROJA", "PIEZA"],
  ["LIMON COLIMA", "KILO"],
  ["LIMON REAL BOLSA", "KILO"],
  ["LIMON PERSA", "KILO"],
  ["MANDARINA", "KILO"],
  ["MANGO HADEN", "KILO"],
  ["MANZANA GOLDEN", "KILO"],
  ["MANZANA ROJA EXFANCY", "KILO"],
  ["MANZANA VERDE", "KILO"],
  ["MELON BLANCO", "KILO"],
  ["MELON CHINO", "KILO"],
  ["NARANJA P/JUGO", "KILO"],
  ["NECTARINA", "KILO"],
  ["NIXTAMAL", "KILO"],
  ["NOPAL", "KILO"],
  ["PAPA BLANCA", "KILO"],
  ["PAPA CAMBRAY", "KILO"],
  ["PAPAYA MARADOL", "KILO"],
  ["PEPINO", "KILO"],
  ["PERA", "KILO"],
  ["PEREJIL", "MAZO"],
  ["PEREJIL LISO", "MAZO"],
  ["PIMIENTO MORRON AMARILLO", "KILO"],
  ["PIMIENTO MORRON ROJO", "KILO"],
  ["PIMIENTO MORRON VERDE", "KILO"],
  ["PIÑA ESMERALDA", "KILO"],
  ["PIÑA MIEL", "KILO"],
  ["PLATANO MACHO", "KILO"],
  ["PLATANO MICO", "KILO"],
  ["PORO", "KILO"],
  ["QUESO REGIONAL", "KILO"],
  ["RABANO", "MAZO"],
  ["REPOLLO", "KILO"],
  ["SANDIA", "KILO"],
  ["TOMATE BOLA 1 ERA", "KILO"],
  ["TOMATE CHERRY 250 GR", "PIEZA"],
  ["TOMATE SALADETTE 1RA.", "KILO"],
  ["TOMATILLO VERDE", "KILO"],
  ["TORONJA ROJA", "KILO"],
  ["UVA RED GLOBO", "KILO"],
  ["ZANAHORIA A GRANEL", "KILO"],
  ["FRIJOL NACIONAL", "KILO"],
  ["AZUCAR", "KILO"],
  ["ARROZ", "KILO"],
  ["AJO", "KILO"],
  ["AJO MOLIDO", "KILO"],
  ["AJONJOLI", "KILO"],
  ["ALMENDRA ENTERA", "KILO"],
  ["ALMENDRA FILETEADA", "KILO"],
  ["ALUBIA CHICA", "KILO"],
  ["ALUBIA GRANDE", "KILO"],
  ["ARANDANO", "KILO"],
  ["CACAHUATE PELADO", "KILO"],
  ["CANELA ENTERA", "KILO"],
  ["CANELA MOLIDA", "KILO"],
  ["CHILE COLORADO SECO", "KILO"],
  ["CHILE DE ARBOL", "KILO"],
  ["CHILE GUAJILLO", "KILO"],
  ["CHILE MOLIDO", "KILO"],
  ["CHILE PASILLA", "KILO"],
  ["CHILTEPIN", "KILO"],
  ["CILANTRO DE SEMILLA", "KILO"],
  ["CIRUELA PASA", "KILO"],
  ["COCO RAYADO", "KILO"],
  ["COMINO ENTERO", "KILO"],
  ["COMINO MOLIDO", "KILO"],
  ["CREMA DE TRIGO", "KILO"],
  ["ESPECIES MIXTAS", "KILO"],
  ["FRIJOL NEGRO", "KILO"],
  ["GARBANZO", "KILO"],
  ["GRANOLA", "KILO"],
  ["JAMAICA", "KILO"],
  ["LAUREL", "KILO"],
  ["LENTEJA CHICA", "KILO"],
  ["LENTEJA GRANDE", "KILO"],
  ["NUEZ ENTERA", "KILO"],
  ["NUEZ PELADA", "KILO"],
  ["OREGANO", "KILO"],
  ["PEPITA DE CALABAZA", "KILO"],
  ["PIMIENTA ENTERA", "KILO"],
  ["PIMIENTA MOLIDA", "KILO"],
  ["SAL DE AJO", "KILO"],
  ["TAMARINDO", "KILO"],
  ["TEPARI", "KILO"],
  ["TRIGO", "KILO"],
  ["UVA PASA", "KILO"],
];
let html =
  "<div class='navbar'><h1>Megafrutta</h1><p class='subt'>FRUTA Y VERDURA</p></div>";
products.forEach((p, i) => {
  html +=
    "<div class='parent'>" +
    "<p>" +
    "<div class='left'>" +
    p[0] +
    "<br/>" +
    "<input type='text' placeholder='notas' class='notas' id='n" +
    i +
    "'>" +
    "</div>" +
    "<div class='nowrap'>" +
    "<div class='right'>" +
    "<button onclick='this.parentNode.querySelector(\"#p" +
    i +
    "\").stepDown()'>" +
    "-" +
    "</button>" +
    "<input type='number' id='p" +
    i +
    "' value='0' min='0' size='2' />" +
    "<button onclick='this.parentNode.querySelector(\"#p" +
    i +
    "\").stepUp()'>" +
    "+" +
    "</button>" +
    "<br/>" +
    "<span class='presentacion'>" +
    p[1] +
    "</span>" +
    "</div>" +
    "</div>" +
    "</p>" +
    "<hr/>" +
    "</div>";
});

document.getElementById("list").innerHTML = html;

function copyList() {
  let finalList = "";
  let bottomHTML = "<p class='alert'>Texto copiado:</p>";
  for (var i = 0; i < products.length; i++) {
    let elm = "p" + i;
    let nelm = "n" + i;
    let val = document.getElementById(elm).value;
    let nval = document.getElementById(nelm).value;
    if (val > 1) {
      finalList +=
        products[i][0] +
        "      " +
        val +
        " " +
        products[i][1] +
        "S      " +
        nval +
        "\n";
      bottomHTML +=
        products[i][0] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        val +
        " " +
        products[i][1] +
        "S";
      if (nval !== "") {
        bottomHTML +=
          "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + nval + "<br/>";
      } else {
        bottomHTML += "<br/>";
      }
    } else if (val > 0) {
      finalList +=
        products[i][0] +
        "      " +
        val +
        " " +
        products[i][1] +
        "      " +
        nval +
        "\n";
      bottomHTML +=
        products[i][0] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        val +
        " " +
        products[i][1];
      if (nval !== "") {
        bottomHTML +=
          "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + nval + "<br/>";
      } else {
        bottomHTML += "<br/>";
      }
    }
  }
  document.getElementById("bottom").innerHTML = bottomHTML;

  copyFinalList(finalList);
}
function copyFinalList(finalList) {
  const textArea = document.createElement("textarea");

  textArea.value = finalList;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
}
window.onbeforeunload = function (event) {
  return this.confirm();
};
