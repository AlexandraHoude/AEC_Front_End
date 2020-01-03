/* Transférer les valeurs Fahrenheit de -40 à 40 en Celsius par tranche de 5. (Celsius = 5/9(fahrenheit-32)) */


for(var f =- 40; f <= 40; f += 5){
    celsius = (5/9) * (f-32);
    document.write(f + " Fahrenheit = " + celsius.toFixed(2) + " Celsius" + "<br>");
}
