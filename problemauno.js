
function calcularDistancia(x1, y1, x2, y2) {
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}


const xNaboo = 0;
const yNaboo = 0;


const xPlanetaN14 = 13; 
const yPlanetaN14 = 2; 

const distancia = calcularDistancia(xNaboo, yNaboo, xPlanetaN14, yPlanetaN14);


console.log("La distancia es: " + distancia + " ");


