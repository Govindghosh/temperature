
document.getElementById("Submit").onclick = function () {

let temp;
if(document.getElementById("tocelsius").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = tocelsius(temp);
    document.getElementById("result").innerHTML = temp + "°C";
}
else if(document.getElementById("toFahrenheit").checked){
    temp = document.getElementById("textBox").value;
    temp = Number(temp);
    temp = toFahrenheit(temp);
    document.getElementById("result").innerHTML = temp + "°f";
}
else{
    document.getElementById("result").innerHTML = " Select a unit";
}



}
// let temp = 32;
function tocelsius(temp){
    return(temp - 32) * (5/9);
}
function toFahrenheit(temp){
    return(temp * (9/5)) + 32;
    
}