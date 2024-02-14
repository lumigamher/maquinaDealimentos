let a = 270;
let b = 340;
let c = 390;

// Monedas de 10, 50 y 100 para dar vueltas

console.log("Escoja el producto: ");
console.log("A vale $270");
console.log("B vale $340");
console.log("C vale $390");

let prod = prompt("Producto: "); // Leer producto

function cambio(x) {
  let smoneda = 0;
  while (smoneda <= x) {
    console.log("Ingrese las monedas: ");
    console.log("La maquina solo recibe monedas de $10 $50 o $100");
    let moneda = parseInt(prompt("Moneda: "));
    if (moneda === 10 || moneda === 50 || moneda === 100) {
      smoneda += moneda;
    } else {
      console.log("La moneda ingresada sera devuelta, ingrese una denominación correcta.");
    }
  }

  let vueltos = smoneda - x;
  while (vueltos > 0) {
    if (vueltos >= 50) {
      console.log("Su cambio es: $50");
      vueltos -= 50;
    } else if (vueltos < 50) {
      console.log("Su cambio es $10");
      vueltos -= 10;
    }
  }
}

if (prod === "a") {
  cambio(a);
} else if (prod === "b") {
  cambio(b);
} else if (prod === "c") {
  cambio(c);
}
