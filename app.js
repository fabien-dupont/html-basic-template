
var callBackGetSuccess = function(data) { 
  var element = document.getElementById("zone_api_result");
  console.log(data.result);
 element.innerHTML = data.result;
}

function buttonClickGET(){
  var queryLoc = document.getElementById("queryLoc").value;
  var apikey = "f9fhsIyi2W9sBfBUskjY4kl5S6W7HE7xLnth6Md49AOoiSf4FLkLjriPyenljIgR"
  
  //var url = "https://api.openweathermap.org/data/2.5/weather?q="+queryLoc+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric" ;
  var url = "https://orion.apiseeds.com/api/music/search/?q="+queryLoc+"&apikey="+apikey ;
  $.get(url, callBackGetSuccess).done(function() {
    console.log("api callback success");
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("\n" + "finished");
  });
}

