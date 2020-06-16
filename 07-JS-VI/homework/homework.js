// Do not change any of the function names

function invocarCallback(cb) {
  // Invoca al callback `cb`
 return cb()
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada 
  /*
  let suma = 0
  numeros.forEach(element => {
    suma += element
  });
  return cb(suma)
  */
  cb(numeros.reduce(function (a, e){
    return a + e
  }))
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  let listNumber = 0
  array.forEach(element => {
    listNumber = cb(element)
  });
  return listNumber
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //return array.map(e => cb(e))
  let arregloNuevo = []
  array.map(function(e, i){
    arregloNuevo[i] = cb(e)
  })
  return arregloNuevo
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  sumarArray,
  forEach,
  map,
};
