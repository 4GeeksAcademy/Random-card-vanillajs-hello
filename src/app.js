/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generarCartaAleatoria() {
  const palos = [
    { nombre: "Corazones", icono: "♥", color: "red" },
    { nombre: "Diamantes", icono: "♦", color: "blue" },
    { nombre: "Tréboles", icono: "♣", color: "green" },
    { nombre: "Picas", icono: "♠", color: "black" }
  ];
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
  const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

  return {
    valor: valorAleatorio,
    palo: paloAleatorio.nombre,
    icono: paloAleatorio.icono,
    colorPalo: paloAleatorio.color
  };
}

function mostrarCartaAleatoria() {
  const carta = generarCartaAleatoria();
  const cartaContainer = document.getElementById("carta-container");
  cartaContainer.innerHTML = `
    <div class="carta">
      <div class="icono-arriba" style="color: ${carta.colorPalo};">${carta.icono}</div>
      <div class="valor">${carta.valor}</div>
      <div class="icono-abajo" style="color: ${carta.colorPalo};">${carta.icono}</div>
    </div>
  `;
}

mostrarCartaAleatoria();

setInterval(mostrarCartaAleatoria, 10000);
