class Cotizador {
    constructor(m2, valorM2, zona) {
        this.metros2 = m2
        this.valorM2 = valorM2
        this.zonaResidencia = zona
        this.getFactorResidencia = () => {
            //Pequeño porcentaje que incrementa o decrementa el costo del seguro
            //de acuerdo a la zona residencial del propietario de la vivienda
            switch (zona) {
                case 1:
                    return 1.09
                case 2:
                    return 1.10
                case 3:
                    return 1.04
                case 4:
                    return 1.19
                default: //si no llega un dato, no le incremento su costo
                    return 1
            }
        }
        this.cotizarPoliza = () => {
            //En este ejemplo, además de cotizar los M2 por un valor
            //fijo se le suma el parámetro del Factor de Residencia
                const factorResidencia = this.getFactorResidencia()
                const resultado = (this.metros2 * valorM2) * factorResidencia
                return parseFloat(resultado.toFixed(2))
        }
        this.comisionDelProductor = () => {
            //Sobre el costo total de la Póliza cotizada
            //extraigo un porcentaje de su valor, el cual 
            //será la comisión para el Productor del Seguro
                const cotizacion = this.cotizarPoliza()
                const resultado = cotizacion * comisionProductor
                return parseFloat(resultado.toFixed(2))
            }
    }
}