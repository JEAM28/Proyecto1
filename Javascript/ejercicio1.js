// Roberto = prompt("cuanto dinero tienes Roberto?");

// if (Roberto >= 0.6 && Roberto <= 0.9) {
//   alert("puedes comprar el palito de agua");
// } else if (Roberto >= 1 && Roberto <= 1.5) {
//   alert("puedes comprar el palito de helado de crema");
// } else if (Roberto >= 1.6 && Roberto <= 1.7) {
//   alert(
//     "puedes comprar el Bombon helado marca heladix o el Bombon helado marca helovich"
//   );
// } else if (Roberto >= 1.8 && Roberto <= 2.5) {
//   alert("puedes comprar el el Bombon helado marca helardo");
// } else if (Roberto > 2.6) {
//   alert(
//     "puedes comprar el potecito de helado con confites o el pote de 1/4KG de helado"
//   );
// } else {
//   alert("no te alcanza para un helado");
// }

// Pedro = prompt("cuanto dinero tienes Pedro?");

// if (Pedro >= 0.6 && Pedro <= 0.9) {
//   alert("puedes comprar el palito de agua");
// } else if (Pedro >= 1 && Pedro <= 1.5) {
//   alert("puedes comprar el palito de helado de crema");
// } else if (Pedro >= 1.6 && Pedro <= 1.7) {
//   alert(
//     "puedes comprar el Bombon helado marca heladix o el Bombon helado marca helovich"
//   );
// } else if (Pedro >= 1.8 && Pedro <= 2.5) {
//   alert("puedes comprar el el Bombon helado marca helardo");
// } else if (Pedro > 2.6) {
//   alert(
//     "puedes comprar el potecito de helado con confites o el pote de 1/4KG de helado"
//   );
// } else {
//   alert("no te alcanza para un helado");
// }

// Cofla = prompt("cuanto dinero tienes Cofla?");

// if (Cofla >= 0.6 && Cofla < 1) {
//   alert("puedes comprar el palito de agua");
//   alert("te sobraron " + (Cofla - 0.6));
// } else if (Cofla >= 1 && Cofla < 1.6) {
//   alert("puedes comprar el palito de helado de crema");
//   alert("te sobraron " + (Cofla - 1));
// } else if (Cofla >= 1.6 && Cofla < 1.7) {
//   alert("puedes comprar el Bombon helado marca heladix ");
//   alert("te sobraron " + (Cofla - 1.6));
// } else if (Cofla >= 1.7 && Cofla < 1.8) {
//   alert("puedes comprar el Bombon helado marca helovich");
//   alert("te sobraron " + (Cofla - 1.7));
// } else if (Cofla >= 1.8 && Cofla <= 2.9) {
//   alert("puedes comprar el el Bombon helado marca helardo");
//   alert("te sobraron " + (Cofla - 1.8));
// } else if (Cofla > 2.9) {
//   alert(
//     "puedes comprar el potecito de helado con confites o el pote de 1/4KG de helado"
//   );
//   alert("te sobraron " + (Cofla - 2.9));
// } else {
//   alert("no te alcanza para un helado");
// }

////////////////////////////////////////
// ejercicio 1 martes 06
// let free = false;
// const validarHora = (time) => {
//   let persona = prompt("cuantos años tienes?");
//   if (persona > 18) {
//     if (time >= 2 && time < 7 && free == false) {
//       alert("puedes pasar gratis");
//       free = true;
//     } else {
//       alert(`son las ${time}:00Hs puedes pasar pero debes pagar tu entrada`);
//     }
//   } else {
//     alert("no puedes pasar por que eres menor de edad ");
//   }
// };

// validarHora(22);
// validarHora(24);
// validarHora(2);
// validarHora(19);
// validarHora(21);
// validarHora(5);

// ejercicio 2 martes 06

// let cantidad = prompt("cuantos alumnos son?");
// let alumnosTotales = [];

// for (i = 0; i < cantidad; i++) {
//   alumnosTotales[i] = [prompt("nombre del alumno " + (i + 1)), 0];
// }

// const tomarAsistencia = (nombre, p) => {
//   let presencia = prompt(nombre);
//   if (presencia == "p" || presencia == "P") {
//     alumnosTotales[p][1]++;
//   }
// };

// for (i = 0; i < 30; i++) {
//   for (alumno in alumnosTotales) {
//     tomarAsistencia(alumnosTotales[alumno][0], alumno);
//   }
// }

// for (alumno in alumnosTotales) {
//   let res = `${alumnosTotales[alumno][0]}: <br>
//   _______Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
//   _______Ausencias:<b>${30 - alumnosTotales[alumno][1]}</b>`;
//   if (30 - alumnosTotales[alumno][1] > 18) {
//     res += "<b> REPROBADO POR INASISTENSIAS</b><br><br>";
//   } else {
//     res += "<br><br>";
//   }
//   document.write(res);
// }

////////////////////////////////////
// EJERCICIO 1 JUEVES 08

class celular {
  constructor(color, peso, rdp, rdc, mRam) {
    (this.color = color),
      (this.peso = peso),
      (this.rdp = rdp),
      (this.rdc = rdc),
      (this.mRam = mRam),
      (this.encendido = false);
  }
  encender() {
    if (this.encendido == false) {
      alert("el celular esta prendido");
      this.encendido = true;
    } else {
      alert("celular apagado");
    }
  }

  reiniciar() {
    if (this.encendido == true) {
      alert("deseas reiniciar el celular?");
    } else {
      alert("celular apagado");
    }
  }
  tomarFoto() {
    alert(`foto tomada en resolucion de: ${this.rdc} `);
  }
  grabarVideo() {
    alert(`estas grabando un video en ${this.rdc}`);
  }

  mostrarInfo() {
    return `
    Color: <b>${this.color}</b> <br>
    Peso: <b>${this.peso}</b> <br>
    Resolucion de camara: <b>${this.rdc}</b> <br>
    tamaño: <b>${this.rdp}</b> <br>
    Memoria Ram: <b>${this.mRam}</b> <br>`;
  }
}

celular1 = new celular("azul", "80g", "6'", "1080p", "4gb");
// celular1.encender();
// celular1.reiniciar();
// celular1.tomarFoto();
// celular1.grabarVideo();
// document.write(celular1);
celular2 = new celular("rojo", "80g", "5'", "1080p", "4gb");
celular3 = new celular("negro", "80g", "6.5'", "1080p", "4gb");
document.write(
  `sansumg <br>${celular1.mostrarInfo()}<br>
  iphone <br>${celular2.mostrarInfo()}<br>
  xiaomi<br>${celular3.mostrarInfo()}<br>`
);
