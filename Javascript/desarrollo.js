// alert("hola mundo");

// let nombre = prompt("cual es tu nombre");
// console.log(nombre);

// alert("hola " + nombre + " como estas}?");

// let numero = 10;
// numero **= 5;
// document.write(numero);

// let num = 35;
// let num2 = 35;
// document.write(num != num2);

// let estudiantes = {
//   nombre: "Jesus",
//   apellido: "angarita",
//   edad: "22",
//   instituto: "Henry",
//   modulo: 4,
// };

// let nombre = estudiantes["nombre"];
// let apellido = estudiantes["apellido"];
// let edad = estudiantes["edad"];
// let instituto = estudiantes["instituto"];
// let modulo = estudiantes["modulo"];

// estudiantes = `el estudiante ${nombre}  ${apellido} <br>
// tiene ${edad} años <br>
// estudia en ${instituto} <br>
// y cursa el modulo ${modulo} `;

// document.write(estudiantes);

///////////////////////////////////////////////////////////
// array1 = ["carlos", "mirian", "karime", "lizbeth"];
// array2 = ["belen", "nelson", "sebas", array1, "arian"];

// forR: for (let array in array2) {
//   if (array == 3) {
//     for (let array of array1) {
//       if (array == "karime") {
//         continue;
//       }
//       document.write(array + "<br>");
//     }
//   } else {
//     document.write(array2[array] + "<br>");
//   }
// }
/////////////////////////////////////////////
// funciones normales
// function saludar(saludo, nombre) {
//   let saludos = saludo + nombre;
//   document.write(saludos + "<br>");
// }

// saludar("hola", " jesus");
// saludar(5, 38);

// saludar = function(saludo, nombre) {
//   let saludos = saludo + nombre;
//   document.write(saludos + "<br>");
// }

// saludar("hola", " jesus");
// saludar(5, 38);

// funcion flecha

// const saludar = (nombre) => {
//   document.write(`hola ${nombre} como estas?`);
// };
// saludar("Jesus");

const validarHora = (time) => {
  let persona = prompt("cuantos años tienes?");
  if (persona >= 18) {
    alert("puedes pasar");
  } else {
    alert("no puedes pasar por que eres menor de edad ");
  }
};
