var valores = [true, 5, false, "hola", "adios", 2];
var numeros = [];
var palabras = [];
var verdad = [];

for (var i = 0; i < valores.length; i++) {
    switch (typeof(valores[i])) {
        case 'number':
            numeros.push(valores[i]);
            break;
        case 'boolean': 
            verdad.push(valores[i]);
            break;
        case 'string':
            palabras.push(valores[i]);
            break;
    }
}

var mayor = '';
for (var i = 0; i < palabras.length; i++) {			
    if (palabras[i].length > mayor.length) {
        mayor = palabras[i];
    }
}
alert(`La palabra mayor es ${mayor}`);

// No se como solucionar la resta
var suma = 0;
var resta = 0;

for (var i = 0; i < numeros.length; i++) {
    suma += parseInt(numeros[i]);
    resta -= parseInt(numeros[i]);
}

alert(`La suma es ${suma}`);
alert(`La resta es ${resta}`);

// No se como hacer esto
var o1;
for (var i = 0; i < verdad.length; i++) {

}