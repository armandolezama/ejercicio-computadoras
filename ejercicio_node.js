const arregloDePerritos = [
  {
    nombre: 'firulais',
    color: 'blanco',
    edad: 3,
    adoptado: false,
  },
  {
    nombre: 'rodolfo',
    color: 'negro con manchas',
    edad: 5,
    adoptado: false,
  },
  {
    nombre: 'duque',
    color: 'amarillo con blanco',
    edad: 4,
    adoptado: true,
  },
  {
    nombre: 'scooby',
    color: 'gris con negro',
    edad: 2,
    adoptado: false,
  },
  {
    nombre: 'kira',
    color: 'blanco y negro',
    edad: 5,
    adoptado: false,
  },
  {
    nombre: 'lola',
    color: 'blanco',
    edad: 3,
    adoptado: true,
  },
  {
    nombre: 'lobo',
    color: 'gris con negro',
    edad: 2,
    adoptado: false,
  },
  {
    nombre: 'mina',
    color: 'blanco y negro',
    edad: 5,
    adoptado: false,
  },
]

// const unPerrito = arregloDePerritos[7];

// console.log(unPerrito.nombre)
// console.log(unPerrito['valor-con-guiones'])

for(let i = 0; i < arregloDePerritos.length; i++){
  if(arregloDePerritos[i].adoptado){
    console.log(`Hola, soy ${arregloDePerritos[i].nombre} y ya fui adoptado, soy hermoso y soy color ${arregloDePerritos[i].color}`)
  } else {
    console.log(`hola soy ${arregloDePerritos[i].nombre} y tengo ${arregloDePerritos[i].edad}, y soy de color ${arregloDePerritos[i].color}, y quisiera que me adoptaras :D`)
  }
}

// `hola soy ${nombre} y tengo ${edad}, y soy de color ${color}, y quisiera que me adoptaras :D`; //Para los no adoptados
// `Hola, soy ${nombre} y ya fui adoptado, soy hermoso y soy color ${color}` //Para los adoptados

const arregloDeComputadorasAleatorio = [
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
