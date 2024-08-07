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

let free = false;
const validarHora = (time) => {
  let persona = prompt("cuantos años tienes?");
  if (persona > 18) {
    if (time >= 2 && time < 7 && free == false) {
      alert("puedes pasar gratis");
      free = true;
    } else {
      alert(`son las ${time}:00Hs puedes pasar pero debes pagar tu entrada`);
    }
  } else {
    alert("no puedes pasar por que eres menor de edad ");
  }
};

validarHora(22);
validarHora(24);
validarHora(2);
validarHora(19);
validarHora(21);
validarHora(5);
