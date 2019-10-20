import { Direccion } from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
    nombrePersona: string;
    apellidosPersona: string;
    edadPersona: number;
    dniPersona: string;
    cumpleañosPersona:Date;
    colorFavoritoPersona: string;
    sexoPersona: string;
    direccionesPersona: Direccion;
    mailsPersona: Mail;
    telefonosPersona: Telefono;
    notasPersona: string;


    constructor(nombrePersona: string, apellidosPersona: string, edadPersona: number, dniPersona: string, cumpleañosPersona: Date,  colorFavoritoPersona: string,  sexoPersona: string, direccionesPersona: Direccion, mailsPersona: Mail, telefonosPersona: Telefono, notasPersona: string) {
        this.nombrePersona = nombrePersona;
        this.apellidosPersona = apellidosPersona;
        this.edadPersona = edadPersona;
        this.dniPersona = dniPersona;
        this.cumpleañosPersona = cumpleañosPersona;
        this.colorFavoritoPersona = colorFavoritoPersona;
        this.sexoPersona = sexoPersona;
        this.direccionesPersona  = direccionesPersona;
        this.mailsPersona = mailsPersona;
        this.telefonosPersona = telefonosPersona;
        this.notasPersona = notasPersona;
    }
    get getNombre(): (string) {
        return this.nombrePersona;
    }
    set setNombre(value: string) {
        if (value == undefined) throw "Introduzca un nombre";
        this.nombrePersona = value;
    }
    get getApellidos(): (string) {
        return this.apellidosPersona;
    }
    set setApellidos(value: string) {
        if (value == undefined) throw "Introduzca los apellidos";
        this.apellidosPersona = value;
    }
    get getEdad(): (number) {
        return this.edadPersona;
    }
    set setEdad(value: number) {
        if (value == undefined) throw "Introduzca la edad";
        this.edadPersona = value;
    }
    get getDni(): (string) {
        return this.dniPersona;
    }
    set setDni(value: string) {
        if (value == undefined) throw "Introduzca el DNI";
        this.dniPersona = value;
    }
    get getCumpleaños(): (string){
        var mes = this.cumpleañosPersona.getMonth();  
        var diaMes = this.cumpleañosPersona.getDate();   
        var año = this.cumpleañosPersona.getFullYear();
        
        return "" + diaMes + "-" + mes + "-" + año;
    }
    set setCumpleaños(value: Date) {
        if (value == undefined) throw "Introduzca su fecha de cumpleaños";
        this.cumpleañosPersona = value;
    }
    get getColorFavorito(): (string){
        return this.colorFavoritoPersona;
    }
    set setColorFavorito(value: string) {
        if (value == undefined) throw "Introduzca su color favorito";
        this.colorFavoritoPersona = value;
    }
    get getSexo(): (string){
        return this.sexoPersona;
    }
    set setSexo(value: string) {
        if (value == undefined) throw "Introduzca sexo";
        this.sexoPersona = value;
    }
    get getDirecciones(): (Direccion) {
        return this.direccionesPersona;
    }
    set setDirecciones(value: Direccion){
        if (value == undefined) throw "Introduzca datos de dirección";
        this.direccionesPersona = value;
    }
    get getMails(): (Mail){
        return this.mailsPersona;
    }
    set setMails(value: Mail){
        if (value == undefined) throw "Introduzca el mail";
        this.mailsPersona = value;
    }
    get getTelefonos(): (Telefono){
        return this.telefonosPersona;
    }
    set setTelefonos(value: Telefono){
        if (value == undefined) throw "Introduzca datos teléfono";
        this.telefonosPersona = value;
    }
    
    get getNotas(): (string) {
        return this.notasPersona;
    }

    set setNotas(value: string) {
        if (value == undefined) throw "Introduzca las notas";
        this.notasPersona = value;
    }

    get imprimirPersona(): (string) {
        return "El nombre es: " + this.nombrePersona + "\n" +
        "Los apellidos son: " + this.apellidosPersona + "\n" + 
        "La edad es: " + this.edadPersona + "\n" + 
        "El DNI es: " + this.dniPersona + "\n" +
        "La fecha de cumpleaños es: " + this.getCumpleaños + "\n" +
        "El color favorito es: " + this.colorFavoritoPersona + "\n" +
        "El sexo es: " + this.sexoPersona + "\n" +
        "La dirección es: " + this.getDirecciones.getCalle + "\n" +
        "Número: " + this.getDirecciones.getNumero + "\n" +
        "Piso: " + this.getDirecciones.getPiso + "\n" +
        "Letra: " + this.getDirecciones.getLetra + "\n" +
        "Código Postal: " + this.getDirecciones.getCodigoPostal + "\n" +
        "Población: " + this.getDirecciones.getPoblacion + "\n" +
        "Provincia: " + this.getDirecciones.getProvincia + "\n" +
        "El mail es: " + this.getMails.getTipo + "\n" +
        "La dirección mail es: " + this.getMails.getDireccion + "\n" + 
        "El teléfono es: " + this.getTelefonos.getTipo + "\n" +
        "El número de teléfono es: " + this.getTelefonos.getNumero + "\n" +
        "Nota: " + this.notasPersona + "\n";
    }
}