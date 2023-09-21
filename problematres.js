function calcularTemperaturaMedia(temperaturaMaxima, temperaturaMinima) {
    const temperaturaMedia = (temperaturaMaxima + temperaturaMinima) / 2;
    return temperaturaMedia;
}

const temperaturaMaximaDia1 = 60; 
const temperaturaMinimaDia1 = 2;

const temperaturaMediaDia1 = calcularTemperaturaMedia(temperaturaMaximaDia1, temperaturaMinimaDia1);
console.log(`La temperatura media del día 1 es: ${temperaturaMediaDia1} grados Celsius`);
