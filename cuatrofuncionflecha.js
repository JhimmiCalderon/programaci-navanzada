const contarSables = (energias) => energias.filter(energia => energia < 0).length;

const energias = [2, 4, -8, 5, -6];
const cantidadSables = contarSables(energias);
console.log(cantidadSables);
