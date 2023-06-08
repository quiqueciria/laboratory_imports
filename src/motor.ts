import { puntosTotales } from "./model";

// GENERAR VALOR
export const generarNumeroAleatorio = (): number =>
  Math.floor(Math.random() * 10) + 1;

// GENERAR VALOR CARTA
export function generarValorCarta(valorAleatorio: number) {
  return valorAleatorio > 7 ? valorAleatorio + 2 : valorAleatorio;
}

// CALCULAR PUNTUACIÓN
export function calcularPuntuacion(carta: number) {
  return carta < 7 ? puntosTotales + carta : puntosTotales + 0.5;
}
