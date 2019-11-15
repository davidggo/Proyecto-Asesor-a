let elements = document.getElementsByClassName('card-basic'); Array.prototype.forEach.call(elements, function(elements){
    elements.innerHTML = 'Incluye:'
});
let data = document.getElementsByClassName('li-basic-1'); Array.prototype.forEach.call(data, function(data){
    data.innerHTML = 'Acceso directo a todos los cursos.'
});
let object = document.getElementsByClassName('li-basic-2'); Array.prototype.forEach.call(object, function(object){
    object.innerHTML = 'Acceso a recomendar cursos en el futuro!'
});
let asset = document.getElementsByClassName('li-basic-3'); Array.prototype.forEach.call(asset, function(asset){
    asset.innerHTML = 'La habilidad de descargar qualquier curso desde su smartphone of computadora!'
});
document.getElementById('li-family').innerHTML = 'Hasta 3 cuentas con un solo pago!'