// la clase Telefono debe ser importada desde el archivo que la contenga para poder ser usada
// en este caso, el archivo se llama Telefono, y se indica como ./Telefono porque está en el
// mismo directorio que el archivo main
import { Telefono } from "./Telefono"
import { Mail } from "./Mail"
import { Direccion } from "./Direccion"
import { Persona } from "./Persona"

// se crea el objeto nuevo y se le da el nombre de telefonoVero
var cumpleañosVero = new Date (1989,4,22);
var direccionVero = new Direccion ("Lagunas de Ruidera", 141, 0,"B", 28981, "Parla", "Madrid");
var mailVero = new Mail ("Personal", "veronicarodriguezserrano@gmail.com");
var telefonoVero = new Telefono ("personal", 650586454);

var personaVero = new Persona ("vero", "rguez serrano", 30, 53472958, cumpleañosVero, "verde", "mujer", direccionVero, mailVero, telefonoVero, "pareja");

var arrayPersona: string []


// se muestra por pantalla los valores del objeto
console.log("El nombre es " + personaVero.getNombre);
console.log("La dirección es " + personaVero.getDirecciones.getCalle);












