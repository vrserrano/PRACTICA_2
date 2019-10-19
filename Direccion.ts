export class Direccion {
    calleDireccion: string;
    numeroDireccion: number;
    pisoDireccion: number;
    letraDireccion: string;
    codigoPostalDireccion:number;
    poblacionDireccion: string;
    provinciaDireccion: string;
    
    constructor(calleDireccion: string, numeroDireccion: number, pisoDireccion: number, letraDireccion: string, codigoPostalDireccion:number,  poblacionDireccion: string,  provinciaDireccion: string) {
        this.calleDireccion = calleDireccion;
        this.numeroDireccion = numeroDireccion;
        this.pisoDireccion = pisoDireccion;
        this.letraDireccion = letraDireccion;
        this.codigoPostalDireccion = codigoPostalDireccion;
        this.poblacionDireccion = poblacionDireccion;
        this.provinciaDireccion = provinciaDireccion;
    }
    get getCalle(): (string) {
        return this.calleDireccion;
    }
    set setCalle(value: string) {
        if (value == undefined) throw "Introduzca una calle";
        this.calleDireccion = value;
    }
    get getNumero(): (number) {
        return this.numeroDireccion;
    }
    set setNumero(value: number) {
        if (value == undefined) throw "Introduzca el número de la calle";
        this.numeroDireccion = value;
    }
    get getPiso(): (number) {
        return this.pisoDireccion;
    }
    set setPiso(value: number) {
        if (value == undefined) throw "Introduzca el piso";
        this.pisoDireccion = value;
    }
    get getLetra(): (string) {
        return this.letraDireccion;
    }
    set setLetra(value: string) {
        if (value == undefined) throw "Introduzca la letra";
        this.letraDireccion = value;
    }
    get getCodigoPostal(): (number){
        return this.codigoPostalDireccion;
    }
    set setCodigoPostal(value: number) {
        if (value == undefined) throw "Introduzca el código postal";
        this.codigoPostalDireccion = value;
    }
    get getPoblacion(): (string){
        return this.poblacionDireccion;
    }
    set setPoblacion(value: string) {
        if (value == undefined) throw "Introduzca la población";
        this.poblacionDireccion = value;
    }
    get getProvincia(): (string){
        return this.provinciaDireccion;
    }
    set setProvincia(value: string) {
        if (value == undefined) throw "Introduzca la provincia";
        this.provinciaDireccion = value;
    }
}
