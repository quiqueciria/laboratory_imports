import "./style.css";

let puntosTotales = 0;

// GENERAR VALOR
const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 10) + 1;

// FUNCIÓN PRINCIPAL
function dameCarta() {
  let numeroAleatorio: number = generarNumeroAleatorio();
  const carta: number = generarValorCarta(numeroAleatorio);
  pintarUrlCarta(carta);
  const puntos = calcularPuntuacion(carta);
  setPuntos(puntos);
  finalMano();
}

// TERMINAR PARTIDA
function finalMano() {
  mostrarMensaje(puntosTotales);
  revisarMano();
}

// EMPEZAR PARTIDA
function resetPartida() {
  habilitarBotonDameCarta(false);
  resetPuntuacion();
  verMensaje("");
  habilitarBotonQueHubieraPasado(true);
}

// MOSTRAR MENSAJE DE PUNTUACIÓN SOLO
function mostrarMensaje(puntos: number) {
  const elementoPuntuacion = document.getElementById("puntuacion");

  if (elementoPuntuacion && elementoPuntuacion instanceof HTMLElement) {
    elementoPuntuacion.innerHTML = `${puntos} es la puntuación`;
  }
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

// GANAR PARTIDA
function ganarPartida() {
  verMensaje("Enhorabuena has ganado la partida");
}
// GAME OVER
function perderPartida() {
  verMensaje("Game Over");
  habilitarBotonDameCarta(true);
}

// PLANTARSE
function plantarse() {
  habilitarBotonDameCarta(true);
  mensajePlantarse();
  habilitarBotonQueHubieraPasado(false);
}

//VER MENSAJES DE PLANTARSE
function verMensaje(mensaje: string) {
  const gameOverDiv = document.getElementById("resultado");

  if (gameOverDiv !== null && gameOverDiv !== undefined) {
    gameOverDiv.innerHTML = mensaje;
  }
}

// MENSAJE PLANTARSE
function mensajePlantarse() {
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

// GENERAR VALOR CARTA
function generarValorCarta(valorAleatorio: number) {
  return valorAleatorio > 7 ? valorAleatorio + 2 : valorAleatorio;
}

// CALCULAR PUNTUACIÓN
function calcularPuntuacion(carta: number) {
  return carta < 7 ? puntosTotales + carta : puntosTotales + 0.5;
}

// RECIBIR VALORES SUMADOS Y AÑADIR A PUNTOS TOTALES
function setPuntos(puntos: number) {
  puntosTotales = puntos;
}

// PUNTUACIÓN A CERO OTRA VEZ
function resetPuntuacion() {
  puntosTotales === 0;
  mostrarMensaje((puntosTotales = 0));
  pintarUrlCarta(0);
}

function habilitarBotonDameCarta(estaHabilitado: boolean) {
  const habilitarBoton = document.getElementById("botonDameCarta");

  if (habilitarBoton && habilitarBoton instanceof HTMLButtonElement) {
    habilitarBoton.disabled = estaHabilitado;
  }
}

function habilitarBotonQueHubieraPasado(estaHabilitado: boolean) {
  const habilitarBoton = document.getElementById("botonFuturo");

  if (habilitarBoton && habilitarBoton instanceof HTMLButtonElement) {
    habilitarBoton.disabled = estaHabilitado;
  }
}

//MOSTRAR LAS CARTAS Y ASIGNARLE EL VALOR
function obtenerUrlCarta(cartaGenerada: number) {
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

function pintarUrlCarta(carta: number) {
  const urlCarta = obtenerUrlCarta(carta);

  const imgElemento = document.getElementById("cartas");
  imgElemento && imgElemento instanceof HTMLImageElement
    ? (imgElemento.src = urlCarta)
    : console.log("Esto da error");
}

function cargarPartida() {
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
document.addEventListener("DOMContentLoaded", cargarPartida);
