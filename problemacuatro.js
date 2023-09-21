function sablesDefectuosos(energias) {
    let contador = 0;
    for (let i = 0; i < energias.length; i++) {
        if (energias[i] < 0) {
            contador++;
        }
    }
    return contador;
}

const energias = [2, 4, -8, 5, -6];
const cantidadSables = sablesDefectuosos(energias);
console.log(cantidadSables);
