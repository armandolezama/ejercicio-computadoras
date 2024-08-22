/*const arregloDeComputadorasAleatorio = [
  { marca: 'apple',
    color: 'rojo',
    ram: 64,
    discoDuro: 1000,
    so: 'windows',
    funciona: true },
  { marca: 'lenovo',
    color: 'rojo',
    ram: 32,
    discoDuro: 2000,
    so: 'windows',
    funciona: false },
  { marca: 'microsoft',
    color: 'gris',
    ram: 64,
    discoDuro: 500,
    so: 'Linux Mint',
    funciona: true },
  { marca: 'dell',
    color: 'blanco',
    ram: 8,
    discoDuro: 500,
    so: 'Linux Mint',
    funciona: false },
  { marca: 'dell',
    color: 'azul',
    ram: 64,
    discoDuro: 2000,
    so: 'macOS',
    funciona: true },
  { marca: 'dell',
    color: 'azul',
    ram: 32,
    discoDuro: 1000,
    so: 'Linux Mint',
    funciona: true },
  { marca: 'dell',
    color: 'rojo',
    ram: 64,
    discoDuro: 1000,
    so: 'Fedora',
    funciona: true },
  { marca: 'hp',
    color: 'azul',
    ram: 8,
    discoDuro: 500,
    so: 'Fedora',
    funciona: false },
  { marca: 'dell',
    color: 'gris',
    ram: 64,
    discoDuro: 4000,
    so: 'windows',
    funciona: true },
  { marca: 'lenovo',
    color: 'gris',
    ram: 32,
    discoDuro: 2000,
    so: 'windows',
    funciona: false },
  { marca: 'lenovo',
    color: 'azul',
    ram: 16,
    discoDuro: 4000,
    so: 'macOS',
    funciona: true },
  { marca: 'apple',
    color: 'gris',
    ram: 64,
    discoDuro: 1000,
    so: 'Fedora',
    funciona: false },
  { marca: 'hp',
    color: 'azul',
    ram: 32,
    discoDuro: 2000,
    so: 'Fedora',
    funciona: true },
  { marca: 'dell',
    color: 'azul',
    ram: 8,
    discoDuro: 4000,
    so: 'Linux Mint',
    funciona: true },
  { marca: 'hp',
    color: 'rojo',
    ram: 8,
    discoDuro: 1000,
    so: 'macOS',
    funciona: true },
  { marca: 'apple',
    color: 'negro',
    ram: 64,
    discoDuro: 2000,
    so: 'Fedora',
    funciona: true },
  { marca: 'lenovo',
    color: 'blanco',
    ram: 8,
    discoDuro: 4000,
    so: 'macOS',
    funciona: false },
  { marca: 'lenovo',
    color: 'negro',
    ram: 32,
    discoDuro: 4000,
    so: 'Ubuntu',
    funciona: true },
  { marca: 'hp',
    color: 'blanco',
    ram: 8,
    discoDuro: 500,
    so: 'macOS',
    funciona: false },
  { marca: 'apple',
    color: 'azul',
    ram: 64,
    discoDuro: 2000,
    so: 'Ubuntu',
    funciona: false
  }
];

for (let i = 0; i < arregloDeComputadorasAleatorio.length; i++){
  console.log (arregloDeComputadorasAleatorio[i])
}

for (let i = 0; i < arregloDeComputadorasAleatorio.length; i++){
  if (arregloDeComputadorasAleatorio[i].discoDuro >= 500 && arregloDeComputadorasAleatorio[i].funciona){
    console.log(`Esta computadora cumple los requisitos ${arregloDeComputadorasAleatorio[i].discoDuro}y si funciona${arregloDeComputadorasAleatorio[i].funciona}`)
  }
}

/* indice 1, indice2, indice3, indice7, indice 19 */


/*function filtrarComputadoras (computadoras, gigasRequeridos){
  let resultado =[];
  for (let i = 0; i < computadoras.length; i++){
    console.log(computadoras[i].discoDuro)
    console.log(computadoras[i].discoDuro >= gigasRequeridos)
    console.log(computadoras[i].funciona)
    if(computadoras[i].discoDuro >= gigasRequeridos && computadoras[i].funciona)
      resultado.push(computadoras[i]);
  }
  return resultado;
}
  let a = elOdiosoArreglo[resultado]
let b = elOdiosoArreglo[resultado+1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)
 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado+1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

console.log(filtrarComputadoras(arregloDeComputadorasAleatorio,600))

function filtrarComputadorasDos (computadoras, sistemaOperativo){
  let resultado =[];
  for(let i =0; i < computadoras.length; i++){
    if(computadoras[i].so === sistemaOperativo && computadoras[i].funciona)
      resultado.push(computadoras[i]);
  }
return resultado;
  }

 console.log(filtrarComputadorasDos(arregloDeComputadorasAleatorio, 'macOS'))
*/

const elOdiosoArreglo=[3, 8, 21, 62, 9, 194, 76, 5, 29]
 const determinarSiEstaOrdenado = function (arreglo) {
  for (let i = 0; i < arreglo.length - 1; i++) {
    if (arreglo[i] > arreglo[i + 1]) {
      return i
    }
  }
  return true
}
  
let resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

let a = elOdiosoArreglo[resultado]
let b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

  
resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

 
resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)
resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

 a = elOdiosoArreglo[resultado]
 b = elOdiosoArreglo[resultado + 1]
elOdiosoArreglo[resultado] = b
elOdiosoArreglo[resultado+1] = a
console.log(elOdiosoArreglo)

resultado = determinarSiEstaOrdenado(elOdiosoArreglo)
console.log(resultado)

//Construir una función que, cuando reciba un número, retorne true, pero cuando reciba un true, retorne false


//console.log(funcionEvaluadora(5))
//Se espera un true

//console.log(funcionEvaluadora(2000))
//Se espera un true

//console.log(funcionEvaluadora(true))
//Se espera un false 


function retornar (valor){
  return typeof valor === "number"
}

function ordenarArreglo (arreglo){
  let segundoResultado = determinarSiEstaOrdenado(arreglo)
while(retornar(segundoResultado)){
  a = arreglo[segundoResultado]
  b =arreglo[segundoResultado+1]
  arreglo[segundoResultado]=b
  arreglo[segundoResultado + 1]=a 
  segundoResultado=determinarSiEstaOrdenado(arreglo)
}
return arreglo
}
const elHermosoArreglo = ordenarArreglo([43,13,56,87,65,235,2,45,65,789,987,7,34])
console.log(elHermosoArreglo)
