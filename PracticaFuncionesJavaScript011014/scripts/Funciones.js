var arrValores = new  Array();

(function () {
    var number = 0;
    do {
        number = prompt("Dime un número");
        if (!isNaN(number)) {
            arrValores.push(number);
        }
    } while (!isNaN(number));

    var obj = { rmedia: 0 };
    escribir();

})();

function sumar() {
    var result = 0;
    for (var i = 0; i < arrValores.length; i++) {
        result = result + parseInt(arrValores[i]);
    }
    return result;
}

function media() {
    this.rmedia = sumar() / arrValores.length;
    
}

function escribir()
{
    alert("La suma total es: " + sumar());
    media.call(obj);
    alert("La media total es: " + obj.rmedia);
}