export let puntosTotales = 0;

export const setPuntosTotales = (nuevoPuntosTotales: number) =>
  (puntosTotales = nuevoPuntosTotales);

interface Partida {
  puntosTotales: number;
}

export const partida: Partida = {
  puntosTotales: 0,
};
