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
  ["SEMILLA DE GIRASOL", "KILO"],
  ["SOYA", "KILO"],
  ["TAMARINDO", "KILO"],
  ["TEPARI", "KILO"],
  ["TRIGO", "KILO"],
  ["UVA PASA", "KILO"],
];

let prices =
  "60.00	30.00	10.25	15.60	27.33	28.00	18.00	16.20	19.20	6.00	22.25	12.00	32.40	78.00	30.00	36.60	38.40	29.40	4.80	56.40	14.40	30.00	0.00	28.80	5.40	8.40	0.00	28.80	24.60	48.53	12.60	72.00	9.75	17.50	9.75	17.50	35.37	48.00	26.40	27.00	30.00	30.32	28.74	29.68	18.60	19.20	14.40	0.00	26.40	36.00	19.20	18.60	22.80	25.14	28.94	19.20	19.20	58.20	58.20	45.60	16.80	18.00	21.60	20.27	21.60	66.00	6.60	7.64	10.20	12.86	0.00	14.77	34.80	15.60	0.00	8.18	36.00	23.76	22.80	102.00	180.00	78.00	276.00	300.00	36.00	39.60	168.00	60.00	480.00	456.00	102.00	108.00	156.00	48.00	120.00	1680.00	72.00	60.00	72.00	96.00	90.00	24.00	144.00	26.40	30.00	48.00	222.00	84.00	39.60	33.60	132.00	408.00	180.00	156.00	264.00	168.00	54.00	96.00	27.60	36.00	36.00	8.40	66.00";

let pricesSplit = prices.split(/(\s+)/);
let pricesArray = pricesSplit.filter((x) => x.trim() != "");
products.forEach((p, i) => {
  products[i].push(pricesArray[i]);
});

let html =
  "<div class='navbar'><p class='subt'>FRUTA Y VERDURA</p></div>";
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
    "<span class='price'>$ " +
    p[2] +
    "</span>" +
    "<br/>" +
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
  let total = 0;
  let bottomHTML =
    "<p class='alert'>Texto copiado</p><span>Lista:</span><br/><br/>";
  for (var i = 0; i < products.length; i++) {
    let elm = "p" + i;
    let nelm = "n" + i;

    let val = document.getElementById(elm).value;
    let priceTimesQuantity = products[i][2] * val;
    total += priceTimesQuantity;

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
        " " +
        "\n";
      bottomHTML +=
        "<div>" +
        "•" +
        products[i][0] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        val +
        " " +
        products[i][1] +
        "S" +
        " " +
        "</div>" +
        "<div class='total'>" +
        (products[i][2] !== "0.00"
          ? " x " + products[i][2] + " = " + priceTimesQuantity.toFixed(2)
          : "pendiente") +
        "</div>";
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
        " " +
        "\n";
      bottomHTML +=
        "•" +
        products[i][0] +
        "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        val +
        " " +
        products[i][1] +
        " " +
        "<div class='total'>" +
        (products[i][2] !== "0.00"
          ? val != "1"
            ? " x " + products[i][2] + " = " + priceTimesQuantity.toFixed(2)
            : products[i][2]
          : "pendiente") +
        "</div>";
      if (nval !== "") {
        bottomHTML +=
          "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + nval + "<br/>";
      } else {
        bottomHTML += "<br/>";
      }
    }
  }

  let totalString = "Total  $ " + total.toFixed(2);
  bottomHTML += "<br/><span class='total'>" + totalString + "</span>";
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
