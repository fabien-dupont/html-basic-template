
var callBackGetSuccess = function(data) { 
  var element = document.getElementById("zone_api_result");
  console.log(data.result);
 element.innerHTML = data.result;
}

function buttonClickGET(){
  var queryRequete = document.getElementById("queryRequete").value;
  var apikey = "f9fhsIyi2W9sBfBUskjY4kl5S6W7HE7xLnth6Md49AOoiSf4FLkLjriPyenljIgR"
  
  var url = "https://apiprovider.com/api/dir/search/?q="+queryRequete+"&apikey="+apikey ;
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

