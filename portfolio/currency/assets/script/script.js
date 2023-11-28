async function GetResults() {
    "use strict";

    var form = $("#myform");
    form.validate();

    if (form.valid()){
        var baseCurrency = document.getElementById("baseCurr").value;
        var toCurrency = document.getElementById("toCurr").value;
        var apiKey = "60361yjkwbFoJ7qx1x3XXTJbSnwe1R7c"
        var fromDate = document.getElementById("FromDate").value;
        var toDate = document.getElementById("ToDate").value;

        /* URL for AJAX Call */
        var myURL1 = "https://api.polygon.io/v2/aggs/ticker/C:" + baseCurrency + toCurrency + "/range/1/day/" + fromDate + 
        "/" + toDate + "?adjusted=true&sort=asc&limit=120&apiKey=" + apiKey;

        var msg1Object = await fetch(myURL1);
        var msg1JSONText = await msg1Object.text();
        var msg1 = JSON.parse(msg1JSONText);

        var currencyDate = [];
        var currencyValue = [];
        var numDays = msg1.results.length;
        
        if (numDays > 0) {
            for (var i = 0; i < numDays; i++) {
                currencyValue[i] = msg1.results[i].c;
                /* date is in Unix milleseconds - create a temporary date variable */        
                var tempdate = new Date(msg1.results[i].t);
                /* extract the date string from the value */
                currencyDate[i] = tempdate.toLocaleDateString();
            }
        } else {
            alert("currency Not Found - Status: " + msg1Object.status)
            return;      
        }
        var ctx0 = document.getElementById("myChart");
        var myChart = new Chart(ctx0, {
            "type":"line",
            "data": {
                "labels": currencyDate,
                "datasets":[
                    {
                    "label":"One " + baseCurrency + " to " + toCurrency,
                    "data": currencyValue,
                    "fill": false,
                    "borderColor":"green",
                    "lineTension":0.1
                    }
                ]
            },
                }
        );
    }   

}
function ClearForm() {
    document.getElementById("baseCurr").value = "";
    document.getElementById("toCurr").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";

    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("myChart");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
}
