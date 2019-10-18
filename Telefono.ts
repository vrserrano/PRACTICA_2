// la clase debe ser exportada para que sea accesible desde otros archivos del proyecto
export class Telefono {
    tipoTelefono: string;
    numeroTelefono: number;

    constructor(tipoTelefono: string, numeroTelefono: number) {
        this.tipoTelefono = tipoTelefono;
        this.numeroTelefono = numeroTelefono;
    }
    get getTipo(): (string) {
        return this.tipoTelefono;
    }
    set setTipo(value: string) {
        if (value == undefined) throw "Introduzca un valor para el tipo de teléfono";
        this.tipoTelefono = value;
    }
    get getNumero(): (number) {
        return this.numeroTelefono;
    }
    set setNumero(value: number) {
        if (value == undefined) throw "Introduzca un valor para número de teléfono";
        this.numeroTelefono = value;
    }
}
