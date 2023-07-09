function calculate(){
    let Temprature= parseFloat(document.getElementById("Degree").value);
    let convertTo = document.getElementById("ConvertTo").value;
    let result;

    if(convertTo === "Celsius"){
        result = Temprature;
    }else if(convertTo === "Fahrenheit"){
        result = (Temprature * 9/5) + 32;
    }else if(convertTo === "Kelvin"){
        result = Temprature + 273.15;
    }

    document.getElementById("result").innerHTML = result.toFixed(2) + " " + convertTo;
}