//----OBJETO CORIZADOR-----
//CONSTRUCTORA
class Cotizador{
    constructor(m2,valorM2, zona){
        this.metro2=m2;
        this.valorM2=valorM2;
        this.zonaResidencia=zona;
    }
    //--METODOS
    corizarPolisa(){
        resultado= this.metro2*this.valorM2;
        return parseFloat(resultado)
    }
}