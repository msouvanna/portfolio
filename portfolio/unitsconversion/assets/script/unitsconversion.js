function calculate(){
    "use strict";

     /* Make sure that the form is valid */
     if ($( "#myform" ).valid()) {

         /* get the operands from the form */
         var fromValue = document.getElementById("FromVal").value;

        /* convert the operands from string to floating point */
        var fromValuefp = parseFloat (fromValue);

        //From Unit
        /* figure out which From Unit was checked and place the value in operator */
        var fromUnit;
        if (document.getElementById("cmFrom").checked) {
            fromUnit = document.getElementById("cmFrom").value;
        }
        if (document.getElementById("meterFrom").checked) {
            fromUnit = document.getElementById("meterFrom").value;
        }
        if (document.getElementById("kmFrom").checked) {
            fromUnit = document.getElementById("kmFrom").value;
        }
        if (document.getElementById("inFrom").checked) {
            fromUnit = document.getElementById("inFrom").value;
        }
        if (document.getElementById("ftFrom").checked) {
            fromUnit = document.getElementById("ftFrom").value;
        }
        if (document.getElementById("ydFrom").checked) {
            fromUnit = document.getElementById("ydFrom").value;
        }
        if (document.getElementById("miFrom").checked) {
            fromUnit = document.getElementById("miFrom").value;
        }

        //To Unit
        /* figure out which To Unit was checked and place the value in operator */
        var toUnit;
        if (document.getElementById("cmTo").checked) {
            toUnit = document.getElementById("cmTo").value;
        }
        if (document.getElementById("meterTo").checked) {
            toUnit = document.getElementById("meterTo").value;
        }
        if (document.getElementById("kmTo").checked) {
            toUnit = document.getElementById("kmTo").value;
        }
        if (document.getElementById("inTo").checked) {
            toUnit = document.getElementById("inTo").value;
        }
        if (document.getElementById("ftTo").checked) {
            toUnit = document.getElementById("ftTo").value;
        }
        if (document.getElementById("ydTo").checked) {
            toUnit = document.getElementById("ydTo").value;
        }
        if (document.getElementById("miTo").checked) {
            toUnit = document.getElementById("miTo").value;
        }
      
        CalculateResult(fromValuefp, fromUnit, toUnit);

     }
}

async function CalculateResult(fromValuefp, fromUnit, toUnit) {
        // ;P
    // URL and method used with AJAX Call
    var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
    myURL = myURL + "?FromValue=" + encodeURIComponent(fromValuefp) + "&FromUnit=" + encodeURIComponent(fromUnit) + "&ToUnit=" + encodeURIComponent(toUnit);

    /* fetch the results */
    let myCalcObject = await fetch(myURL);
    let myResult = await myCalcObject.text();
    
    document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
    "use strict";
    
    /* Set all of the form values to blank or false */
    document.getElementById("FromVal").value = "";
    document.getElementById("FromValMsg").innerHTML = "";

    document.getElementById("cmFrom").checked = false;
    document.getElementById("meterFrom").checked = false;
    document.getElementById("kmFrom").checked = false;
    document.getElementById("inFrom").checked = false;
    document.getElementById("ftFrom").checked = false;
    document.getElementById("ydFrom").checked = false;
    document.getElementById("miFrom").checked = false;
    document.getElementById("FromUnMsg").innerHTML = "";

    document.getElementById("cmTo").checked = false;
    document.getElementById("meterTo").checked = false;
    document.getElementById("kmTo").checked = false;
    document.getElementById("inTo").checked = false;
    document.getElementById("ftTo").checked = false;
    document.getElementById("ydTo").checked = false;
    document.getElementById("miTo").checked = false;
    document.getElementById("ToUnMsg").innerHTML = "";

    document.getElementById("Result").innerHTML = "";
}

$( "#myform" ).validate({

});