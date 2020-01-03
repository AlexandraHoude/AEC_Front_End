/* Transférer les valeurs Fahrenheit de 10 à 20 en Celsius par tranche de 1.  */

for(var f = 10; f <= 20; f++){
    celsius = (5/9) * (f-32);
    document.write(f + " Fahrenheit = " + celsius.toFixed(2) + " Celsius" + "<br>");
}