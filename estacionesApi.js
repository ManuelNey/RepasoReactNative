import { detallesLugares, lugaresUbicacion } from "../constants/estaciones";

export async function fetchObtenerEstaciones() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(lugaresUbicacion);
    }, 800); // simula latencia de red
  });
}

export async function fetchDetallesEstacion(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const estacionDetalle = detallesLugares.find(
        (estacion) => estacion.id === id,
      );
      resolve(estacionDetalle);
    }, 800); // simula latencia de red
  });
}
