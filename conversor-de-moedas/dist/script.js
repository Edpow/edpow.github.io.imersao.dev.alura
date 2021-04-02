function convertValue(valueToConvert){
  dolarValue = actualDolarValue()
  valueToConvert = parseFloat(valueToConvert) * dolarValue;
  valueToConvert = valueToConvert.toFixed(2);
  return valueToConvert;
}

function btClickTest(){
  var convertedValue = convertValue(document.getElementById("input").value);
  document.getElementById("output").value = convertedValue;
  //alert(document.getElementById("input").value)
}

function getJsonFromApi(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function actualDolarValue(){
  var json = getJsonFromApi("https://economia.awesomeapi.com.br/all/USD-BRL");
  var obj = JSON.parse(json);
  valueDolar = parseFloat(obj.USD.ask);
  valueDolar = valueDolar.toFixed(2);
  return valueDolar;
}
  
alert(actualDolarValue());