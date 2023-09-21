const calcularDistancia = (x1, y1, x2, y2) => Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);

const xNaboo = 0;
const yNaboo = 0;

const xPlanetaN14 = 13; 
const yPlanetaN14 = 2;

const distancia = calcularDistancia(xNaboo, yNaboo, xPlanetaN14, yPlanetaN14);

console.log(`La distancia entre NABOO y el planeta es: ${distancia}`);
