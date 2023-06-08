import "./style.css";
import { setPuntosTotales } from "./model";
import {
  generarNumeroAleatorio,
  generarValorCarta,
  calcularPuntuacion,
} from "./motor";
import { cargarPartida, pintarUrlCarta, finalMano } from "./ui";

// FUNCIÓN PRINCIPAL
export function dameCarta() {
  let numeroAleatorio: number = generarNumeroAleatorio();
  const carta: number = generarValorCarta(numeroAleatorio);
  pintarUrlCarta(carta);
  const puntos = calcularPuntuacion(carta);
  setPuntosTotales(puntos);
  finalMano();
}

document.addEventListener("DOMContentLoaded", cargarPartida);
