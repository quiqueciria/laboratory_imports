import { puntosTotales, setPuntosTotales } from "./model";
import { dameCarta } from "./main";

// EMPEZAR PARTIDA
export function resetPartida() {
  habilitarBotonDameCarta(false);
  resetPuntuacion();
  verMensaje("");
  habilitarBotonQueHubieraPasado(true);
}

// MOSTRAR MENSAJE DE PUNTUACIÓN SOLO
export function mostrarMensaje(puntos: number) {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
    elementoPuntuacion.innerHTML = `${puntos} es la puntuación`;
  }
}

// PLANTARSE
export function plantarse() {
  habilitarBotonDameCarta(true);
  mensajePlantarse();
  habilitarBotonQueHubieraPasado(false);
}

//VER MENSAJES DE PLANTARSE
export function verMensaje(mensaje: string) {
  const gameOverDiv = document.getElementById("resultado");

  if (gameOverDiv !== null && gameOverDiv !== undefined) {
    gameOverDiv.innerHTML = mensaje;
  }
}

// MENSAJE PLANTARSE
export function mensajePlantarse() {
  if (puntosTotales < 4) {
    verMensaje("Has sido muy conservador");
  }
  if (puntosTotales > 3.5 && puntosTotales < 6) {
    verMensaje("Te ha entrado el canguelo eh?");
  }
  if (puntosTotales > 5.5 && puntosTotales < 7.5) {
    verMensaje("Casi, casi...");
  }
  if (puntosTotales === 0) {
    verMensaje("");
  }
}

// PUNTUACIÓN A CERO OTRA VEZ
export function resetPuntuacion() {
  puntosTotales === 0;
  mostrarMensaje(setPuntosTotales(0));
  pintarUrlCarta(0);
}

export function habilitarBotonDameCarta(estaHabilitado: boolean) {
  const habilitarBoton = document.getElementById("botonDameCarta");

  if (habilitarBoton && habilitarBoton instanceof HTMLButtonElement) {
    habilitarBoton.disabled = estaHabilitado;
  }
}

export function habilitarBotonQueHubieraPasado(estaHabilitado: boolean) {
  const habilitarBoton = document.getElementById("botonFuturo");

  if (habilitarBoton && habilitarBoton instanceof HTMLButtonElement) {
    habilitarBoton.disabled = estaHabilitado;
  }
}

//MOSTRAR LAS CARTAS Y ASIGNARLE EL VALOR
export function obtenerUrlCarta(cartaGenerada: number) {
  let urlCarta: string = "";

  switch (cartaGenerada) {
    case 1:
      urlCarta = "/src/img/1_as-copas.jpg";
      break;
    case 2:
      urlCarta = "/src/img/2_dos-copas.jpg";
      break;
    case 3:
      urlCarta = "/src/img/3_tres-copas.jpg";
      break;
    case 4:
      urlCarta = "/src/img/4_cuatro-copas.jpg";
      break;
    case 5:
      urlCarta = "/src/img/5_cinco-copas.jpg";
      break;
    case 6:
      urlCarta = "/src/img/6_seis-copas.jpg";
      break;
    case 7:
      urlCarta = "/src/img/7_siete-copas.jpg";
      break;
    case 10:
      urlCarta = "/src/img/10_sota-copas.jpg";
      break;
    case 11:
      urlCarta = "/src/img/11_caballo-copas.jpg";
      break;
    case 12:
      urlCarta = "/src/img/12_rey-copas.jpg";
      break;
    default:
      urlCarta = "/src/img/back.jpg";
      break;
  }
  return urlCarta;
}

export function cargarPartida() {
  habilitarBotonQueHubieraPasado(true);

  // BOTÓN PLANTARSE
  const botonPlantarse = document.getElementById("mePlanto");
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.addEventListener("click", plantarse);
  }
  //BOTON QUE HUBIERA PASADO
  const botonFuturo = document.getElementById(
    "botonFuturo"
  ) as HTMLButtonElement;

  if (botonFuturo) {
    botonFuturo.addEventListener("click", dameCarta);
  }
  // BOTÓN NUEVA PARTIDA
  const botonNuevaPartida = document.getElementById("nuevaPartida");

  if (botonNuevaPartida) {
    botonNuevaPartida.addEventListener("click", resetPartida);
  }
  if (botonNuevaPartida) {
    botonNuevaPartida.addEventListener("click", mensajePlantarse);
  }
  // BOTÓN DAME CARTA NOS MUESTRA EL VALOR DE LA CARTA Y PASA CARTA
  const botonValor = document.getElementById("botonDameCarta");

  if (botonValor) {
    botonValor.addEventListener("click", dameCarta);
  }
}

export function pintarUrlCarta(carta: number) {
  const urlCarta = obtenerUrlCarta(carta);

  const imgElemento = document.getElementById("cartas");
  imgElemento && imgElemento instanceof HTMLImageElement
    ? (imgElemento.src = urlCarta)
    : console.log("Esto da error");
}

// GANAR PARTIDA
function ganarPartida() {
  verMensaje("Enhorabuena has ganado la partida");
}
// GAME OVER
function perderPartida() {
  verMensaje("Game Over");
  habilitarBotonDameCarta(true);
}

// REVISAR MANO
function revisarMano() {
  if (puntosTotales === 7.5) {
    ganarPartida();
  }
  if (puntosTotales > 7.5) {
    perderPartida();
  }
}
// TERMINAR PARTIDA
export function finalMano() {
  mostrarMensaje(puntosTotales);
  revisarMano();
}
