// const personas = ["juan", "Laura", "Ger", "Di", "t"]
// const [per1,per2,per3,per4,per5] = personas
// console.log(per4);
// // solo a Ger
// const [, , nombrepersona] = personas
// console.log(nombrepersona)

// const miFunction = () => ["ABC", 123]
// const restultFunction = miFunction()
// const [ejemplo] = restultFunction
// console.log(ejemplo); // returns ABC
// console.log( ejemplo, ejemplo); // returns ABC 123

// const useState = (valorInicial) => [valorInicial, () => console.log("Hola Que tal")]
// const resultados = useState("gOKO")
// console.log(resultados)
// Dado el siguiente objeto:

const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
// Extrae la empleada Ana con todos sus datos personales:

const { name, email } = empleados[1];
console.log({ name, email });

// Extrae el email del empleado Luis --> Luis@gmail.com
const { name: nombre, email: emaill } = empleados[0];
console.log({ emaill });

// Usa la desestructuración para intercambiar los valores de a y b
// Inicialmente
let a = 5;
let b = 3;
// Al final
//let a = 3;
//let b = 5;

[a, b] = [b, a];
console.log([a, b]);

//2. Ejercicios spread/rest
// Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de
// números y devuelva la suma de todos los demás argumentos.
//const sumEveryOther = sentenceElements.reduce((a, b) => a + b);

const sumEveryOther = (...args1) => {
  let sum = 0;
  for (let i = 0; i < args1.length; i++) {
    sum += args1[i];
  }
  return sum;
};

console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

// Escribe una función llamada addOnlyNums que pueda recibir cualquier número de
// argumentos (incluyendo números y strings y retorne la suma solo de los números.

//const addOnlyNums = (...argumentos) => {
//argumentos.filter(function argumentos)
//if(typeof argumentos === "number")
//argumentos.reduce((curr, next) => curr + next);
//return += argumentos;
//}
//console.log(addOnlyNums);

//const addOnlyNums = (...argumentos) => {
  // let onlyNumbers = argumentos.filter(function(argumento){
  //   return typeof(argumento) == "number");});

  //   let onlyNumbers = argumentos.filter(function(argumento){
  //     return typeof(argumento) == "number");

  //    onlyNumbers.reduce((curr, next) => curr + next);
  //   });
  // let onlyNumbers = argumentos.filter(function (argumento) {
  //   return typeof argumento == "number";
  // });
  // onlyNumbers.reduce((curr, next) => curr + next);
  // return onlyNumbers ;
//};





function addOnlyNumbers(...argumentos) {
  let onlyNumbers = argumentos.filter(function (argumento) {
     return typeof (argumento) == "number"; });
  return onlyNumbers.reduce((curr, next) => curr + next);
}

console.log(addOnlyNumbers("Hola", 2, 3, "adios", 2));
console.log(addOnlyNumbers(1, "perro", 2, 4)); //7


// Escribe una función llamada countTheArgs que pueda recibir cualquier número de 
//argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...args) => {
  return args.length;
}
console.log(countTheArgs('gato', 'perro')); //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')); //4


// Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos
// y devuelva solo un array que combine los dos (usando spread operator).


function combineTwoArrays(array1, array2) {
  return [...array1, ...array2];
}
console.log(combineTwoArrays([1,2,3,4],["apple","Banana","cherry","durian"]));

const combineArray = (arr1, arr2) => {
 return [...arr1,...arr2];
}
console.log(combineArray([1,2,3,4],["apple","Banana","cherry","durian"]));

console.log(combineTwoArrays([1,2,3,4],["apple","Banana","cherry","durian"]));

// 3. Extras
// Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
///const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;


// Cambiar las siguientes líneas para guardar desestructurando los valores de 
// temperaturas en las variables maximaHoy y maximaManana

const { yesterday, today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES  /// research this more

console.log(maximaHoy)
console.log(maximaManana)
//Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva
// un array de elementos únicos, sin repetidos.
//onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'); 
//['gato', 'pollo', 'cerdo']
//onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
 
 const onlyUniques = (...args) => { const differentArray = new Set(args);
  return differentArray; 
 }
//   //unique.filter((unique  )
//   let newList = [];
//   for (let i = 0; i < unique.length; i++) {
//     if ( unique[i] === unique[i]){
// newList.push(unique)
//     }
//     return newList;
// }
// }
console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]
 console.log(onlyUniques( 1,12,1,12,3,5));


 //Escriba una función llamada combineAllArrays que pueda recibir cualquier 
 //cantidad de arrays como argumentos y los combine todos en un solo array.

 const combineAllArrays = (arr1, ...arr) => { 
   const finalArray = (arr1.concat(...arr));
  return finalArray
 }
 
console.log(combineAllArrays([3, 6, 7, 8],[2, 7, 3, 1]));

const combineAllArrays2 = (...arr) => { // different way
  const finalArray = ([].concat(...arr));
  
  return finalArray;
}
console.log(combineAllArrays2([3, 6, 7, 8],[2, 7, 3, 1]));
//  // [3, 6, 7, 8, 2, 7, 3, 1]
//  combineAllArrays([2, 7, 3, 1],[2, 7, 4, 12],[2, 44, 22, 7, 3, 1]);
//  // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]
 
//Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, 
//los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

  const sumAndSquare = (...bumbers) => {
  const squaredNumbers = bumbers.map(bumbers => bumbers ** 2)
  const finalfinal = squaredNumbers.reduce((a,b)=> a + b)
  return finalfinal; 
  }

  console.log(sumAndSquare(2,3));

// const doubleandSquareandSum = arr => arr.reduce((a, num) => a + ((2 * num) ** 2), 0);














// const onlyUniques = (...args) => { const ArrayUnica = new Set(args); return ArrayUnica }
// console.log(onlyUniques('gato', 'pollo', 'cerdo', 'cerdo'));
// // //['gato', 'pollo', 'cerdo']
// console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]