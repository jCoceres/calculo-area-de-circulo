

let radio = parseInt(prompt( 'Indica el radio en cm')); 
console.log("Indica el radio en cm")
const pi = Math.PI;    
let areaCirculo;

if ( radio >= 0 ) {

    if ( radio > 100 ) {

        alert('El rango supera la capacidad de cálculo, debe elegir un valor entre 0 y 100');
        radio = parseInt(prompt( 'Indica el radio en cm'));   
        areaCirculo = parseInt(( radio ** 2 ) * pi);

    } else

        areaCirculo = parseInt(( radio * radio ) * pi);

} else {

    alert('El radio no es valido, ingrese un valor entre');
    radio = parseInt(prompt( 'Indica el radio en cm'));   
    areaCirculo = parseInt(( radio * radio ) * pi);
}

areaCirculo = `El Area de la circunferencia es: ${areaCirculo} cm^2. `
document.write(areaCirculo);
alert(areaCirculo);




