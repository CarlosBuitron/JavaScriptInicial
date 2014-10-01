var arrValores = new  Array();

(function () {
    var number = 0;
    do {
        number = prompt("Dime un número");
        if (!isNaN(number)) {
            arrValores.push(number);
        }
    } while (!isNaN(number));
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

var obj = { rmedia: 0 };

function escribir()
{
    alert("La suma total es: " + sumar());
    media.call(obj);
    alert("La media total es: " + obj.rmedia);

}

escribir();