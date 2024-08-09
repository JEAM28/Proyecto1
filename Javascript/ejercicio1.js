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

// class celular {
//   constructor(color, peso, rdp, rdc, mRam) {
//     (this.color = color),
//       (this.peso = peso),
//       (this.rdp = rdp),
//       (this.rdc = rdc),
//       (this.mRam = mRam),
//       (this.encendido = false);
//   }
//   encender() {
//     if (this.encendido == false) {
//       alert("el celular esta prendido");
//       this.encendido = true;
//     } else {
//       alert("celular apagado");
//     }
//   }

//   reiniciar() {
//     if (this.encendido == true) {
//       alert("deseas reiniciar el celular?");
//     } else {
//       alert("celular apagado");
//     }
//   }
//   tomarFoto() {
//     alert(`foto tomada en resolucion de: ${this.rdc} `);
//   }
//   grabarVideo() {
//     alert(`estas grabando un video en ${this.rdc}`);
//   }

//   mostrarInfo() {
//     return `
//     Color: <b>${this.color}</b> <br>
//     Peso: <b>${this.peso}</b> <br>
//     Resolucion de camara: <b>${this.rdc}</b> <br>
//     tamaño: <b>${this.rdp}</b> <br>
//     Memoria Ram: <b>${this.mRam}</b> <br>`;
//   }
// }

// celular1 = new celular("azul", "80g", "6'", "1080p", "4gb");
// celular2 = new celular("rojo", "80g", "5'", "1080p", "4gb");
// celular3 = new celular("negro", "80g", "6.5'", "1080p", "4gb");
// document.write(
//   `samsung <br>${celular1.mostrarInfo()}<br>
//   iphone <br>${celular2.mostrarInfo()}<br>
//   xiaomi<br>${celular3.mostrarInfo()}<br>`
// );

//EJERCICIO 2

class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }

  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("app abierta");
    }
  }
  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("la app se a cerrado");
    }
  }
  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("la app se ha instalado correctamente");
    }
  }
  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("la app se ha desinstalado correctamente");
    }
  }
  appInfo() {
    return `
    descargas:<b>${this.descargas}</b><br>
    puntuacion:<b>${this.puntuacion}</b><br>
    peso:<b>${this.peso}</b><br>`;
  }
}

app1 = new App("10.000", "***", "180mb");
app2 = new App("15.000", "****", "170mb");
app3 = new App("112.000", "*****", "50mb");
app4 = new App("11.000", "****", "132mb");
app5 = new App("18.000", "****", "112mb");
app6 = new App("30.000", "****", "110mb");
app7 = new App("45.000", "****", "190mb");

// app1.instalar();
// app1.abrir();
// app1.cerrar();
// app1.desinstalar();

document.write(
  `FACEBOOK <br> ${app1.appInfo()}<br>
  MESSENGE <br> ${app2.appInfo()}<br>
  WHATSAPP <br> ${app3.appInfo()}<br>
  YOUTUBE <br> ${app4.appInfo()}<br>
  NETFLIX <br> ${app5.appInfo()}<br>
  INSTAGRAM <br> ${app6.appInfo()}<br>
  TIKTOK <br> ${app7.appInfo()}<br>
  `
);
