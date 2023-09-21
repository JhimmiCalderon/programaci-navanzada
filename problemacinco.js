const calcularSalario = (licenciasVendidas) => {
    const salarioBase = 3500000;
    const comisionPorLicencia = 1500000;
    const deducciones = (salarioBase + (comisionPorLicencia * licenciasVendidas)) * 0.05;
    const salarioMensual = salarioBase + (comisionPorLicencia * licenciasVendidas) - deducciones;
    return salarioMensual;
};

const licenciasVendidas = 3; 
const salarioVendedor = calcularSalario(licenciasVendidas);
console.log(`El salario mensual del vendedor es: ${salarioVendedor} COP`);
