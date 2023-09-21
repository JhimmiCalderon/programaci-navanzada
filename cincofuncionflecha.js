const calcularSalarioMensual = (licenciasVendidas) => 3500000 + (1500000 * licenciasVendidas) - ((3500000 + 1500000 * licenciasVendidas) * 0.05);

const licenciasVendidas = 5; 
const salarioVendedor = calcularSalarioMensual(licenciasVendidas);
console.log(`El salario mensual del vendedor es: ${salarioVendedor} COP`);
