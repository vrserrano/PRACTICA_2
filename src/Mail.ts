export class Mail {
    tipoMail: string;
    direccionMail: string;

    constructor (tipoMail: string, direccionMail:string){
        this.tipoMail = tipoMail;
        this.direccionMail = direccionMail;
    }
    get getTipo(): (string) {
        return this.tipoMail;
    }
    set setTipo(value:string){
        if (value == undefined) throw "Introduzca un valor para el tipo de mail";
        this.tipoMail = value;
    }
    get getDireccion(): (string) {
        return this.direccionMail;
    }
    set setDireccion(value:string){
        if (value == undefined) throw "Introduzca una dirección";
        this.direccionMail = value;
    }
}
