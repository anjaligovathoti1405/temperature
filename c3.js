function convertTemp(){

let temp = document.getElementById("tempInput").value;
let unit = document.getElementById("unit").value;
let result;

if(temp === ""){
document.getElementById("result").innerHTML = "Please enter a temperature";
return;
}

if(unit === "cToF"){
result = (temp * 9/5) + 32;
document.getElementById("result").innerHTML =
temp + " °C = " + result.toFixed(2) + " °F";
}
else{
result = (temp - 32) * 5/9;
document.getElementById("result").innerHTML =
temp + " °F = " + result.toFixed(2) + " °C";
}

}
